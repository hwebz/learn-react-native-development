import React, { Component } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import axios from 'axios'
import PhotoSection from './photo-section'
import { connect } from 'react-redux'
import { getPhotos } from '../actions'

class PhotoFeed extends Component {
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {

        return (
            <SafeAreaView>
                <FlatList
                    data={this.props.photos}
                    renderItem={({ item }) => <PhotoSection photo={item} />}
                    keyExtractor={item => item.id}
                    maxToRenderPerBatch="5"
                    initialNumToRender="3"
                />
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    return {
        photos: state.photos
    }
}

export default connect(mapStateToProps, {getPhotos})(PhotoFeed);