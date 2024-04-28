import { FaAward } from "react-icons/fa";
import { Accordion } from "../../componentes/Accordion/accordion";

export function Profile(){

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
                        <p className="text-[#CD168A]">42</p>
                        <p className="text-[#EE5DB6]">Tópicos</p>
                    </div>

                    <div className="flex flex-col items-center bg-[#EAFFF0] p-2 rounded-lg shadow-md">
                        <p className="text-[#CD168A]">200</p>
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

                {/* <div className="mx-2.5 flex w-full items-center p-2 rounded-lg shadow-md justify-between">
                   <div className="flex gap-2 items-center text-[#EE5DB6]">
                        <FiAward size='20px'  />
                        <p>Prêmios</p>
                    </div>
                    <MdOutlineKeyboardArrowDown />
                </div>

                <div className="mx-2.5 flex w-full items-center p-2 rounded-lg shadow-md justify-between">
                   <div className="flex gap-2 items-center text-[#EE5DB6]">
                        <FaRankingStar size='20px'  />
                        <p>Ranking</p>
                    </div>
                    <MdOutlineKeyboardArrowDown />
                </div>

                <div className="mx-2.5 flex w-full items-center p-2 rounded-lg shadow-md justify-between">
                   <div className="flex gap-2 items-center text-[#EE5DB6]">
                        <FaBookOpen size='20px'  />
                        <p>Meus Posts</p>
                    </div>
                    <MdOutlineKeyboardArrowDown />
                </div> */}

    
            </div>

            <div className="flex items-center justify-center m-2">
                <button className="bg-[#CD168A] hover:bg-[#EE5DB6] px-5 py-1 rounded-2xl text-[#EAEAEA]">Logout</button>
            </div>
        </div>
    )
}