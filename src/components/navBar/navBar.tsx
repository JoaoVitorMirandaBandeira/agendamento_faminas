import Image from "next/image"
import Style from "./navBar.module.css"

export default function NavBar(){
    return(
        <div className={Style.text_navbar}>
            <Image src="/logoAgendamento.png" alt="Logo da instituição" width="270" height="50" priority/>
        </div>
    )
}