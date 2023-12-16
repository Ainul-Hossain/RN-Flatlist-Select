import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  console.log('This line is from App.js...');

  const [data, setData] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const onSelect = (i) => {
    const tempData = [];

    data.map((item, index) => {
      if (index === i) {
        if (item === true) {
          tempData.push(false);
        } else {
          tempData.push(true);
        }
      } else {
        if (item === true) {
          tempData.push(true);
        } else {
          tempData.push(false);
        }
      }
    })

    setData(tempData);

    console.log(data);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={data}
        style={{ marginTop: 100, marginBottom: 100 }}
        renderItem={({ item, index }) => {

          return (
            <TouchableOpacity
              onPress={() => {
                onSelect(index);
              }}
              style={{
                width: '100%',
                height: 70,
                borderWidth: .2,
                borderColor: 'gray',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: item === true ? 'green' : 'white'
              }}
            >
              <Text style={{ fontSize: 30 }}>{`Item ${index + 1}`}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
