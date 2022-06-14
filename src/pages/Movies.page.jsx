import { useEffect, useState } from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContenedorTabs from "../components/ContenerdorTabs.component"
import MenuLateral from "../components/MenuLateral.component"

import data from "../resources/data"

const MoviesPage = () =>
{
    //Variable de estado
    const [modoVisualizacion, setModoVisualizacion]= useState(1)
    const [listaPeliculas,setListaPeliculas] = useState([])

    useEffect( () =>{
        const dataFetch = async () => {
            const resp = await fetch("https://mcuapi.herokuapp.com/api/v1/movies")
            const data = await resp.json()
            setListaPeliculas(data.data)
            //console.log(data)
            return data
        }

        dataFetch()
    }, [])
    //const listaPeliculas = data.data

    //Variables de estado
    
    
    return <div className="container">
        <h1>Marvel Cinematic Universe (MCU)</h1>
        <div className="row">
            <div className="col-3">
                <MenuLateral cambiarModo={setModoVisualizacion} modo={modoVisualizacion} />
            </div>
            <div className="col-9">
                <ContenedorTabs modo={modoVisualizacion} peliculas={listaPeliculas}/>
            </div>
        </div>
    </div>
}

export default MoviesPage