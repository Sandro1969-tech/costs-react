import React from 'react'
import styles from './Home.module.css'
import savings from '../assets/savings.svg' // Substitua pelo nome da sua imagem
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <Link to="/newproject" className={styles.btn}>Criar Projeto</Link>
      <img src={savings} alt="Costs" />
    </section>
  )
}

export default Home

### Passo 3: O Estilo da Home
Crie o arquivo **`src/pages/Home.module.css`** e adicione o estilo que vai destacar o projeto:

```css
.home_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em;
}

.home_container h1 {
  font-size: 2.5em;
  margin-bottom: 0.5em;
}

.home_container h1 span {
  color: #ffbb33;
  padding: 0 0.2em;
  background-color: #222;
}

.home_container p {
  margin-bottom: 1.5em;
  color: #7b7b7b;
}

.home_container img {
  width: 350px;
  margin: 2em 0;
}

/* Estilo do Botão Call-to-Action */
.btn {
  background-color: #222;
  color: #fff;
  padding: 0.7em 1.2em;
  text-decoration: none;
  transition: 0.5s;
}

.btn:hover {
  color: #ffbb33;
}

Salve tudo e veja a mágica! A sua página inicial agora tem um visual de software profissional.

Como está ficando na sua tela? O botão e a imagem apareceram certinho?