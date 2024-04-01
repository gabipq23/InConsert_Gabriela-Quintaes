import { Component } from 'react';
import styles from './Card.module.css'


export class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            titulo:props.titulo,
            descricao:props.descricao,
            artista:props.artista,
            local:props.local

        }
    }
    render() {
      return (
        <div className={styles["containerPosts"]}>
          <h3>{this.state.titulo}</h3>
          <p>Artista/Banda: {this.state.artista}</p>
          <p>Local: {this.state.local}</p>
          <p>Descrição: {this.state.descricao}</p>
        </div>
      )
    }
}
