import React, { PureComponent } from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PhotoSection extends PureComponent {
    
    constructor() {
        super();

        this.like = false
        this.state = {
            heartIcon: 'ios-heart-empty'
        }
    }
    
    toggleLike() {
        this.like = !this.like;
        this.setState({
            heartIcon: this.like ? 'ios-heart' : 'ios-heart-empty'
        });
    }

    render() {
        const {photo} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.thumbnailSection}>
                    <Image
                        style={styles.thumbnail} 
                        source={{uri: photo.user_avatar}} />
                    <View style={styles.userContainer}>
                        <Text style={styles.username}>{photo.username}</Text>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={{width: null, height: 400}}
                        source={{uri: photo.image}} />
                    <TouchableWithoutFeedback onPress={this.toggleLike.bind(this)}>
                        <Ionicons style={[styles.icon, this.like ? styles.iconHeart : {color: '#fff'}]} name={this.state.heartIcon} size={30} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.imageMeta}>
                    <Text style={styles.username}>{photo.username}</Text>
                    <Text>{photo.caption}</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        margin: 10,
    },
    thumbnailSection: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userContainer: {
        justifyContent: 'center',
        padding: 5,
    },
    imageMeta: {
        flexDirection: 'row',
    },
    username: {
        fontWeight: 'bold',
        paddingRight: 5
    },
    imageContainer: {
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 15
    },
    iconHeart: {
        color: 'red'
    }
}