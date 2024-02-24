import { useEffect, useState } from "react"
import { ApiDatos } from "../Datos/ApiDatos"

export const Fetch_movies = (busqueda) => {
   const{URL_BASE,API_KEY}=ApiDatos()

    const [state, setState] = useState({
        datones:null,
        isLoading:true
    })

    const getFetch = async () => {
        try {
            const res = await fetch(`${URL_BASE}?query=${busqueda}&api_key=${API_KEY}`);
            const data = await res.json();
            const  nuevosDatos=data.results.filter((res)=>res.poster_path!==null)
              setState({
                datones: nuevosDatos,  
                isLoading: false,
                })


        } catch (error) {
            console.log(error)
            setState({
                datones: null,
                isLoading: false,
            })
        }
    }

    useEffect(() => {
        if(busqueda!=="")
        {
            getFetch()
        }
    }, [busqueda])
    
    const { datones, isLoading } = state;

    return {
        datones,
        isLoading,
    }
}
