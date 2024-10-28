import { useState } from 'react'
import './style.css'
import Thrash from '../../assets/thrash.svg'

function Home() {

  // useState é uma ferramenta fundamental para gerenciar o estado em componentes funcionais do React. (Se quiser alterar e já ver na tela)
  // Ele permite que você armazene e atualize dados que afetam a renderização da UI, proporcionando uma experiência interativa e dinâmica.

  // users = variável que será usada, iniciada como vazio.
  // setUsers = função aplicada.
  const [users, setUsers] = useState([]);

  const [formData, resetForm] = useState({
    nome: '',
    idade: '',
    email: ''
  });

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    resetForm({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: (users.length + 1).toString(),
      ...formData,
    };
    setUsers([...users, newUser]);
    resetForm({ nome: '', idade: '', email: '' }); // Limpa o formulário
  };


  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de usuários</h1>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <input
          type="text"
          name="idade"
          placeholder="Idade"
          value={formData.idade}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>ID: <span>{user.id}</span></p>
            <p>Nome: <span>{user.nome}</span></p>
            <p>Idade: <span>{user.idade}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => handleDelete(user.id)}>
            <img src={Thrash} alt="Delete" />
          </button>
        </div>
      ))}
    </div>
  );

}

export default Home
