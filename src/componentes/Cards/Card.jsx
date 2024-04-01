import { Component } from 'react';
import styles from './Card.module.css'


export class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            titulo :props.titulo,
            descricao:props.descricao
        }
    }
    render() {
      return (
        <div className={styles["containerPosts"]}>
          <h3>{this.state.titulo}</h3>
          <p>{this.state.descricao}</p>
        </div>
      )
    }
}
