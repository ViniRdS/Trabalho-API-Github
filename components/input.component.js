import { TextInput, StyleSheet } from 'react-native';

export default function Input ({onChangeText, placeholder })  {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={placeholder}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 45,
        width: 250,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
    },
});

