import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreatePostScreen({ route }) {
    const navigation = useNavigation();
    const [postText, setPostText] = React.useState('');

    return (
        <View style={styles.container}>
            <TextInput
                multiline
                placeholder="Post something"
                style={styles.input}
                value={postText}
                onChangeText={setPostText}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Home', { post: postText });
                }}
            >
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' },
    input: { height: 120, width: '100%', padding: 10, backgroundColor: 'white', borderRadius: 6, marginBottom: 16, fontSize: 16 },
    button: { backgroundColor: '#2196F3', padding: 12, borderRadius: 4, alignItems: 'center', minWidth: 100 },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});