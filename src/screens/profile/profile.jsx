import { FaAward } from "react-icons/fa";
import { Accordion } from "../../componentes/Accordion/accordion";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

export function Profile(){

    const [numPosts, setNumPosts] = useState(0);
    const [ pontos, setPontos ] = useState(0)

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
        setNumPosts(convertedPosts.length)

        let somaDePontos = 0
        for(let i =0; i < convertedPosts.length; i++){
            somaDePontos += convertedPosts[i].pontos || 0
        }
        setPontos(somaDePontos)
      })},[]);

    return(

        <div className="h-full">

            <div className="flex gap-5 flex-col items-center h-[280px] bg-[#EEE5EA] justify-center">

        
                <div className="flex gap-1 flex-col items-center">
                    <img className="rounded-full" src="./src/assets/profile.jpg"></img>
                    <div className="flex gap-2 items-center p-2">
                        <p className="text-[#25452E] text-lg">Hailey Bieber</p>
                        <FaAward  />
                    </div>
                </div>

                <div className="flex gap-4 text-sm">
                    <div className="flex flex-col items-center bg-[#EAFFF0] p-2 rounded-lg shadow-md">
                        <p className="text-[#CD168A]">{numPosts}</p>
                        <p className="text-[#EE5DB6]">Posts</p>
                    </div>

                    <div className="flex flex-col items-center bg-[#EAFFF0] p-2 rounded-lg shadow-md">
                        <p className="text-[#CD168A]">{pontos}</p>
                        <p className="text-[#EE5DB6]">Pontos</p>
                    </div>

                    <div className="flex flex-col items-center bg-[#EAFFF0] p-2 rounded-lg shadow-md">
                        <p className="text-[#CD168A]">2#</p>
                        <p className="text-[#EE5DB6]">Ranking</p>
                    </div>

                </div>

            </div>

            <div className="flex flex-col gap-4 justify-center p-4">

                 <Accordion />

            </div>

            <Link to={'/'}>
            <div className="flex items-center justify-center m-2">
                <button className="bg-[#CD168A] hover:bg-[#EE5DB6] px-5 py-1 rounded-2xl text-[#EAEAEA]">Logout</button>
            </div>
            </Link>
        </div>
    )
}