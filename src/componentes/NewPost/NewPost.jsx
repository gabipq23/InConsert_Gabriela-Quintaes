import styles from './NewPost.module.css'

export function NewPost({ handleNewPost }) {
    return (
      <div className={styles["container"]}>

          <h3>Escreva aqui o seu novo post:</h3>
        
          <input placeholder='seu novo post aqui...' type="text"></input>
        
        
        <div className={styles["buttonContainer"]}>
          <button onClick={handleNewPost} className={styles["buttonNew"]}>Publicar</button>
        </div>

      </div>
    );
  }