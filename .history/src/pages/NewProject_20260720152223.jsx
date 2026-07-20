import React, { useState, useEffect } from 'react'
import styles from './NewProject.module.css'

import Input from '../components/form/Input'
import Select from '../components/form/Select'
import SubmitButton from '../components/form/SubmitButton'

function NewProject() {
  // Estado para armazenar as categorias vindas da API
  const [categories, setCategories] = useState([])

  // useEffect com array vazio [] roda apenas UMA vez quando a página carrega
  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <form className={styles.form}>
        <Input 
          type="text" 
          text="Nome do projeto" 
          name="name" 
          placeholder="Insira o nome do projeto" 
        />
        
        <Input 
          type="number" 
          text="Orçamento do projeto" 
          name="budget" 
          placeholder="Insira o orçamento total" 
        />

        <Select 
          name="category_id" 
          text="Selecione a categoria" 
          options={categories}
        />

        <SubmitButton text="Criar Projeto" />
      </form>
    </div>
  )
}

export default NewProject