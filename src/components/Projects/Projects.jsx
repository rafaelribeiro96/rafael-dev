import React from 'react';
import styles from './Projects.module.css';
import Card from './Card';
import image1 from '../../assets/images/modelo-site.png';
import image2 from '../../assets/images/granola.png';
import image3 from '../../assets/images/portfolio-rafael.png';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h3 className={styles.mini_title_projects}>Nossos Projetos</h3>
      <h1 className={styles.main_title_projects}>Portfólio de Projetos</h1>
      <div className={styles.cards_container_projects}>
        <Card
          image={image1}
          title="Confeitaria Glayde Ribeiro"
          description="Desenvolvemos um site incrível para a Confeitaria Glayde Ribeiro, exibindo seus deliciosos produtos e serviços de maneira atrativa. Confira como criamos uma presença online que reflete a essência única da marca."
          link="https://www.glayderibeiro.com/"
        />
        <Card
          image={image2}
          title="Granola Predileta"
          description="Desenvolvemos um site para a Granola Predileta, exibindo seus produtos de maneira atrativa. Confira como criamos seu site de forma responsiva e atraente, com uma boa usabilidade."
          link="https://granolapredileta.vercel.app/"
        />
        {/* <Card
          image={image2}
          title="Pokedex"
          description="Desenvolvemos uma pokedex, exibindo os Pokemons de maneira atrativa e dinâmica. Confira como criamos uma aplicação com design responsivo e com uma boa usabilidade."
          link="https://pokedexrr.netlify.app/"
        /> */}
        <Card
          image={image3}
          title="Portfólio Pessoal Rafael Ribeiro"
          description="Desenvolvemos um portfólio pessoal para o Rafael Ribeiro, exibindo seu histórico profissional e acadêmico de maneira atrativa. Confira como criamos uma presença online que reflete a essência da pessoa."
          link="https://rafaelribeiro96.github.io/"
        />
      </div>
    </div>
  );
};

export default Projects;
