import { StatusBar } from "expo-status-bar";
import { useState, UseState } from "react";
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
  const [cidade, setCidade] = useState("");

  const capturarCidade = (cidadeCapturada) => {
    setCidade(cidadeCapturada);
  };
  return (
    <View style={styles.container}>
      <View styles={styles.cidadeView}>
        <TextInput
          style={styles.cidadeTextInput}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button title="Search" />
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
