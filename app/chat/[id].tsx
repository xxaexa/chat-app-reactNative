// ChatScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";

interface Message {
  id: number;
  text: string;
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSend = (): void => {
    if (newMessage.trim() !== "") {
      // Balik urutan pesan sebelum menambahkan pesan baru
      setMessages((prevMessages) => [
        { text: newMessage, id: messages.length },
        ...prevMessages,
      ]);
      setNewMessage("");
    }
  };

  const renderMessage: ListRenderItem<Message> = ({ item }) => (
    <View
      style={{
        padding: 10,
        margin: 5,
        backgroundColor: "#eee",
        borderRadius: 5,
      }}
    >
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 12 }}>
        <Text>Your Friend</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderRadius: 5,
            marginRight: 10,
            padding: 8,
          }}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity
          onPress={handleSend}
          style={{ padding: 10, backgroundColor: "blue", borderRadius: 5 }}
        >
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
