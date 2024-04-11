// import { AppBar } from "./componentes/AppBar/AppBar"
import { Posts } from "./screens/Posts/Posts"
import { Footer } from "./componentes/Footer/Footer"

import { useState } from "react"
import { Profile } from "./screens/profile/profile"
import { Home } from "./screens/Home/Home"

import "./App.css"

function App() {


  const [ screen, setScreen ] = useState(0);

  function getScreen(){
    switch (screen) {
      case 0:
        return <Home />;
      case 1:
        return <Profile />;
      case 2:
        return <Posts />;  
      default:
        return <Home />;  
    }
  }


  return (

   <div>

     <div className="container-appBar">
            <div className="logo">
                <a>In Consert</a>
            </div>

                <nav className="menu">
                    <a onClick={() => setScreen(0)}>Home</a>
                    <a onClick={() => setScreen(1)}>Perfil</a>
                    <a onClick={() => setScreen(2)}>Posts</a>
                </nav>
                
        </div>
        {getScreen()}
  
    <Footer />
 </div>
  )
}

export default App;
