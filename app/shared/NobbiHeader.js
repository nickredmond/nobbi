import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export class NobbiHeader extends React.Component {
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
        // depends on previous page
    }

    goNext = () => {
        // depends on previous page
    }

    goHome = () => {
        this.navigate('Home');
    }

    navigate = (routeName) => {
        this.props.navigate(routeName + 'Route');
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
    
    // container: {
    //     marginTop: 15,
    //     flex: 8,
    //     alignItems: 'center',
    //     backgroundColor: '#222'
    // }
})