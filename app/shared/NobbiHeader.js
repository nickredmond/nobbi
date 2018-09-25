import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export class NobbiHeader extends React.Component {
    constructor() {
        this.state = {
            currentItemIndex: 0,
            isBackButtonDisplayed: true,
            isNextButtonDisplayed: !this.props.items || this.props.items.length > 0
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, styles.button_back]}>
                    <Entypo name='chevron-left' style={styles.buttonIcon} />
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

        const previousItem = null;
        const isBackButtonDisplayed = true;
        if (this.props.items && currentIndex >= 0) {
            previousItem = this.props.items[currentIndex];
            isBackButtonDisplayed = (currentIndex !== 0);
        }

        this.setState({
            currentItemIndex: currentIndex,
            isBackButtonDisplayed
        });

        this.props.onBackPress(previousItem);
    }

    goNext = () => {
        let currentIndex = this.state.currentItemIndex;
        currentIndex++;

        let nextItem = null; 
        let isNextButtonDisplayed = true;
        if (this.props.items) {
            nextItem = this.props.items[currentIndex];
            isNextButtonDisplayed = (currentIndex < this.props.items.length - 1);
        }

        this.setState({
            currentItemIndex: currentIndex,
            isNextButtonDisplayed
        });

        this.props.onNextPress(nextItem);
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