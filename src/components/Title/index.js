import React from 'react'
import { View, Text } from 'react-native'

//style
import styles from './style'

const Title = () => {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Calculadora IMC</Text>
        </View>
    )
}

export default Title;