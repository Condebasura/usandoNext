export default function ProductDetail(
    {params}: {
params: {
    productId: string;
};        
}){
    return <h1>producto {params.productId}</h1>;

}