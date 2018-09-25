import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export class Post extends React.Component {

    render() {
        const images = [];
        this.props.imageSources.forEach(imageSource => {
            images.push(
                <Image source={ imageSource } />
            );
        });

        return (
            <View>
                {images}
                <Text>{this.props.textContent}</Text>
            </View>
        );
    }
}