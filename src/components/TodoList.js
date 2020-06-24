import React from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

const TodoList = ({ todos, toggleTodo }) => (
  <View style={styles.container}>
    {todos.map(todo =>
      <TouchableWithoutFeedback key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <Text style={[
          styles.font, {
            textDecorationLine: todo.completed ? 'line-through' : 'none'
          }
        ]}>{todo.text}</Text>
      </TouchableWithoutFeedback>
    )}
  </View>
);

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  font: {
    fontSize: 24
  }
});
