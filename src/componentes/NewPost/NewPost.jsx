import styles from './NewPost.module.css'

export function NewPost({ handleNewPost }) {
    return (
      <div className={styles["container"]}>

          <h3>Escreva aqui o seu novo post:</h3>
        
          <textarea placeholder='nome do artista aqui...' type="text"></textarea>
          <textarea placeholder='local do evento aqui...' type="text"></textarea>
          <textarea placeholder='descrição aqui...' type="text"></textarea>


        <div className={styles["buttonContainer"]}>
          <button onClick={handleNewPost} className={styles["buttonNew"]}>Publicar</button>
        </div>

      </div>
    );
  }