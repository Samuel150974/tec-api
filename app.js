// importando o express (instalando via terminal)
import express from 'express';
const app = express();
const porta = 3000;

/* ROTAS */
app.get('/', function(req,res) {
    res.send('API de alunos com nodeJS, express e MySQL');
});

app.get('/alunos', (req, res) => {
    res.send('Dados de todos os alunos')
});

// ROTA/Endpoint para visualizar UM aluno

app.get('/alunos/:id', (req, res) =>{
    res.send('Dados de um aluno qualquer')
});

// Endpoint para INSERIR UM aluno no banco de dados

app.post('/alunos', (req, res) => {
    res.send('Cadastrando um aluno.');
});

// Endpoint para ATUALIZAR TODOS OS DADOS de UM aluno

// Endpoint para ATUALIZAR ALGUNS OS DADOS de UM aluno

// Endoint para DELETAR UM aluno



/* SERVIDOR */
app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
})