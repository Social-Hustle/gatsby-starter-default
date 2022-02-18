import { useState, useRef, useLayoutEffect } from "react";

export default function useDimensions(){
    const ref = useRef(null);
    const [dimensions, setDimensions] = useState({});
    useLayoutEffect( () => {
        const onResize = () => {
            const el = ref.current
            setDimensions(el.getBoundingClientRect().toJSON())
        }
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
      }, [ref]);

      return [ref, dimensions];

}