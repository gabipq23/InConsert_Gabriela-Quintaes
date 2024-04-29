import styles from './Card.module.css'

import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

export function Card(props) {
  const post = props.post;

  return (
    
    <div className={styles["containerPosts"]}>
        <p>{post.titulo}</p>
        <p>{post.artista}</p>
        <p>{post.local}</p>
        <p>{post.descricao}</p>
   
        <div className={styles["icons"]}> 
             <span className={styles["iconItem"]}><FaRegHeart size='20px'/></span>
            <span className={styles["iconItem"]}><FaRegCommentDots size='20px' /></span>
         </div>

      </div>
    
  )
}