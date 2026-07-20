import React from 'react'
import styles from './Home.module.css'
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