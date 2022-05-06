import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { LANGUAGE } from "@env";

export default function App() {
  return (
    <View style={styles.container}>
      <View styles={cidadeView}>
        <TextInput
          style={cidadeTextInput}
          placeholder="Digite o nome da cidade"
        >
          <Button title="Search"></Button>
        </TextInput>
      </View>
      <FlatList></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  cidadeView: {
    padding: 12,
    marginBottom: 8,
  },
  cidadeTextInput: {
    padding: 12,
    borderBottomColor: "#FF9800",
    borderLeftWidth: 2,
    marginBottom: 4,
    textAlign: "center",
  },
});
