export default function ProfileLayout(
   
    {children}:{
    children: React.ReactNode
    }) {
        return ( // Crear rutas relativas 
            <>
            <h2>Rutas rellativas a la cuenta del Usuario</h2>
            {children}
            </>
        );
    }