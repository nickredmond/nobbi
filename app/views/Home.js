import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logoTitle}>nobbi</Text>
                <Text style={styles.logoSubtitle}>be the <Text style={{fontStyle: 'italic'}}>something</Text>-est</Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.button, styles.button_leaderboard]}>
                        <FontAwesome name='trophy' style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>LEADERBOARD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.button_post]}>
                        <Entypo name='pencil' style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>POST</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.button, styles.button_search]}>
                        <FontAwesome name='search' style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>SEARCH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.button_random]}>
                        <Entypo name='shuffle' style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>RANDOM</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.button, styles.button_profile]}>
                        <FontAwesome name='user' style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>PROFILE</Text>
                    </TouchableOpacity>
                    {/* only show UPGRADE if not premium already */}
                    <TouchableOpacity style={[styles.button, styles.button_upgrade]}>
                        <FontAwesome name='arrow-circle-up' style={styles.buttonIcon} />
                        <Text style={styles.buttonText}>UPGRADE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 8,
        alignItems: 'center',
        backgroundColor: '#222'
    },
    logoTitle: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#eee',
        marginTop: 25
    },
    logoSubtitle: {
        fontSize: 28,
        color: '#ccc',
        marginBottom: 20
    },
    buttonRow: {
        marginBottom: 15,
        marginLeft: 15,
        flex: 2,
        flexDirection: 'row'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 15,
        flex: 1
    },
    buttonText: {
        fontSize: 22,
        color: '#333'
    },
    buttonIcon: {
        fontSize: 64,
        color: '#333',
        marginBottom: 10
    },
    button_leaderboard: {
        backgroundColor: '#88ff88'
    },
    button_random: {
        backgroundColor: '#8888ff'
    },
    button_search: {
        backgroundColor: '#ffff88'
    },
    button_profile: {
        backgroundColor: '#ff8888'
    },
    button_post: {
        backgroundColor: '#88ffff'
    },
    button_upgrade: {
        backgroundColor: '#ff88ff'
    }
});