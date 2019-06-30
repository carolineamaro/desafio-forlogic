import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import CadastroDoCliente from './pages/CadastroDoCliente/index';
import Avaliacao from './pages/Avaliacao/index';

ReactDOM.render(
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/cadastro-do-cliente" component={CadastroDoCliente} />
    <Route path="/avaliacao" component={Avaliacao} />
  </Router>,
  document.getElementById('root'),
);
