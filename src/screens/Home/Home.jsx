import { FiAward } from "react-icons/fi";
import { FaRankingStar } from "react-icons/fa6";


export function Home(){
    return(
        <div>

            <div className="bg-[url('./src/assets/home1.jpg')] bg-cover bg-center h-100 flex flex-col justify-between">
                <div className="flex flex-col p-15 items-center text-xl"> 
                    <p className="font-semibold pt-20 text-[#C6007D] text-2xl">In Consert</p> 
                    <p className="text-[#25452E]">a nova plataforma gamificada</p>
                    <p className="text-[#25452E]">sobre shows</p>
                    <p className="text-[#25452E]">no Brasil</p>
                </div>

                <div className="flex gap-2 p-6 items-center justify-center">
                    <div className="bg-[#F0D6E6] rounded-md text-center p-4">
                        <p>Conecte-se com outros apaixonados por música</p>
                    </div>
                    <div className="bg-[#F0D6E6] rounded-md text-center p-4 ">
                        <p>Compatilhe as suas experiências</p>
                    </div>
                </div>

               
            </div>

            <div className="bg-[#D2F0DB] p-5 m-3 rounded-md text-center" >
                    <div className="bg-[#EAFDF0] p-2 rounded-lg">
                        <p>Acumule pontos com as suas publicações, comentários e curtidas</p>

                    </div>

                    <div className="p-2">
                        <p className="flex items-center justify-center gap-2">Destaque-se na lista de ranking <FaRankingStar /> </p> 
                        <p className="flex items-center justify-center gap-2">e concorra a prêmios < FiAward /></p>
                    </div>
                </div>
            
           

        </div>
    )
}