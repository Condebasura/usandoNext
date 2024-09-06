export default function DashbordLayout({
children,
analytics,
chat, 
video
// Creacion de rutas o componentes que se renderizan en  paralelo para un dashbord
}:{
    children: React.ReactNode;
    analytics: React.ReactNode;
    chat: React.ReactNode;
    video: React.ReactNode;
}
){
    return <>
    <article> {children}</article>
    <section>
        <aside>{analytics}</aside>
        <aside>{chat}</aside>
        <aside>{video}</aside>
    </section>
    </>
}