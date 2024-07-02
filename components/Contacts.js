import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';

const friends = [
  { id: '1', name: 'Arrietty', description: 'Wanders behind the wooden planks under your house', tocontact:'You need a discerning eye. Stay awake at night, but dont move!' ,image: require('../assets/arrietty.jpeg') },
  { id: '2', name: 'Haku', description: 'Has a passion for magic', tocontact:'Drown yourself in the river, he will take you to shallow water', image: require('../assets/haku.jpeg') },
  { id: '3', name: 'Howl', description: 'A talented wizard, however...', tocontact:'Just call him to the palace. He has an unbreakable promise', image: require('../assets/howl.jpeg') },
  { id: '4', name: 'Kiki', description: 'Always flies with the wind. She likes it', tocontact:'Create something interesting. With her curiosity, she will come to you herself', image: require('../assets/kiki.jpeg') },
  { id: '5', name: 'San', description: 'Deep in the forest with the wolves', tocontact:'Enter the forest where she lives. You will meet if you are lucky', image: require('../assets/mononoke.jpeg') },
    { id: '6', name: 'Chihiro', description: 'Sometimes she gets lost, but she always finds her way home', tocontact:'She probably found you by accident. You might also find her accidentally', image: require('../assets/chihiro.jpeg') },
      { id: '7', name: 'Jiro', description: 'Work hard, good heart. Unfortunately, life was cruel to him', tocontact:'Be his co-worker, colleague, boss, or just be a pilot, its okay', image: require('../assets/jiro.jpeg') },
        { id: '8', name: 'Sophie', description: 'Sometimes looking young, sometimes looking old. She still beautiful, by the way', tocontact:'In the city center, she worked as a hat maker. Not too hard to find, unless Howl is at war', image: require('../assets/sophie.jpeg') },
];

export default function Contacts({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('Detail', { friend: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    flex: 1,
  },
});
