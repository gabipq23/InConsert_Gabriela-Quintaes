// import styles from './Posts.module.css'
// import { Component } from 'react'
// import { PostList } from "../../componentes/PostList/PostList"
// import { NewPost } from "../../componentes/NewPost/NewPost"


// export class Posts extends Component{
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           newPost: false
//         };
//       }
      
    
//       handlePlus = () => {
//         this.setState({ newPost: true });
//       }
    
//       handleNewPost = () => {
//         this.setState({ newPost: false });
//       }
    
//       render() {
//         const { newPost } = this.state;
    
        
//         return (
//           <div className={styles["container"]}>

//             <div className={styles["title"]}>
//                 <h2>Posts</h2>
//             </div>

//             {newPost ? (
//               <NewPost handleNewPost={this.handleNewPost} />
//             ) : (
//               <PostList handlePlus={this.handlePlus} />
//             )}
//           </div>
//         );
//       }
//     }
    


