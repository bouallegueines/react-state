import './App.css';
import photo from './ines.jpg'

import React, { Component } from 'react'
export class App extends Component {

  constructor(props){
  super(props)
    this.state={
      fullName:"Bouallegue Ines",
      profession:"Développeur web ",   
      imgSrc: photo,
      bio:"Profession hautement technique, le développeur informatique est avant tout un expert des langages informatiques codés. Il est aussi bien capable de concevoir et créer des logiciels, applications et/ou sites web, que de tester et améliorer ceux qui sont déjà existants. Ses connaissances informatiques lui permettent de créer des logiciels sur-mesure pour répondre à la demande de l’entreprise ou d’un client. Ainsi, il doit avant de se lancer identifier les besoins des futurs utilisateurs afin de créer un programme qui leur correspond et qu’ils seront capables d’utiliser facilement. Par la suite, le développeur peut aussi être chargé de rédiger un guide utilisateur, de former les utilisateurs ou de faire de la maintenance. Dans les entreprises, le métier de développeur informatique peut-être désigné sous diverses appellations selon ses spécialités : développeur web, codeur, programmeur, informaticien, développeur front-end, développeur back-end, développeur full stack…",
      show:false,
      counter:0,
      };
  }

 
    handelClique=()=>{
    this.setState({
      ...this.state,
      show:!this.state.show
    }
    )
  }
  timer() {
    this.setState({
      counter: this.state.counter + 1,
    });
    
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  
    render() {
        return (
          <div className="info" >
          {this.state.show && (<div className="profile">
        
        <h1 className="title">{this.state.fullName}</h1>
        <img className="image" src={this.state.imgSrc }alt="photoprofile"/>  
      <p className="paragraphe">{this.state.profession}</p>
        <p className="paragraphe">{this.state.bio}</p>
        <p > Time:{this.state.counter}</p>
      </div>)}
          
      <button className="btn" onClick={this.handelClique} >show</button>
          </div>
     
    );
  }
}

export default App


