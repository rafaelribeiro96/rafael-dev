import React from 'react';
import styles from './Projects.module.css';
import Card from './Card';
import image1 from '../../assets/images/modelo-site.png';
import image2 from '../../assets/images/modelo-site.jpeg';
import image3 from '../../assets/images/modelo-site.jpeg';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h3 className={styles['mini-title-projects']}>Nossos Projetos</h3>
      <h1 className={styles['main-title-projects']}>Sites personalizados que amamos criar</h1>
      <div className={styles['cards-container-projects']}>
        <Card
          image={image1}
          title="Confeitaria Glayde Ribeiro"
          description="Desenvolvemos um site incrível para a Confeitaria Glayde Ribeiro, exibindo seus deliciosos produtos e serviços de maneira atrativa. Confira como criamos uma presença online que reflete a essência única da marca."
          link="https://www.glayderibeiro.com/"
        />
        <Card
          image={image2}
          title="Confeitaria Glayde Ribeiro"
          description="Desenvolvemos um site incrível para a Confeitaria Glayde Ribeiro, exibindo seus deliciosos produtos e serviços de maneira atrativa. Confira como criamos uma presença online que reflete a essência única da marca."
          link="https://www.glayderibeiro.com/"
        />
        <Card
          image={image3}
          title="Confeitaria Glayde Ribeiro"
          description="Desenvolvemos um site incrível para a Confeitaria Glayde Ribeiro, exibindo seus deliciosos produtos e serviços de maneira atrativa. Confira como criamos uma presença online que reflete a essência única da marca."
          link="https://www.glayderibeiro.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
