// Importando React e os componentes necessários do Native Base
import React from "react";
import { NativeBaseProvider, View } from 'native-base';

// Importando o componente AdicionarTarefa e o ProvedorEstadoGlobal
import AdicionarTarefa from "./Components/AdicionarTarefa";
import { ProvedorEstadoGlobal } from "./hooks/EstadoGlobal";

// Importando o componente ListaTarefas
import ListaTarefas from "./Components/ListaTarefas";

// Função principal do componente App
export default function App() {
  return (
    // Início do contexto do NativeBaseProvider
    <NativeBaseProvider>
      {/* Início do contexto do ProvedorEstadoGlobal */}
      <ProvedorEstadoGlobal>
        {/* View para envolver os componentes AdicionarTarefa e ListaTarefas */}
        <View style={{ flex: 1 }}>
          {/* Renderização do componente AdicionarTarefa */}
          <AdicionarTarefa />
          {/* Renderização do componente ListaTarefas */}
          <ListaTarefas />
        </View>
      </ProvedorEstadoGlobal>
      {/* Fim do contexto do ProvedorEstadoGlobal */}
    </NativeBaseProvider>
    // Fim do contexto do NativeBaseProvider
  );
}