import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
                <Text style={styles.buttonText}>Go to Details</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' },
    button: { backgroundColor: '#2196F3', padding: 12, borderRadius: 4, marginTop: 16, alignItems: 'center', minWidth: 120 },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
