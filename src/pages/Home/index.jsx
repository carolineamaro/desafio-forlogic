import React from 'react';
import {
  Container,
  Table,
  Header as HeaderTitle,
  Label,
  Button,
  Form,
  Input,
  Card,
} from 'semantic-ui-react';
import Header from '../../components/Header';

const clientes = [
  {
    id: 1,
    nome: 'Ane e cia LTDA',
    nomeContato: 'Josefina',
    data: '30 de janeiro de 2010',
    categoria: 'Promotor',
  },
  {
    id: 2,
    nome: 'Mario e cia S/A',
    nomeContato: 'Carlos Magnum',
    data: '21 de março de 2013',
    categoria: 'Detrator',
  },
  {
    id: 3,
    nome: 'Magazine Luiza S/A',
    nomeContato: 'Lu',
    data: '10 de fevereiro de 2009',
    categoria: 'Neutro',
  },
  {
    id: 4,
    nome: 'Amazon S/A',
    nomeContato: 'Jeff Bezos',
    data: '18 de outubro de 2017',
    categoria: 'Nenhum',
  },
];

const getCategoriaColor = categoria => {
  let color = '';
  switch (categoria) {
    case 'Promotor':
      color = 'green';
      break;
    case 'Detrator':
      color = 'red';
      break;
    case 'Neutro':
      color = 'yellow';
      break;
    default:
      color = 'gray';
  }

  return color;
};

const Home = () => (
  <>
    <Header />
    <Container style={{ marginTop: '7em' }}>
      <Form>
        <Form.Field>
          <h3>Data da Avaliação (Mês/Ano)</h3>
          <Input required type="month" />
        </Form.Field>
        <Button primary fluid>
          Buscar
        </Button>
      </Form>
      <HeaderTitle as="h3">Lista de Clientes</HeaderTitle>
      <Card fluid color="green" header="NPS: 100" attached />

      <Table celled padded attached>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>ID</Table.HeaderCell>
            <Table.HeaderCell>Nome Fantasia</Table.HeaderCell>
            <Table.HeaderCell>Nome do Contato</Table.HeaderCell>
            <Table.HeaderCell>Quando se tornou cliente</Table.HeaderCell>
            <Table.HeaderCell>Categoria</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {clientes.map(item => (
            <Table.Row>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell singleLine textAlign="center">
                {item.nome}
              </Table.Cell>
              <Table.Cell textAlign="center">{item.nomeContato}</Table.Cell>
              <Table.Cell textAlign="center">{item.data}</Table.Cell>
              <Table.Cell textAlign="center">
                <Label color={getCategoriaColor(item.categoria)} horizontal>
                  {item.categoria}
                </Label>
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Button basic color="red" icon="trash" content="Excluir" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  </>
);

export default Home;
