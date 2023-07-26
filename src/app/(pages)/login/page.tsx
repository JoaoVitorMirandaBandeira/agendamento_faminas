import NavBar from "@/components/navBar/navBar"
import { Metadata } from "next";
import Head from "next/head";

export const metadata:Metadata = {
    title: "Login",
    description: "Pagina de login"
}

export default function Login(){
    return(
        <div>
            <NavBar/>
            
        </div>
    )
}