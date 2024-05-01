import { useEffect } from "react";
import { useState } from "react";

export default function useMousePosition(){
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    const updatePostion = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY});
    }

    useEffect(() => {
        window.addEventListener( 'mousemove', updatePostion )
        return () => {
            window.removeEventListener('mousemove', updatePostion)
        }
    }, [])

    return mousePosition;
}