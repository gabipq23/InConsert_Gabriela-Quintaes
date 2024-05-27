
import styles from './PostList.module.css'
import { useEffect } from "react";
import { useState } from "react";
import { Card } from '../Cards/Card'

// https://www.figma.com/file/x44d6b3o5vxIOJFQZiPZBO/Untitled?type=design&node-id=0-1&mode=design&t=PwDwl0A7y8KMTQW1-0

export function PostList( props ) {

    const [posts, setPosts] = useState(null);
    const [message, setMessage] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const [filtro, setFiltro] = useState('')

    const baseUrl = 'https://inconsert-pb-13d11-default-rtdb.asia-southeast1.firebasedatabase.app/'

    function convertData(data) {
      const ids = Object.keys(data);
      let posts = Object.values(data);
      return posts.map((post,index) =>{
        return{
          id:ids[index], ...post,
        };
      });
    }

    useEffect(() => {
      fetch(`${baseUrl}/postList.json`)
      .then(async (resp) => {
        const respPosts = await resp.json();
        let convertedPosts = convertData(respPosts);
        setPosts(convertedPosts);
      })
      .catch((erro) => setMessage(erro.meesage))
      .finally(() => setLoading(false));
  
    },[]);

    // FAZER FUNÇÃO DE VER UM UNICO POST
    function selecionarUmPost(post){
      // action(post.id)
    }

    // FINALIZAR FUNÇÃO DE REMOVER
    function removerPost(id){
      setPosts(posts.filter(post => post.id !== id))
      fetch(`${baseUrl}postList/${id}.json`, {
        method:'delete'
      })
      .then(_=>setMessage('deletado'))
      .catch(error => setMessage(error.message))
      .finally(setLoading(false))
    }

    function filterPostsList(){
      if(!filtro){
        return posts
      } else {
        let palavra = filtro.toLowerCase()
        return posts.filter(post => {
          const artista = post.artista.toLowerCase()
          const local = post.local.toLowerCase()
          return artista.includes(palavra) || local.includes(palavra)})
    }
  }

  return (
    <div className={styles["container"]}>

      <div className={styles["title"]}>
        <h2>Posts</h2>
      </div>

      {isLoading && <div className={styles["loading"]} />}
      {message && <p>Erro: {message}</p>}

      {posts &&
      <div className={styles["filtro"]}>
        <label htmlFor='inputSearch'>Filtro: </label>
        <input value={filtro} onChange={(event) => setFiltro(event.target.value)} id='inputSearch' placeholder='Buscar um post'></input>
      </div>}

      {posts && filterPostsList().map((post) => 
        <Card key={post.id} post={post} onDeletePost={removerPost} />
      )}
      
    </div>
  )
}
