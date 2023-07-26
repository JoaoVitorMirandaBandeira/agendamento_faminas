import NavBar from "@/components/navBar/navBar"
import Head from "next/head";

export default function Login(){
    return(
        <div>
            <Head>
                <title>title</title>
            </Head>
            <NavBar/>
            <h1>Login</h1>
            <p>Pagina de Login</p>
        </div>
    )
}