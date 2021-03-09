import React, { useEffect, useState } from 'react'

import api from '../services/api'
import Header from './Header'

import './App.css'

function App(){
    const [projects, setProjects] = useState([])
    
    useEffect(() => {
         api.get('projects').then(response => {
            setProjects(response.data) 
         })
    }, [])

    async function handleAddProject() {
        //setProjects([...projects, `Novo Projeto ${Date.now()}`])
        const response = await api.post('projects',{
            title: `Novo Projeto ${Date.now()}`,
            owner: "Railson" 
        })
        const project = response.data
        setProjects([...projects, project])
    }

    return (
        <>
            <Header title='HomePage' />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="buton" onClick={handleAddProject}>Adicionar Projeto</button>
        </>    
    )
}

export default App