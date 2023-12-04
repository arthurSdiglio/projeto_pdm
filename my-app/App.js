
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Atividade = () => {
  const [nome, setNome] = useState('Arthur');
  const [sobrenome, setSobrenome] = useState('Santiago Diglio');
  const [endereco, setEndereco] = useState('Rua Carlos de carvalho');
  const [cep, setCep] = useState('08545-130');
  const [cidade, setCidade] = useState('Ferraz de Vasconcelos');
  const [estado, setEstado] = useState('São Paulo');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text style={styles.label}>Sobrenome</Text>
      <TextInput
        style={styles.input}
        value={sobrenome}
        onChangeText={(text) => setSobrenome(text)}
      />

      <Text style={styles.label}>Endereço</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={(text) => setEndereco(text)}
      />

      <Text style={styles.label}>Cep</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={(text) => setCep(text)}
      />

      <Text style={styles.label}>Cidade</Text>
      <TextInput
        style={styles.input}
        value={cidade}
        onChangeText={(text) => setCidade(text)}
      />

      <Text style={styles.label}>Estado</Text>
      <TextInput
        style={styles.input}
        value={estado}
        onChangeText={(text) => setEstado(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Atividade;
