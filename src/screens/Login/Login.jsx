import styles from './Login.module.css'

export default function Login(){


    return(
        
        <div className={styles["container-login"]}>
            <form >
                <div className={styles["container-img"]}>
                    <p>oiiiii</p>
                </div>
            <div className={styles["container-input"]}>
            <div className={styles["input-box"]}>
                <p className={styles["titulo-input"]}>Email</p>
                <input type="email" placeholder="usuario@email.com" required/>
            </div>
            <div className={styles["input-box"]}>
                <p className={styles["titulo-input"]}>Senha</p>
                <input type="password" placeholder="***********" required/>
            </div>
         </div>
         
            <button type="submit" className={styles["botao-login botao-padrao"]}>Login</button>
        </form>

       
    </div>
    

    )
}