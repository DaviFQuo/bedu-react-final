import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import DirectoryBrowser from '../controls/DirectoryBrowse';

const SearchPage = () => {
    return  <Container>
                <Header as='h2'>Busqueda de radios.</Header>

                <DirectoryBrowser />
            </Container>
}

export default SearchPage;