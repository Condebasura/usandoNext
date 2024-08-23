export default function BlogLayout(
    // Creacion de layout en cada ruta para cambiar el html a mostrar
    {children}:{
    children: React.ReactNode
    }
){
return(
    <>
    <header>Cabecera del Blog</header>
    <main>
        <section>{children}</section>
        <aside>
            <form action="">
                <input type="search" name="" id="" placeholder="Voy a tener suerte"/>
                <input type="submit" value="Buscar" />

            </form>
        </aside>
    </main>
    <footer>Pie del blog</footer>
    </>

)

}