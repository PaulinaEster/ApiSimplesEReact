import react from "react";
import { StyleSheet, View, Text } from "react-native";

const Card = (props) => (
  <View style={styles.container} >
    <View style={props.item.completed ? styles.indiceCompleto : styles.indiceIncompleto}>
      <Text style={styles.textIndice}>Featured {props.item.id} </Text>
    </View>
    <View style={styles.conteudo}>
      <Text style={styles.textTitle}> {props.item.title} </Text>
      <Text>{ props.item.completed ? '🟢 Completa' : "🟡 Incompleta"}
      </Text>
      <Text></Text>
    </View>
  </View>
);

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    padding: 0,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#7B2B09",
    margin: 5
  },
  conteudo: {
    marginLeft: 5,
    alignItems: 'left',
    padding: 5
  },
  indiceCompleto: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    padding: 0,
    margin:0,
    borderWidth: 0,
    backgroundColor: '#228B22'
  },
  indiceIncompleto: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    padding: 0,
    margin:0,
    borderWidth: 0,
    backgroundColor: '#EAE732'
  },
  textIndice: {
    padding: 5,
    fontSize: 15,
    fontWeight: '400',
  },
  textTitle: {
    padding: 5,
    fontWeight: '700',
  }
});
