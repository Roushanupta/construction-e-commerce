import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button, View, FlatList, TextInput } from 'react-native';

// Mock Data for Construction Materials
const materials = [
  { id: '1', name: 'Cement', price: '$5 per bag' },
  { id: '2', name: 'Steel', price: '$10 per meter' },
  { id: '3', name: 'Bricks', price: '$0.5 per piece' },
  { id: '4', name: 'Wood', price: '$3 per piece' },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMaterials, setFilteredMaterials] = useState(materials);

  useEffect(() => {
    // Filter materials based on the search query
    if (searchQuery) {
      const filtered = materials.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMaterials(filtered);
    } else {
      setFilteredMaterials(materials);
    }
  }, [searchQuery]);

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Construction Materials</Text>

      <TextInput
        placeholder="Search Materials..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingLeft: 10,
        }}
      />

      <FlatList
        data={filteredMaterials}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              marginBottom: 10,
              borderWidth: 1,
              borderRadius: 5,
            }}
          >
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <Button title="Book a Consultation" onPress={() => alert('Booking a Consultation')} />
    </SafeAreaView>
  );
}
