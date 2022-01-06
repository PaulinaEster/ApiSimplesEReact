import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { CheckBox } from "react-native-web";

function Home(){
  const [tarefas, setTarefas] = useState([]);

  const [isCompleto, setCompleto] = useState(false);
  const [isIncompleto, setIncompleto] = useState(false);


  const pegaApi = async () =>{
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(json => setTarefas(json.filter(json => json.userId === 1)))
  }
  
  useEffect(() => {
    pegaApi();
  }, []);

  const Item = ({item}) => (
    <View style={styles.container} >
      <View style={item.completed ? styles.indiceCompleto : styles.indiceIncompleto}>
        <Text style={styles.textIndice}>Featured {item.id}</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={styles.textTitle}>{item.title}</Text>
        <Text>{ item.completed ? '🟢 Completa' : "🟡 Incompleta"}
        </Text>
        <Text></Text>
      </View>
    </View>
  );

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
      <FlatList
        data={tarefas}
        renderItem={ ({item}) => {
          if(item.completed === true && isCompleto){
            return <Item item={item}/>
          } else if (item.completed === false && isIncompleto){
            return <Item item={item}/>
          } else if(!isIncompleto && !isCompleto){
            return <Item item={item}/>
          }
        
        }}
        keyExtractor={tarefa => tarefa.title}
      />
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
  },
});
