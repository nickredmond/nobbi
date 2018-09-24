import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NobbiHeader } from '../shared/NobbiHeader';

export class Random extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <NobbiHeader navigate={navigate} />
                <Text>RANDOM</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: '#222',
        alignItems: 'center',
        flex: 1
    }
});