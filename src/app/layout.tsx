import "./global.css";
import { Metadata } from "next";
import Link from "next/link";
/*export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}*/

export const metadata: Metadata = {
    title:{
      default:"Aprendiendo next.js", // Marca el titulo por defecto 
      absolute:"",
      template:"Loto Indumentaria - %s", // La %s muestra el nombre de la pagina despues o antes de lo ya escrito
    }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {     // Link reemplaza las etiquetas <a> en el html, en el navegador se ven como <a>
  return (
    <html lang="es">
      <body>
        <header>
          <h2>
            Cabecera de la app
            </h2>
            <nav>
            
              <Link href="/">Home</Link> 
              -
              <Link href="/acerca">Acerca</Link>
              -
              <Link href="/contacto">Contacto</Link>
              -
              <Link href="/productos">Productos</Link>
              -
              <Link href="/login">Iniciar sesion</Link>
              -
              <Link href="/registro">Registro</Link>
              -
              <Link href="/password">Recuperar Password</Link>

            </nav>
          </header>

        <main>
          {children}
          </main>
          
        <footer>Pie de la app</footer>
        </body>
    </html>
  )
}
