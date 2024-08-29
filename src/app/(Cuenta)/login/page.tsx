"use client";
// use client es para identificar que es del lado del cliente
import { useRouter } from "next/navigation";

export default function Login(){
    // useRouter maneja la redireccion entre las rutas
const ruter = useRouter();
const handleClick = () =>{
    ruter.push("/")
    }
    return(
        <>
        <h1>Iniciar Sesion</h1>
        <button onClick={handleClick}>Regresar al Home</button>
        
        </>
    ) 
    
}