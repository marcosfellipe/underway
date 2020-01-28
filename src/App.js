import React from 'react';
import './App.css';

function Titulo(props) {
  return <h2 className="secao-titulo">{props.value}</h2>;
}

class Opcao extends React.Component {
  render() {
    return <button className={this.props.className} onClick={this.props.onClick}>{this.props.value}</button>;
  }
}

class Secao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ativo: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let container = e.target.parentNode;
    if(this.state.ativo != null) {
      container.querySelector('.ativo').classList.remove('ativo');
    }
    e.target.classList.add('ativo');
    this.setState({
      ativo: e.target
    });
  }

  render() {
    let opcoes = this.props.opcoes.map((opcao, index) => {
      return <Opcao className="opcao" key={index} value={opcao} onClick={this.handleClick} />
    });
    
    return (
      <>
      <Titulo value={this.props.titulo} />
      <div className="opcoes-container">
        {opcoes}
      </div>
      </>
    );
  }
}

function Pao(props) {
  return (
    <>
      <Secao titulo="Tamanho" opcoes={["15cm", "30cm"]} />
      <Secao titulo="Pão" opcoes={["9 Grãos", "9 grãos com aveia e mel", "Italiano", "Três queijos", "Parmesão e orégano"]} />
    </>
  );
}

function Sabor(props) {
  return <Secao titulo="Sabor"
                opcoes={[
                  "Atum",
                  "Beef Bacon Chiplote",
                  "Beef Barbecue Bacon",
                  "B.M.T&copy;Italiano",
                  "Frango",
                  "Frango Defumado com Cream Cheese",
                  "Frango Empanado",
                  "Frango Pesto Cream Cheese",
                  "Frango Ranch",
                  "Frango Teriyaki",
                  "Steak Cheddar Cremoso",
                  "Steak Churrasco",
                  "Vegetariano"
                ]}
            />
}




function App() {
  return (
    <>
    <Pao />
    <Sabor />
    </>
  );
}

export default App;
