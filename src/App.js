import React from 'react';
import './App.css';

function Titulo(props) {
  return <h2 className="secao-titulo">{props.value}</h2>;
}

class Opcao extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.classList);
    e.target.classList.add = "active";
    console.log(e.target.classList);
  }

  render() {
    return <button className={this.props.className} onClick={this.handleClick}>{this.props.value}</button>;
  }
}

class Secao extends React.Component {
  render() {
    let opcoes = this.props.opcoes.map((opcao, index) => {
      return <Opcao className="opcao" key={index} value={opcao} />
    });
    
    return (
      <>
      <Titulo value={this.props.titulo} />
      {opcoes}
      </>
    );
  }
}

function Pao(props) {
  return (
    <>
      <Secao titulo="Tamanho:" opcoes={["15cm", "30cm"]} />
      <Secao titulo="Pao:" opcoes={["9 Grãos", "9 grãos com aveia e mel", "Italiano", "Três queijos", "Parmesão e orégano"]} />
    </>
  );
}

function Sabor(props) {
  return <Secao titulo="Sabor:"
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
