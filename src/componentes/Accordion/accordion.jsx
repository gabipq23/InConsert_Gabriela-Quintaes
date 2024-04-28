import { useState } from 'react';
import './accordion.css'
import { FiAward } from "react-icons/fi";
import { FaRankingStar } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


export function Accordion(){

    const [selected, setSelected]  = useState(null);
  
    const toggle = (i) =>{
      if(selected == i){
        return setSelected(null);
      }
  
      setSelected(i)
    }

    return(
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 p-4">

            <div className="mx-2.5 flex flex-col w-full p-2 rounded-lg shadow-md ">
                <div className="flex gap-2 justify-between items-center text-[#EE5DB6]" onClick={() => toggle(0)}>
                  
                  <div className='flex items-center gap-2'>
                    <FiAward size='20px'  />
                    <p>Prêmios</p>
                    </div>
                    
                    <span>{selected == 0 ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>
                 
                </div>

                <div className={selected == 0 ? 'conteudo show' : 'conteudo'}>
                  <p>Desconto com a Eventim</p>
                  <p>Par de ingressos na Tickets4Fun</p>
                  <p>Copo personalizado</p>
                  <p>Poster da sua banda preferida</p>
                </div>
          </div>

          
        </div>

        <div className="accordion flex flex-col gap-4 justify-center p-4">

        <div className="mx-2.5 flex flex-col w-full p-2 rounded-lg shadow-md ">
                <div className="flex gap-2 justify-between items-center text-[#EE5DB6]" onClick={() => toggle(1)}>
                  
                  <div className='flex items-center gap-2'>
                  <FaRankingStar size='20px'  />
                  <p>Ranking</p>
                  </div>
                  <span>{selected == 1 ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>
              
              </div>

              <div className={selected == 1 ? 'conteudo show' : 'conteudo'}>
                <p>2º lugar</p>
                
              </div>
          </div>


        </div>

        <div className="accordion flex flex-col gap-4 justify-center p-4">

        <div className="mx-2.5 flex flex-col w-full p-2 rounded-lg shadow-md ">
                <div className="flex gap-2 justify-between items-center text-[#EE5DB6]" onClick={() => toggle(2)}>
                  
                  <div className='flex items-center gap-2'>
                  <FaBookOpen size='20px'  />
                  <p>Meus Posts</p>
                  </div>
                  <span>{selected == 2 ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}</span>
              
              </div>

              <div className={selected == 2 ? 'conteudo show' : 'conteudo'}>
                <p>Show Jonas Brothers</p>
                <p>Show The Weeknd</p>
                
                
              </div>
          </div>


        </div>
      
    </div>
    )
}