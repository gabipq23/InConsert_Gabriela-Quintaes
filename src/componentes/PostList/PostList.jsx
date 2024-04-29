import {Card} from '../Cards/Card'
import styles from './PostList.module.css'
import { useEffect } from "react";
import { useState } from "react";

// https://www.figma.com/file/x44d6b3o5vxIOJFQZiPZBO/Untitled?type=design&node-id=0-1&mode=design&t=PwDwl0A7y8KMTQW1-0

export function PostList({ handlePlus }) {

    const [posts, setPosts] = useState(null);
    const [message, setMessage] = useState(null);
    const [isLoading, setLoading] = useState(true);

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
      fetch(`${baseUrl}/postList.json`).then(async (resp) => {
        const respPosts = await resp.json();
        let convertedPosts = convertData(respPosts);
        setPosts(convertedPosts);
      }).catch((erro) => setMessage(erro.meesage)).finally(() => setLoading(false));
    },[]);


  return (
    <div className={styles["container"]}>
            
            <div  className={styles["containerPosts"]}> 
        {isLoading && 
        
        <div className={styles["loading"]} />

        }
        {message && <p>Erro: {message}</p>}
        {posts && posts.map((post) => <Card key={post.id} post={post} />)}
        
      </div>
      <div className={styles["buttonContainer"]}>
               <button onClick={handlePlus} className={styles["buttonPlus"]}>+</button>
    </div>


    </div>
  )
}
