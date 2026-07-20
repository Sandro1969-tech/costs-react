import React from 'react'
import styles from './NewProject.module.css'

// Importando os componentes reutilizáveis de formulário
import Input from '../components/form/Input'
import Select from '../components/form/Select'
import SubmitButton from '../components/form/SubmitButton'

function NewProject() {
  // Simulando as categorias que futuramente virão do banco de dados (JSON Server)
  const categories = [
    { id: 1, name: 'Infraestrutura' },
    { id: 2, name: 'Desenvolvimento' },
    { id: 3, name: 'Design' },
    { id: 4, name: 'Planejamento' }
  ]

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