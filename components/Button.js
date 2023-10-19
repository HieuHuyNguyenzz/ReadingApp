import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { faPlus, faXmark, faMinus, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../constants';

class Button extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increaseCount = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    decreaseCount = () => {
        this.setState({ counter: this.state.counter - 1 })
        if (this.state.counter === 0) {
            this.setState({ counter: 0 })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.increaseCount()}>
                        <FontAwesomeIcon icon={faPlus} />
                </TouchableOpacity>
                <Text>{this.state.counter}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.decreaseCount()}>
                        <FontAwesomeIcon icon={faMinus} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 18,
        gap: 10
    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        opacity: 0.6
    },
})

export default Button