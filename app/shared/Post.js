import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet, Dimensions } from 'react-native';
import  Image  from 'react-native-scalable-image';
import { PostCategory } from './PostCategory';
import { voteForPost } from '../services/PostService';

export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voteCounts: null
        }
    }

    onAddCommentPress = () => {

    }

    onCategoryUpdate = (categoryName) => {
        // const userToken = null; // todo: user auth
        // voteForPost(userToken, this.props.postId, categoryName);
        this.setState({
            selectedCategory: this.state.selectedCategory === categoryName ? null : categoryName
        });
        this.props.onCategoryChange(categoryName);
    }

    static getDerivedStateFromProps(props, current_state) {
        return { 
            voteCounts: props.voteCounts || null,
            selectedCategory: props.userVote || null
        };
    }

    render() {
        const comments = [];
        if (this.props.comments) {
            // render comments
        }

        const textContent = this.props.textContent || "";
        const author = this.props.author || "[unknown]";
        const voteCounts = this.props.voteCounts || null;

        const images = [];
        if (this.props.imageSources) {
            const windowWidth = Dimensions.get('window').width;
            let i = 0;
            this.props.imageSources.forEach((imageSource) => {
                images.push(<Image key={i} style={styles.postImage} source={{ uri: imageSource }} width={windowWidth} />);
                i++;
            })
        }
        
        return (
            <ScrollView>
                {images}
                <View style={styles.textView}>
                    <Text style={[styles.text, styles.postText]}>{textContent}</Text>
                    <Text style={[styles.text, styles.authorText]}>by <Text style={styles.authorName}>{author}</Text></Text>
                    <View style={styles.votingComponentStyle}>
                        { this.state.voteCounts && (
                            <PostCategory 
                                style={styles.votingComponentStyle}
                                onCategoryUpdate={(categoryName) => this.onCategoryUpdate(categoryName)}
                                voteCounts={voteCounts}
                                selectedCategory={this.state.selectedCategory}>
                            </PostCategory>
                        ) }
                    </View>
                    <View style={styles.commentsHeader}>
                        <Text style={[styles.text, styles.commentsSectionTitle]}>Comments</Text>
                        <Button style={styles.button_addComment} title={'+ Add'} onPress={() => this.onAddCommentPress()}></Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#efefef'
    },
    textView: {
        marginLeft: 10
    },
    postText: {
        fontSize: 18,
        marginTop: 10
    },
    postImage: {
        marginTop: 10
    },
    authorText: {
        marginTop: 10,
        fontSize: 16,
        fontStyle: 'italic'
    },
    authorName: {
        fontWeight: 'bold'
    },
    commentsHeader: {
        flexDirection: 'row',
        marginRight: 15
    },
    commentsSectionTitle: {
        flex: 1,
        fontSize: 20
    },
    button_addComment: {
        flex: 1,
        alignItems: 'flex-end'
    },
    votingComponentStyle: {
        marginTop: 10
    }
})