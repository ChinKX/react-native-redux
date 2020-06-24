import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './containers/HomeScreen'
import ElectronicsScreen from './containers/ElectronicsScreen'
import BooksScreen from './containers/BooksScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import CartScreen from './containers/CartScreen'
import { createAppContainer } from "react-navigation";
class ShoppingCart extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}
export default ShoppingCart;

const AppStackNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Electronics: {
        screen: ElectronicsScreen
    },
    Books: {
        screen: BooksScreen
    },
    Cart: {
        screen: CartScreen
    }
}, {
    defaultNavigationOptions: {
        headerTitle: 'Shopping App',
        headerRight: (
            <ShoppingCartIcon />
        )
    }
})

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});