import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('welcome'); 
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });

  const [taskList, setTaskList] = useState([
    { nome: 'Prova do Marcelo', email: '', telefone: '' },
    { nome: 'Atualizações no sistema', email: '', telefone: '' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, formData]); 
    setFormData({ nome: '', email: '', telefone: '' });
    setCurrentView('taskList'); 
  };

  const renderWelcomeScreen = () => (
    <div>
      <h1>Seja bem-vindo à nossa tela de apresentação</h1>
      <p>Equipe 8: Alessandra, Camila, Heloise, Leticia</p>
    </div>
  );

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="form">
      <input 
        type="text" 
        name="nome" 
        placeholder="Nome" 
        value={formData.nome} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="tel" 
        name="telefone" 
        placeholder="Telefone" 
        value={formData.telefone} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Enviar</button>
    </form>
  );

  const renderTaskList = () => (
    <ul className="task-list">
      {taskList.map((task, index) => (
        <li key={index} className="task-item">
          <p><strong>Nome:</strong> {task.nome}</p>
          {task.email && <p><strong>Email:</strong> {task.email}</p>}
          {task.telefone && <p><strong>Telefone:</strong> {task.telefone}</p>}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container">
      <div className="button-group">
        <button onClick={() => setCurrentView('welcome')}>Tela de Apresentação</button>
        <button onClick={() => setCurrentView('form')}>Formulário de Cadastro</button>
        <button onClick={() => setCurrentView('taskList')}>Lista de Tarefas</button>
      </div>

      {currentView === 'welcome' && renderWelcomeScreen()}
      {currentView === 'form' && renderForm()}
      {currentView === 'taskList' && renderTaskList()}
    </div>
  );
}

export default App;
