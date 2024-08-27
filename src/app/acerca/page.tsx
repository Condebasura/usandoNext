import { Metadata } from "next";

export const metadata: Metadata ={
    title: {
        absolute: "Acerca", // Marca el title de la pagina en absoluto, ignora las demas metadatas
    }, 
    description: "Estas en la seccion de Acerca",
};

export default function Acerca(){
    return <h1>Acerca</h1>;
}