import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function DetailsScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Details')}>
                <Text style={styles.buttonText}>Go to Details... again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.popTo('Home')}>
                <Text style={styles.buttonText}>Go to home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
                <Text style={styles.buttonText}>Go back to first screen</Text>
            </TouchableOpacity>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 4,
        marginVertical: 6,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
    },
});