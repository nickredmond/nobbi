import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import { POST_CATEGORIES } from '../services/Constants';

export const DEFAULT_ICON_STYLE = { color: '#AAA' };
export const SELECTED_FUNNY_ICON_STYLE = { color: '#FFE400' };
export const SELECTED_INSPIRING_ICON_STYLE = { color: '#FF38A4' };
export const SELECTED_WEIRD_ICON_STYLE = { color: '#B472FF' };
export const SELECTED_SAD_ICON_STYLE = { color: '#38A0FF' };
export const SELECTED_HELPFUL_ICON_STYLE = { color: '#54FF00' };

export class PostCategory extends React.Component {
    DEFAULT_ICON_STYLE = { color: '#AAA' };
    SELECTED_FUNNY_ICON_STYLE = { color: '#FFE400' };
    SELECTED_INSPIRING_ICON_STYLE = { color: '#FF38A4' };
    SELECTED_WEIRD_ICON_STYLE = { color: '#B472FF' };
    SELECTED_SAD_ICON_STYLE = { color: '#38A0FF' };
    SELECTED_HELPFUL_ICON_STYLE = { color: '#54FF00' };

    constructor(props) {
        super(props);
        this.state = PostCategory.getStateFromProps(this.props);
    }

    static getDerivedStateFromProps(props, currentState) {
        console.log("SUGAR IT " + JSON.stringify(props) + ", " + JSON.stringify(currentState))
        return PostCategory.getStateFromProps(props);
    }

    static getStateFromProps = (props) => {
        return {
            funnyIconStyle: (props.selectedCategory === POST_CATEGORIES.Funny) ? SELECTED_FUNNY_ICON_STYLE : DEFAULT_ICON_STYLE,
            inspiringIconStyle: (props.selectedCategory == POST_CATEGORIES.Inspiring) ? SELECTED_INSPIRING_ICON_STYLE : DEFAULT_ICON_STYLE,
            weirdIconStyle: (props.selectedCategory === POST_CATEGORIES.Weird) ? SELECTED_WEIRD_ICON_STYLE : DEFAULT_ICON_STYLE,
            sadIconStyle: (props.selectedCategory === POST_CATEGORIES.Sad) ? SELECTED_SAD_ICON_STYLE : DEFAULT_ICON_STYLE,
            helpfulIconStyle: (props.selectedCategory === POST_CATEGORIES.Helpful) ? SELECTED_HELPFUL_ICON_STYLE : DEFAULT_ICON_STYLE,
            selectedCategory: props.selectedCategory || null,
            voteCounts: props.voteCounts || null
        };
    }

    incrementVoteCount = (category, voteCounts) => {
        voteCounts[category]++;
        return voteCounts;
    }
    decrementVoteCount = (category, voteCounts) => {
        voteCounts[category]--;
        return voteCounts;
    }

    onCategoryButtonPress = (category, iconStyleName, selectedIconStyle) => {
        const updatedState = {
            funnyIconStyle: this.DEFAULT_ICON_STYLE,
            inspiringIconStyle: this.DEFAULT_ICON_STYLE,
            weirdIconStyle: this.DEFAULT_ICON_STYLE,
            sadIconStyle: this.DEFAULT_ICON_STYLE,
            helpfulIconStyle: this.DEFAULT_ICON_STYLE,
            selectedCategory: this.state.selectedCategory || null,
            voteCounts: this.state.voteCounts || null
        };

        let updatedVoteCounts = null;
        let updatedCategory = null;
        if (updatedState.selectedCategory && updatedState.voteCounts) {
            updatedVoteCounts = this.decrementVoteCount(updatedState.selectedCategory, updatedState.voteCounts);
        }
        if (updatedState.selectedCategory !== category) {
            if (updatedState.voteCounts) {
                updatedVoteCounts = this.incrementVoteCount(category, updatedState.voteCounts);
            }

            updatedCategory = category;
            updatedState[iconStyleName] = selectedIconStyle;
        }
        updatedState.voteCounts = updatedVoteCounts;
        updatedState.selectedCategory = updatedCategory;
        
        this.setState(updatedState);
        this.props.onCategoryUpdate(category);
    }

    onFunnyPress = () => {
        const Funny = POST_CATEGORIES.Funny;
        this.onCategoryButtonPress(Funny, 'funnyIconStyle', this.SELECTED_FUNNY_ICON_STYLE);
    }

    onInspiringPress = () => {
        const Inspiring = POST_CATEGORIES.Inspiring;
        this.onCategoryButtonPress(Inspiring, 'inspiringIconStyle', this.SELECTED_INSPIRING_ICON_STYLE);
    }

    onWeirdPress = () => {
        const Weird = POST_CATEGORIES.Weird;
        this.onCategoryButtonPress(Weird, 'weirdIconStyle', this.SELECTED_WEIRD_ICON_STYLE);
    }

    onSadPress = () => {
        const Sad = POST_CATEGORIES.Sad;
        this.onCategoryButtonPress(Sad, 'sadIconStyle', this.SELECTED_SAD_ICON_STYLE);
    }

    onHelpfulPress = () => {
        const Helpful = POST_CATEGORIES.Helpful;
        this.onCategoryButtonPress(Helpful, 'helpfulIconStyle', this.SELECTED_HELPFUL_ICON_STYLE);
    }

    render () {
        console.log("THE PROPS " + JSON.stringify(this.state))

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button_category} onPress={() => this.onFunnyPress()}>
                    <MaterialCommunityIcons name='emoticon-excited' style={[styles.buttonIcon, this.state.funnyIconStyle]} />
                    { this.state.voteCounts && <Text style={styles.voteCountText}>{this.state.voteCounts.funny || 0}</Text> }
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_category} onPress={() => this.onInspiringPress()}>
                    <MaterialCommunityIcons name='lightbulb-on' style={[styles.buttonIcon, this.state.inspiringIconStyle]} />
                    { this.state.voteCounts && <Text style={styles.voteCountText}>{this.state.voteCounts.inspiring || 0}</Text> }
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_category} onPress={() => this.onWeirdPress()}>
                    <MaterialCommunityIcons name='emoticon-neutral' style={[styles.buttonIcon, this.state.weirdIconStyle]} />
                    { this.state.voteCounts && <Text style={styles.voteCountText}>{this.state.voteCounts.weird || 0}</Text> }
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_category} onPress={() => this.onSadPress()}>
                    <Entypo name='emoji-sad' style={[styles.buttonIcon, this.state.sadIconStyle]} />
                    { this.state.voteCounts && <Text style={styles.voteCountText}>{this.state.voteCounts.sad || 0}</Text> }
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_category} onPress={() => this.onHelpfulPress()}>
                    <FontAwesome name='check-circle' style={[styles.buttonIcon, this.state.helpfulIconStyle]} />
                    { this.state.voteCounts && <Text style={styles.voteCountText}>{this.state.voteCounts.helpful || 0}</Text> }
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
    buttonIcon: {
        fontSize: 64
    },
    button_category: {
        alignItems: 'center',
        marginRight: 10
    },
    voteCountText: {
        color: '#DEDEDE'
    }
});