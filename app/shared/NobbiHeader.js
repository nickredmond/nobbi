import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export class NobbiHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItemIndex: 0,
            isBackButtonTextDisplayed: true,
            isNextButtonDisplayed: !this.props.numberOfItems || this.props.numberOfItems > 1
        };
    }

    render() {
        const backButtonText = this.props.backButtonText || "Back";

        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, styles.button_back]}>
                    <Entypo name='chevron-left' style={styles.buttonIcon} />
                    { this.state.isBackButtonTextDisplayed && <Text>{backButtonText}</Text> }
                </TouchableOpacity>
                <TouchableOpacity 
                        style={[styles.button, styles.button_home]}
                        onPress={() => this.goHome()}>
                    <Entypo name='home' style={styles.buttonIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.button_next]}>
                    <Entypo name='chevron-right' style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>
        );
    }

    goBack = () => {
        let currentIndex = this.state.currentItemIndex;
        currentIndex--;

        const isBackButtonTextDisplayed = currentIndex <= 0;

        this.setState({
            currentItemIndex: currentIndex,
            isBackButtonTextDisplayed
        });

        this.props.onBackPress();
    }

    goNext = () => {
        let currentIndex = this.state.currentItemIndex;
        currentIndex++;

        let isNextButtonDisplayed = !this.props.numberOfItems || currentIndex < this.props.numberOfItems - 1;

        this.setState({
            currentItemIndex: currentIndex,
            isNextButtonDisplayed
        });

        this.props.onNextPress();
    }

    goHome = () => {
        this.props.navigate('HomeRoute');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: '#222'
    },
    button: {
        flex: 1
    },
    buttonIcon: {
        fontSize: 48,
        color: '#efefef',
        marginBottom: 10
    },
    button_back: {
        alignItems: 'flex-start'
    },
    button_home: {
        alignItems: 'center'
    },
    button_next: {
        alignItems: 'flex-end'
    }
})