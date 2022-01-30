import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CheckBox } from "react-native-web";
import CardList from "./components/card-list.component";

function Home(){
  const [isCompleto, setCompleto] = useState(false);
  const [isIncompleto, setIncompleto] = useState(false);

  return (
    <View style={styles.tudo}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isCompleto}
          onValueChange={setCompleto}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Completo</Text>
        <CheckBox
          value={isIncompleto}
          onValueChange={setIncompleto}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Incompleto</Text>
      </View>
      <CardList isCompleto={isCompleto} isIncompleto={isIncompleto}/>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  }
});
