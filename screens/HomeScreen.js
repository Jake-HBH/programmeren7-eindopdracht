import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const post = route.params?.post;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            {post ? (
                <View style={styles.postBox}>
                    <Text style={styles.postText}>{post}</Text>
                </View>
            ) : null}
            <TouchableOpacity style={styles.button} onPress={() => 
                navigation.navigate('Details', { itemId: 86, otherParam: 'anything you want here' })}>
                <Text style={styles.buttonText}>Go to Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Post')}>
                <Text style={styles.buttonText}>Create Post</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' },
    button: { backgroundColor: '#2196F3', padding: 12, borderRadius: 4, marginTop: 16, alignItems: 'center', minWidth: 120 },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    postBox: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 16, minWidth: 200, alignItems: 'center', elevation: 2 },
    postText: { fontSize: 16, color: '#333' },
});
