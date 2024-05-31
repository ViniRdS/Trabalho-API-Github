import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonC  ({ onPress, title }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={[styles.text]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 45,
        width: 300,
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});