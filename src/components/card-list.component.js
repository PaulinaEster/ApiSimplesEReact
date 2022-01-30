import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Card from "./card.component";

const CardList = (props) => {
  const [tarefas, setTarefas] = useState([]);

  const pegaApi = async () => (
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(json => setTarefas(json.filter(json => json.userId === 1)))
  )

  useEffect(() => {
    pegaApi();
  }, []);

  return (
    <FlatList
      data={tarefas}
      renderItem={({ item }) => {
        if (item.completed === true && props.isCompleto) {
          return <Card item={item} />
        } else if (item.completed === false && props.isIncompleto) {
          return <Card item={item} />
        } else if (!props.isIncompleto && !props.isCompleto) {
          return <Card item={item} />
        }

      }}
      keyExtractor={tarefa => tarefa.id}
    />
  )
}

export default CardList;
