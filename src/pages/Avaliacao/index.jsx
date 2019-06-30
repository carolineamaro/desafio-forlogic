import React, { Component } from 'react';
import {
  Form,
  Container,
  Input,
  Select,
  TextArea,
  Button,
} from 'semantic-ui-react';
import InputRange from 'react-input-range';
import Header from '../../components/Header';
import 'react-input-range/lib/css/index.css';

const nameOptions = [
  { key: 'c', text: 'Carol', value: 'carol' },
  { key: 'f', text: 'Fabricio', value: 'fabricio' },
  { key: 'a', text: 'André', value: 'andre' },
];

class Avaliacao extends Component {
  state = {
    value: 0,
  };

  render() {
    return (
      <>
        <Header />
        <Container style={{ marginTop: '7em' }}>
          <Form>
            <h3>Informações para Avaliação</h3>
            <Form.Field required>
              <label>Mês:</label>
              <Input required type="month" />
            </Form.Field>
            <Form.Field required>
              <label>Clientes:</label>
            </Form.Field>
            <Form.Field
              control={Select}
              options={nameOptions}
              label={{ htmlFor: 'form-select-control' }}
              placeholder="Selecione"
              search
              multiple
              selection
              searchInput={{ id: 'form-select-control' }}
            />
            <Form.Field required>
              <label>Dê uma nota de 0 à 10, aos nossos serviços:</label>
              <div style={{ margin: '20px 0px 30px 0px' }}>
                <InputRange
                  maxValue={10}
                  minValue={0}
                  value={this.state.value}
                  onChange={value => this.setState({ value })}
                />
              </div>
            </Form.Field>
            <Form.Field
              id="form-textarea-control-descricao"
              control={TextArea}
              label="Descreva brevemente sobre seus motivos:"
              placeholder="Opcional"
            />
            <Button primary fluid>
              Finalizar
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default Avaliacao;
