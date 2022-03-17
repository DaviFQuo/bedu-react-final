import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const pages = [
  {
    text: 'Home', 
    path: '/'
  }, 
  {
    text: 'Browse', 
    path: '/browse'
  }, 
  {
    text: 'About', 
    path: '/about'
  }];

const NavBar = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
            Radio Web Directory
        </Menu.Item>
            {pages.map((page, i) => (
              <Menu.Item as={Link} to={page.path} key={i}>{page.text}</Menu.Item>
            ))}
        </Container>
    </Menu>
  );
}
export default NavBar;
//Based from https://www.markuptag.com/responsive-navbar-with-html-css-without-bootstrap/