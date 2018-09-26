import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export class Post extends React.Component {

    render() {
        const images = [];
        if (this.props.imageSources) {
            let i = 0;
            this.props.imageSources.forEach(imageSource => {
                images.push(
                    <Image key={i} source={{ uri: imageSource }} />
                );
                i++;
            });
        }

        const comments = [];
        if (this.props.comments) {
            // render comments
        }

        const textContent = this.props.textContent || "";
        return (
            <View>
                {images}
                <Text>{textContent}</Text>
            </View>
        );
    }
}