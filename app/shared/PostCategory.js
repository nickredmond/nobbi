import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SELECTED_ICON } from '../services/Constants';

export class PostCategory extends React.Component {
    DEFAULT_ICON_STYLE = { color: '#AAA' };
    SELECTED_FUNNY_ICON_STYLE = { color: '#FFE400' };
    SELECTED_INSPIRING_ICON_STYLE = { color: '#FF38A4' };
    SELECTED_WEIRD_ICON_STYLE = { color: '#B472FF' };
    SELECTED_SAD_ICON_STYLE = { color: '#38A0FF' };
    SELECTED_HELPFUL_ICON_STYLE = { color: '#54FF00' };

    constructor(props) {
        super(props);
        this.state = {
            funnyIconStyle: this.DEFAULT_ICON_STYLE,
            inspiringIconStyle: this.DEFAULT_ICON_STYLE,
            weirdIconStyle: this.DEFAULT_ICON_STYLE,
            sadIconStyle: this.DEFAULT_ICON_STYLE,
            helpfulIconStyle: this.DEFAULT_ICON_STYLE
        }
    }

    onFunnyPress = () => {

    }

    onInspiringPress = () => {

    }

    onWeirdPress = () => {

    }

    onSadPress = () => {

    }

    onHelpfulPress = () => {
        
    }

    render () {
        return (
            <TouchableOpacity>
                <MaterialCommunityIcons name='emoticon-excited' style={[styles.buttonIcon, this.state.funnyIconStyle]} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonIcon: {
        fontSize: 48
    }
});