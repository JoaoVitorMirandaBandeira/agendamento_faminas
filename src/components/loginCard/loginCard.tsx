import { ReactNode } from "react"
import Style from "./loginCard.module.css"

interface LoginCard{
    children: ReactNode,
    title: String
}

export default function LoginCard({children,title}: LoginCard){
    return(
        <div className={Style.loginCard}>
            <h2 className={Style.textCard}>{title}</h2>
            {children}
        </div>
    )
}