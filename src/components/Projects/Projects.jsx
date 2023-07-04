import React from 'react';
import './Projects.css';
import Card from './Card';

const Projects = () => {
  return (
    <div className="projects">
      <h3 className="mini-title-projects">Nossos Projetos</h3>
      <h1 className="main-title-projects">Sites personalizados que amamos criar</h1>
      <div className="cards-container-projects">
        <Card
          image="project1.jpg"
          title="Projeto 1"
          description="Descrição do projeto 1"
          link="https://www.example.com/project1"
        />
        <Card
          image="project2.jpg"
          title="Projeto 2"
          description="Descrição do projeto 2"
          link="https://www.example.com/project2"
        />
        <Card
          image="project3.jpg"
          title="Projeto 3"
          description="Descrição do projeto 3"
          link="https://www.example.com/project3"
        />
      </div>
    </div>
  );
};

export default Projects;
