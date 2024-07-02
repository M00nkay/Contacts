import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Detail({ route }) {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Image source={friend.image} style={styles.image} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.description}>{friend.description}</Text>
      <Text style={styles.tocontact}>How to contact : {friend.tocontact}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
   tocontact: {
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
});
