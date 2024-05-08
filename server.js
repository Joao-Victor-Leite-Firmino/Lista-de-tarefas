const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Defina a porta do servidor

// Rota para obter todas as tarefas
app.get('/tarefas', (req, res) => {
    // Lógica para obter e retornar todas as tarefas do banco de dados
});

// Rota para adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
    // Lógica para adicionar uma nova tarefa ao banco de dados
});

// Rota para editar uma tarefa existente
app.put('/tarefas/:id', (req, res) => {
    // Lógica para editar uma tarefa no banco de dados com base no ID
});

// Rota para excluir uma tarefa
app.delete('/tarefas/:id', (req, res) => {
    // Lógica para excluir uma tarefa do banco de dados com base no ID
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});