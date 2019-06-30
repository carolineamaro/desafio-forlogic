import React from 'react';
import { Button, Input, Form, Container } from 'semantic-ui-react';
import Header from '../../components/Header';

const CadastroDoCliente = () => (
  <>
    <Header />
    <Container style={{ marginTop: '7em' }}>
      <Form>
        <h3>Informações do Cliente</h3>
        <Form.Field>
          <label>Nome do Cliente:</label>
          <Input required type="text" />
        </Form.Field>
        <Form.Field>
          <label>Nome do Contato:</label>
          <Input required type="text" />
        </Form.Field>
        <Form.Field>
          <label>Data que se tornou Cliente</label>
          <Input required type="date" />
        </Form.Field>
        <Button primary fluid>
          Finalizar Cadastro
        </Button>
      </Form>
    </Container>
  </>
);

export default CadastroDoCliente;
