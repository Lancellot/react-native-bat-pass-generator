import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from "react-native";
import { styles } from './BatFormStyles';
import batLogo from "../../../assets/bat-logo.png";

interface BatFormProps {
  onBackToHome: () => void;
}

export function BatForm({ onBackToHome }: BatFormProps) {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [location, setLocation] = useState("");
  const [observation, setObservation] = useState("");

  const handleSubmit = () => {
    Alert.alert("Sucesso", "Dados enviados com sucesso!", [
      { text: "OK", onPress: onBackToHome }
    ]);
  };

  return (
  <ScrollView 
     contentContainerStyle={styles.scrollContainer}
      style={{ flex: 1 }} 
     >
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={batLogo} style={styles.logo} resizeMode="contain" />
</View>

  <View style={styles.formContainer}>
    <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#555"
        value={name}
        onChangeText={setName}
      />

 <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#555"
        keyboardType="phone-pad"
        value={telephone}
        onChangeText={setTelephone}
      />
 <Text style={styles.hint}>Insira apenas números</Text>

  <Text style={styles.label}>Localização</Text>
       <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Sua localização atual..."
        placeholderTextColor="#555"
        multiline
        numberOfLines={4}
        value={location}
        onChangeText={setLocation}
      />
       
      <Text style={styles.label}>Observação</Text>
       <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Sua observação aqui..."
        placeholderTextColor="#555"
        multiline
        numberOfLines={4}
        value={observation}
        onChangeText={setObservation}
      />
      <Text style={styles.hint}>Outras informações</Text>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
    </View>
  </ScrollView>
  );
}
