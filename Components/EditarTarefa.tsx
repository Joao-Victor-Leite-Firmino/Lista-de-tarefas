import React, { useState } from "react";
import { View, Input, IconButton, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface EditarTarefaProps {
  tarefa: string;
  onEditarTarefa: (tarefa: string, index: number) => void;
  index: number;
}

const EditarTarefa: React.FC<EditarTarefaProps> = ({ tarefa, onEditarTarefa, index }) => {
  const [editTarefa, setEditTarefa] = useState(tarefa);

  const editarTarefa = () => {
    onEditarTarefa(editTarefa, index);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <View style={{ flex: 1, marginRight: 10 }}>
        <Input
          placeholder="Digite uma tarefa"
          placeholderTextColor="white"
          value={editTarefa}
          onChangeText={(texto) => setEditTarefa(texto)}
          fontSize={14}
          color="white"
        />
      </View>
      <IconButton
        icon={<Ionicons name="checkmark" size={24} color="#402291" />}
        colorScheme="light"
        onPress={editarTarefa}
        style={{ borderRadius: 50, backgroundColor: 'gold' }}
      />
    </View>
  );
};

export default EditarTarefa;