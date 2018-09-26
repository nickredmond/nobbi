import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Dimensions } from 'react-native';
import  Image  from 'react-native-scalable-image';

export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingImages: false,
            isImagesLoaded: false
        }
    }

    // static getDerivedStateFromProps(props, current_state) {
    //     let updatedState = null;
        
    //     if (props.imageSources && props.imageSources.length > 0) {
    //         console.log('doin it')
    //         this.setState({ isLoadingImages: true });

    //         const windowWidth = Dimensions.get('window').width;
    //         const imagesList = [];

    //         const numberOfImageSources = props.imageSources.length;

    //         props.imageSources.forEach(imageSource => {
    //             Image.getSize(imageSource, (width, height) => {
    //                 const scaledHeight = height * (windowWidth / width);
    //                 imagesList.push({
    //                     imageSource,
    //                     width: windowWidth,
    //                     height: scaledHeight
    //                 });

    //                 if (imagesList.length === numberOfImageSources) {
    //                     updatedState = {
    //                         isLoadingImages: false,
    //                         isImagesLoaded: true,
    //                         imagesList
    //                     };
    //                 }
    //             });

    //             images.push(
                    
    //             );
    //             i++;
    //         });
    //     }

    //     return updatedState;
    // }

    componentDidMount() {
        console.log('hm ' + JSON.stringify(this.props))
        
    }

    render() {
        const comments = [];
        if (this.props.comments) {
            // render comments
        }

        const textContent = this.props.textContent || "";
        

        const images = [];
        if (this.props.imageSources) {
            const windowWidth = Dimensions.get('window').width;
            let i = 0;
            this.props.imageSources.forEach((imageSource) => {
                images.push(<Image key={i} source={{ uri: imageSource }} width={windowWidth} />);
                i++;
            })
        }

        return (
            <ScrollView>
                {images}
                    {/* <FlatList 
                        data={this.props.imageSources} 
                        renderItem={({item}) => 
                        
                        } 
                    /> */}

                <Text style={[styles.text, styles.postText]}>{textContent}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#efefef'
    },
    postText: {
        fontSize: 16,
        marginLeft: 10
    }
})