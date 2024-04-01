import {Card} from '../Cards/Card'
import styles from './PostList.module.css'

export function PostList({ handlePlus }){
    return(
        <div className={styles["container"]}>
            
            <div  className={styles["containerPosts"]}> 
            <Card titulo={'Post #1'} artista={'Justin Bieber'} local={'Rock in Rio'} descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Card titulo={'Post #2'} artista={'Taylor Swift'} local={'Engenhão - RJ'} descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Card titulo={'Post #3'} artista={'The Weeknd'}  local={'Engenhão - RJ'} descricao={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>

            <div className={styles["buttonContainer"]}>
                <button onClick={handlePlus} className={styles["buttonPlus"]}>+</button>
            </div>

            </div>

        </div>
    )
}

// https://www.figma.com/file/x44d6b3o5vxIOJFQZiPZBO/Untitled?type=design&node-id=0-1&mode=design&t=PwDwl0A7y8KMTQW1-0
