/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  //username = ler email, setUsername = Alterar email
  const [password, setPassword] = useState("");

  //Funcao q faz o envio dos formularios e usa os estados acima ao clicar em "Entrar"
  const handleSubmit = (event) => {
    event.preventDefault(); //previne que o formulario vai ser entregue

    alert("Enviando os dados" + username + " - " + password);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required // validaçao html
            onChange={(e) => setUsername(e.target.value)} //pega o evento do usuario digitando e extrair o valor do input na hr q for digitado
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="senha"
            placeholder="Senha"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
