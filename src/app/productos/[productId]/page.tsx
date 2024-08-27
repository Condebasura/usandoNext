import { Metadata } from "next";
type Props = {params: {
    productId: string;
};
};
// cambiar los titulos de los metadatos dinamicamente en el archivo de cada carpeta
export const generateMetadata =({params,}: Props):Metadata =>{
    return{
        title: `Producto ${params.productId}`
    }
}
export default function ProductDetail({params,}: Props){
    return <h1>producto {params.productId}</h1>;

}