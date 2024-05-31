// import { Posts } from "./screens/Posts/Posts"
import { Footer } from "./componentes/Footer/Footer"
import { Profile } from "./screens/profile/profile"
import { Home } from "./screens/Home/Home"
import { NewPost } from "./componentes/NewPost/NewPost"
import { PostList } from "./componentes/PostList/PostList"
import { Login } from "./screens/Login/Login"
import { FullPost } from "./componentes/FullPost/FullPost"

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom' 

import "./App.css"
function App() {

  return (

    <BrowserRouter>
      <header className="container-appBar">
      <div className="logo">
               <a href="/">In Consert</a>
        </div>
        <nav className="menu">
          <Link to='/'>Home</Link>
          <Link data-cy="menu_post" to='/posts'>Posts</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/newPost'>Novo post</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/posts" element={<PostList />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/newPost" element={<NewPost />}></Route>
          <Route path="/post/:id" element={<FullPost />}></Route>
        </Routes>
      </main>
      <Footer />
     
    </BrowserRouter>
 
  )
}

export default App;
