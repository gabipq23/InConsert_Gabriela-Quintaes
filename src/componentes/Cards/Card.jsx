import styles from './Card.module.css'

import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export function Card(props) {
  const post = props.post;
  const onDeletePost = props.onDeletePost

  const navigate = useNavigate()

  return (
    
    <div className={styles["containerPosts"]}>
        <p>Título: {post.titulo}</p>
        <p>Artista: {post.artista}</p>
        <p>Local: {post.local}</p>
        <p>Data: {post.data}</p>
        <p>Descrição: {post.descricao}</p>

   
        <div className={styles["icons"]}> 
            <span className={styles["iconItem"]}><FaRegHeart size='20px'/></span>
            <span className={styles["iconItem"]}><FaRegCommentDots size='20px' /></span>
            
              <button onClick={() => navigate(`/post/${post.id}`)}  className={styles["iconItem"]}><CgDetailsMore size='20px' /></button>
              
              <button onClick={() => onDeletePost(post.id)}  className={styles["iconItem"]}><MdDeleteForever size='20px' /></button>
        
         </div>

      </div>
    
  )
}