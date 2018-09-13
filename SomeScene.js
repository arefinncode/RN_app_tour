'use strict'
import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import {View, DeviceEventEmitter} from 'react-native'


export default class SomeScene extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            visibleHeight: Dimensions.get('window').height
        }


    }

    componentWillMount () {
        this.addListenerOn(DeviceEventEmitter,
            'keyboardWillShow',
            this.scrollResponderKeyboardWillShow);


        //DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
        // DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))

        // this.addListenerOn(DeviceEventEmitter,
        //     'keyboardWillHide',
        //     this.keyboardWillHide.bind(this));
    }






    // keyboardWillShow (e) {
    //     let newSize = Dimensions.get('window').height - e.endCoordinates.height
    //     this.setState({visibleHeight: newSize})
    // }
    //
    // keyboardWillHide (e) {
    //     this.setState({visibleHeight: Dimensions.get('window').height})
    // }

    render () {
        return (
            <View style={{height: this.state.visibleHeight}}>
                ...
            </View>
        )
    }
}
