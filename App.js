/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  DeviceEventEmitter
} from 'react-native'

import { AppTour, AppTourSequence, AppTourView } from 'react-native-app-tour'

import Top from './components/Top'
import Center from './components/Center'
import Bottom from './components/Bottom'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class App extends Component<{}> {
  constructor(props) {
    super(props)

    this.appTourTargets = []
  }

  componentWillMount() {

      // this.register_Sequence_Step_Event()
      // this.register_Finish_Sequence_Event()
    this.registerSequenceStepEvent()
    this.registerFinishSequenceEvent()
  }

  componentDidMount() {
      // appTourSequence is a larger container that holds appTourTarget
      // appTourSequence=  array_of(appTourTarget);
      // this.appTourTargets
    setTimeout(() => {
      let appTourSequence = new AppTourSequence()
      this.appTourTargets.forEach(appTourTarget => {
        appTourSequence.add(appTourTarget)
      })

      AppTour.ShowSequence(appTourSequence)
    }, 1000)
  }

  registerSequenceStepEvent = () => {
    if (this.sequenceStepListener) {
      this.sequenceStepListener.remove()
    }
    this.sequenceStepListener = DeviceEventEmitter.addListener(
      'onShowSequenceStepEvent121212121',
      (e: Event) => {
        console.log("onShowSequenceStepEvent:",e)
      }
    )
  }

  registerFinishSequenceEvent = () => {
    if (this.finishSequenceListener) {
      this.finishSequenceListener.remove()
    }
    this.finishSequenceListener = DeviceEventEmitter.addListener(
      'onFinishSequenceEvent123123123',
      (e: Event) => {
        console.log("onFinishSequenceEvent:",e)
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Top
          style={styles.top}

          // addAppTourTarget is called from Top file
          addAppTourTarget={appTourTarget => {
            this.appTourTargets.push(appTourTarget)
          }}
        />
        <Center
          style={styles.center}
          addAppTourTarget={appTourTarget => {
            this.appTourTargets.push(appTourTarget)
          }}
        />
        <Bottom
          style={styles.bottom}
          addAppTourTarget={appTourTarget => {
            this.appTourTargets.push(appTourTarget)
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  top: {
    flex: 1
  },
  center: {
    flex: 1
  },
  bottom: {
    flex: 1
  }
})




