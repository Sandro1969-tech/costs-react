import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from '../components/layout/Message'
import LinkButton from '../components/layout/LinkButton'
import ProjectCard from '../components/project/ProjectCard'

import styles from './Projects.module.css'

function Projects() {
  const [projects, setProjects] = useState([])
  const [projectMessage, setProjectMessage] = useState('')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  // Buscar os projetos da API fake
  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data)
      })
      .catch((err) => console.log(err))
  }, [])

  // Função para remover um projeto via requisição DELETE
  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        // Filtra os projetos no estado para remover o excluído da tela sem precisar recarregar
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Projeto removido com sucesso!')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>

      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}

      <div className={styles.card_container}>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category ? project.category.name : ''}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </div>
    </div>
  )
}

export default Projects