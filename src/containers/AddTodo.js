import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

class AddTodo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Eg. Create New Video'
          style={styles.textInput}
        />
        <TouchableOpacity onPress={() => alert('Added Todo')}>
          <View style={styles.iconContainer}>
            <Ionicons name='md-add' size={30} style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea',
    height: 50,
    flex: 1,
    padding: 5
  },
  iconContainer: {
    backgroundColor: '#eaeaea',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: '#de9595',
    padding: 10
  }
})
