import styles from './Login.module.css'
import {Link} from 'react-router-dom'

export  function Login(){

    return(
        <div className={styles["container"]}>
        
        <div >
            <form className={styles["container-login"]}>
                <div className={styles["container-img"]}>
                    <img src='./src/assets/logo.png'></img>
                </div>
                <div className={styles["container-input"]}>
                    <div className={styles["input-box"]}>
                        <p>Email:</p>
                        <input type="email" placeholder="usuario@email.com" required/>
                    </div>
                    <div className={styles["input-box"]}>
                        <p>Senha:</p>
                        <input type="password" placeholder="***********" required/>
                    </div>
                </div>
         
                <Link to={'/'}>
                <div className="flex items-center justify-center m-2">
                    <button type="submit" className="bg-[#CD168A] hover:bg-[#EE5DB6] px-5 py-1 rounded-2xl text-[#EAEAEA]">Login</button>
                </div>
                </Link>
            
            </form>
 
        </div>
    
    </div>

    )
}