import { Posts } from "./screens/Posts/Posts"
import { Footer } from "./componentes/Footer/Footer"
import { Profile } from "./screens/profile/profile"
import { Home } from "./screens/Home/Home"

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
          <Link to='/posts'>Posts</Link>
          <Link to='/profile'>Profile</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
