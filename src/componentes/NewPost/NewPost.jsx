import { useState } from 'react';
import styles from './NewPost.module.css'

export function NewPost() {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ message, setMessage ] = useState(null)
  const [ artista, setArtista ] = useState('')
  const [ descricao, setDescricao ] = useState('')
  const [ local, setLocal ] = useState('')
  const [ titulo, setTitulo ] = useState('')
  const [ data, setData ] = useState('')

  const baseUrl = 'https://inconsert-pb-13d11-default-rtdb.asia-southeast1.firebasedatabase.app/'

    return (
      <div className={styles["container"]}>

          <h1 className={styles["titulo"]}>Escreva aqui o seu novo post:</h1>
          
          <section>
            {message && <p>{message}</p>}
            {isLoading && <p>Carregando...</p>}
          </section>
          <section  className={styles["form"]}>

          <div className={styles["form-item"]}>
              <label htmlFor='titulo'>Título: </label>
              <input id='titulo' value={titulo} onChange={(e) => {setTitulo(e.target.value)}}></input>
            </div>

            <div className={styles["form-item"]}>
              <label htmlFor='artista'>Artista: </label>
              <input id='artista' value={artista} onChange={(e) => {setArtista(e.target.value)}}></input>
            </div>

            <div className={styles["form-item"]}>
              <label htmlFor='local'>Local: </label>
              <input id='local' value={local} onChange={(e) => {setLocal(e.target.value)}}></input>
            </div>

            <div className={styles["form-item"]}>
              <label htmlFor='data'>Data: </label>
              <input id='data' value={data} onChange={(e) => {setData(e.target.value)}}></input>
            </div>

            <div className={styles["form-item"]}>
              <label htmlFor='descricao'>Descricao: </label>
              <input className={styles["descricao"]} id='descricao' value={descricao} onChange={(e) => {setDescricao(e.target.value)}}></input>
            </div>

            <div className={styles["buttonContainer"]}>
              <button onClick={() => {
                setIsLoading(true)
                const post = {artista, descricao, titulo, local, data}
                fetch(`${baseUrl}postList.json`, {
                  method:'post',
                  header:{
                    'Content-Type':'application/json',
                  },
                  body: JSON.stringify(post),
                }).then(_ => setMessage('Novo post criado!!')
                ).catch( error => setMessage(error.message))
                .finally(setIsLoading(false))
              }} className={styles["buttonNew"]}>Publicar</button>
            </div>

          </section>
      </div>
    );
  }