import { Link } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Chats() {
  const users = [
    { name: "Andre", id: 1 },
    { name: "Kiritod", id: 2 },
    { name: "Asuna", id: 3 },
    { name: "Eren", id: 4 },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 12,
        }}
      >
        <Text>Your Friend</Text>
        <Text>
          <Pressable>
            <Text>LOGOUT</Text>
          </Pressable>
        </Text>
      </View>
      {users.map((user) => (
        <Link href={`/chat/${user.id}`} style={styles.user}>
          <View key={user.id}>
            <Text>{user.name}</Text>
          </View>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

    // justifyContent: "center",
  },
  user: {
    padding: 20,
    borderColor: "red",
    borderWidth: 1,
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
