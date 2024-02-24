import React, { useEffect, useRef, useState } from 'react'
import { Fetch_movies } from '../Hook/Fetch_movies'



export const From_Movies = () => {

    
    const [Busqueda, setBusqueda] = useState("");

    const{ datones,isLoading}=Fetch_movies(Busqueda);

      const referenciaInput=useRef();
    useEffect(()=>referenciaInput.current.focus(),[])
    
const buscarDatos=(e)=>{
    e.preventDefault();
}

  return (
    <form onSubmit={buscarDatos} >
    <div className="contBuscador">
        <input
        ref={referenciaInput}
         type="text" 
         className="buscar" 
         placeholder="Nombre de la pelicula"
         onChange={(e)=>setBusqueda(e.target.value)}
         />
    </div>
    
<div className="contenedorMayor">
    {isLoading?<span></span>
              :datones.map((pelis)=>(
                <div  className="carta" id={pelis.id} key={pelis.id}>
           
                <div className="contenedorImg">
                   <img src={`https://image.tmdb.org/t/p/w500${pelis.poster_path}`} alt="" />
                </div>

                <div className="contenedorInfo">
                <div className="conTitle">

                    <h4>{pelis.title}</h4>
                    </div>

                    <hr />
                    <p>Popularidad <b>{pelis.popularity}</b></p>
                    <p><b>{pelis.release_date}</b></p>
                </div>
             </div> 

              ))    
}
    </div>
</form>
  )
}
