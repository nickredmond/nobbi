import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

export class PostCategory extends React.Component {
    DEFAULT_ICON_STYLE = { color: '#AAA' };
    SELECTED_FUNNY_ICON_STYLE = { color: '#FFE400' };
    SELECTED_INSPIRING_ICON_STYLE = { color: '#FF38A4' };
    SELECTED_WEIRD_ICON_STYLE = { color: '#B472FF' };
    SELECTED_SAD_ICON_STYLE = { color: '#38A0FF' };
    SELECTED_HELPFUL_ICON_STYLE = { color: '#54FF00' };

    constructor(props) {
        super(props);
        this.state = {
            funnyIconStyle: this.DEFAULT_ICON_STYLE,
            inspiringIconStyle: this.DEFAULT_ICON_STYLE,
            weirdIconStyle: this.DEFAULT_ICON_STYLE,
            sadIconStyle: this.DEFAULT_ICON_STYLE,
            helpfulIconStyle: this.DEFAULT_ICON_STYLE
        }
    }

    onFunnyPress = () => {
        this.updatedState = {
            funnyIconStyle: this.SELECTED_FUNNY_ICON_STYLE,
            inspiringIconStyle: this.DEFAULT_ICON_STYLE,
            weirdIconStyle: this.DEFAULT_ICON_STYLE,
            sadIconStyle: this.DEFAULT_ICON_STYLE,
            helpfulIconStyle: this.DEFAULT_ICON_STYLE
        };
        this.setState(this.updatedState);
        this.props.onCategoryUpdate('funny');
    }

    onInspiringPress = () => {
        this.updatedState = {
            funnyIconStyle: this.DEFAULT_ICON_STYLE,
            inspiringIconStyle: this.SELECTED_INSPIRING_ICON_STYLE,
            weirdIconStyle: this.DEFAULT_ICON_STYLE,
            sadIconStyle: this.DEFAULT_ICON_STYLE,
            helpfulIconStyle: this.DEFAULT_ICON_STYLE
        };
        this.setState(this.updatedState);
        this.props.onCategoryUpdate('inspiring');
    }

    onWeirdPress = () => {
        this.updatedState = {
            funnyIconStyle: this.DEFAULT_ICON_STYLE,
            inspiringIconStyle: this.DEFAULT_ICON_STYLE,
            weirdIconStyle: this.SELECTED_WEIRD_ICON_STYLE,
            sadIconStyle: this.DEFAULT_ICON_STYLE,
            helpfulIconStyle: this.DEFAULT_ICON_STYLE
        };
        this.setState(this.updatedState);
        this.props.onCategoryUpdate('weird');
    }

    onSadPress = () => {
        this.updatedState = {
            funnyIconStyle: this.DEFAULT_ICON_STYLE,
            inspiringIconStyle: this.DEFAULT_ICON_STYLE,
            weirdIconStyle: this.DEFAULT_ICON_STYLE,
            sadIconStyle: this.SELECTED_SAD_ICON_STYLE,
            helpfulIconStyle: this.DEFAULT_ICON_STYLE
        };
        this.setState(this.updatedState);
        this.props.onCategoryUpdate('sad');
    }

    onHelpfulPress = () => {
        this.updatedState = {
            funnyIconStyle: this.DEFAULT_ICON_STYLE,
            inspiringIconStyle: this.DEFAULT_ICON_STYLE,
            weirdIconStyle: this.DEFAULT_ICON_STYLE,
            sadIconStyle: this.DEFAULT_ICON_STYLE,
            helpfulIconStyle: this.SELECTED_HELPFUL_ICON_STYLE
        };
        this.setState(this.updatedState);
        this.props.onCategoryUpdate('helpful');
    }

    render () {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.onFunnyPress()}>
                    <MaterialCommunityIcons name='emoticon-excited' style={[styles.buttonIcon, this.state.funnyIconStyle]} />
                    { this.props.numberOfFunnyVotes && <Text>{this.props.numberOfFunnyVotes}</Text> }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onInspiringPress()}>
                    <MaterialCommunityIcons name='lightbulb-on' style={[styles.buttonIcon, this.state.inspiringIconStyle]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onWeirdPress()}>
                    <MaterialCommunityIcons name='emoticon-neutral' style={[styles.buttonIcon, this.state.weirdIconStyle]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onSadPress()}>
                    <Entypo name='emoji-sad' style={[styles.buttonIcon, this.state.sadIconStyle]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onHelpfulPress()}>
                    <FontAwesome name='check-circle' style={[styles.buttonIcon, this.state.helpfulIconStyle]} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    buttonIcon: {
        fontSize: 48
    }
});