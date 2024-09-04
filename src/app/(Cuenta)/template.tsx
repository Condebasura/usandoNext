"use client";
import { useState } from "react";
export default function ProfileLayout(
   
    {children}:{
    children: React.ReactNode
    }) {
        const [input , setInput] = useState("");
        return ( // Crear rutas relativas 
            <>
            <h2>Rutas rellativas a la cuenta del Usuario</h2>
            <h3>Explicando la diferencia entre layout y template</h3>
            {children}
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            </>
        );
    }