import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { ListProvider } from './src/components/context/ListContext';
import Todo from './src/components/todo/Todo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <ListProvider>

        <Todo />
        <StatusBar style="auto" />
        
      </ListProvider>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(100, 50, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
