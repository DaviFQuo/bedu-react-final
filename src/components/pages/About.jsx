import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const AboutPage = () => {
    return  <Container>
                <Header as='h2'>Consulta y escucha musica del directorio de radios publico de internet.</Header>
                <p>Este proyecto está hecho con el fin de demostrar los conocimientos aprendidos en el curso de React y JavaScript II - BEDU</p>
                <p>Se utiliza la API pública de <a href='https://radio-browser.info/'>radio-browser.info</a>, la cual permite consultar un directorio público de estaciones de radio.</p>
                <p>Esta página fue desarrollada por David Eduardo Fouilloux Quiroz.</p>
                <p>* Debido a falta de tiempo al momento de entregar este proyecto, hay funcionalidad que queda pendiente.</p>
            </Container>
}

export default AboutPage;