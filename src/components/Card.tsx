const Card = ({children}:{children:React.ReactNode}) =>{
const cardStyle = {
    border: "thin solid red",
    margin:  "1rem auto",
    padding: "1rem",
}; // Implementacion de componentes
return <div style={cardStyle}>{children}</div>;
}

export default Card;