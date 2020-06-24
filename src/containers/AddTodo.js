import React, { Component } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  state = {
    text: ''
  };

  addTodo = (text) => {
    // update redux store
    // this.props.dispatch({ type: 'ADD_TODO', text });
    this.props.dispatch(addTodo(text));
    this.setState({ text: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder='Eg. Create New Video'
          style={styles.textInput}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View style={styles.iconContainer}>
            <Ionicons name='md-add' size={30} style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddTodo);

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
