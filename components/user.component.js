import { View, Text, Image, StyleSheet } from 'react-native';

export default function User({ avatarUrl, username, repos, followers, following }) {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>{username}</Text>
            <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>Repositórios</Text>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>{repos}</Text>
                    </View>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>Seguidores</Text>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>{followers}</Text>
                    </View>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>Seguindo</Text>
                    <View style={styles.circle}>
                        <Text style={styles.circleText}>{following}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        width: '90%',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    username: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 15,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '100%',
    },
    infoBox: {
        alignItems: 'center',
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});