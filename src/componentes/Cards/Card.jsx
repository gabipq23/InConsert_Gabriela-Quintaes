import styles from './Card.module.css'

import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

export function Card(props) {
  const post = props.post;

  return (
    
    <div className={styles["containerPosts"]}>
        <p>Título: {post.titulo}</p>
        <p>Artista: {post.artista}</p>
        <p>Local: {post.local}</p>
        <p>Descrição: {post.descricao}</p>
   
        <div className={styles["icons"]}> 
             <span className={styles["iconItem"]}><FaRegHeart size='20px'/></span>
            <span className={styles["iconItem"]}><FaRegCommentDots size='20px' /></span>
         </div>

      </div>
    
  )
}