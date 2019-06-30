import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as={Link} header to="/">
        Desafio ForLogic
      </Menu.Item>
      <Menu.Item as={Link} to="/cadastro-do-cliente">
        Cadastrar Cliente
      </Menu.Item>
      <Menu.Item as={Link} to="/avaliacao">
        Avaliação
      </Menu.Item>
    </Container>
  </Menu>
);

export default Header;
