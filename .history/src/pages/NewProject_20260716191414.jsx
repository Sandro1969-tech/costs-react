import React from 'react'
import styles from './NewProject.module.css'

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <form className={styles.form}>
        <div className={styles.form_control}>
          <label htmlFor="name">Nome do projeto:</label>
          <input type="text" name="name" placeholder="Insira o nome do projeto" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="budget">Orçamento do projeto:</label>
          <input type="number" name="budget" placeholder="Insira o orçamento total" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="category_id">Selecione a categoria:</label>
          <select name="category_id" defaultValue="">
            <option value="" disabled>Selecione uma opção</option>
            <option value="1">Infraestrutura</option>
            <option value="2">Desenvolvimento</option>
            <option value="3">Design</option>
            <option value="4">Planejamento</option>
          </select>
        </div>
        <button type="submit" className={styles.btn}>Criar Projeto</button>
      </form>
    </div>
  )
}

export default NewProject