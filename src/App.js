import React from 'react';
import './App.css';

function Titulo(props) {
  return <h2 className="secao-titulo">{props.value}</h2>;
}

class Opcao extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { ativo: false };
  }

  handleClick(e) {
    /*
    if(!this.state.ativo) {
      console.log(e.target.classList);
      this.setState(state => ({
        ativo: !state.ativo 
      }));
      
    }
    console.log(this.state.ativo);
    */
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
