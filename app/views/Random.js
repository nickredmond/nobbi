import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NobbiHeader } from '../shared/NobbiHeader';
import { Post } from '../shared/Post';
import { getRandomPosts, voteForPost } from '../services/PostService';

export class Random extends React.Component {
    ITEMS_REMAINING_REFRESH_THRESHOLD = 10;
    POSTS_PRELOAD_AMOUNT = 20;

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { 
            currentPost: {
                textContent: '[ loading... ]', // todo: make this more user-friendly
                imageSources: []
            },
            currentIndex: 0,
            allPosts: null
        };

        const userToken = null; // todo: user auth, put "user/my vote" in posts coming back :shrug:
        getRandomPosts(userToken, count=this.POSTS_PRELOAD_AMOUNT).then((posts) => {
            this.setState({
                currentPost: posts[0],
                allPosts: posts
            });
        });
    }

    onBackPress = () => {
        if (this.state.currentIndex === 0) {
            this.props.navigation.navigate('HomeRoute');
        } else {
            const updatedIndex = this.state.currentIndex - 1;
            this.setCurrentPost(updatedIndex);
        }
    }

    onNextPress = () => {
        if (this.state.allPosts) {
            const updatedIndex = this.state.currentIndex + 1;
            this.setCurrentPost(updatedIndex);

            const numberOfItemsLeft = this.state.allPosts.length - updatedIndex - 1;
            if (numberOfItemsLeft < this.ITEMS_REMAINING_REFRESH_THRESHOLD) {
                const userToken = null; // todo: uesr auth
                getRandomPosts(userToken, count=this.POSTS_PRELOAD_AMOUNT).then((posts) => {
                    const preloadedPosts = this.state.allPosts.concat(posts);
                    this.setState({
                        allPosts: preloadedPosts
                    });
                });
            }
        }
    }

    setCurrentPost = (postIndex) => {
        this.setState({
            currentPost: this.state.allPosts[postIndex],
            currentIndex: postIndex
        });
    }

    onUserVote = (category) => {
        const userToken = null; // todo: user auth
        voteForPost(userToken, this.props.postId, category);

        const currentPost = this.state.currentPost;
        currentPost.userVote = (category === currentPost.userVote) ? null : category;
        this.setState({ currentPost });
    }

    render() {
        const {navigate} = this.props.navigation;
        console.log("wok the vote " + JSON.stringify(this.state.currentPost))
        return (
            <View style={styles.container}>
                <NobbiHeader style={styles.header} navigate={navigate} backButtonText='Home' onBackPress={() => this.onBackPress()} onNextPress={() => this.onNextPress()} />
                <Text style={styles.pageTitle}>RANDOM</Text>
                <Post style={styles.post} 
                    textContent={this.state.currentPost.textContent} 
                    imageSources={this.state.currentPost.imageSources}
                    author={this.state.currentPost.author}
                    voteCounts={this.state.currentPost.voteCounts}
                    userVote={this.state.currentPost.userVote || null}
                    onCategoryChange={(category) => this.onUserVote(category)}>
                </Post>
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
    },
    header: {
        //flex: 1
    },
    pageTitle: {
        color: '#ddd',
        fontSize: 24
    },
    post: {
        flex: 1
    }
});