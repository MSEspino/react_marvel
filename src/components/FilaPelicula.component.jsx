import { useState } from "react"

const FilaPelicula = (props) =>
{
    const [tipoVisualizacion, setTipoVisualizacion] = useState("lectura")

    const cambiarTipoFila = ()=>
    {
        if (tipoVisualizacion ==="lectura")
        {
            setTipoVisualizacion("escritura")
        }else{
            setTipoVisualizacion("lectura")
        }
    }
    
    if(tipoVisualizacion == "lectura"){
    return <tr>
        <td>{props.pelicula.id}</td>
        <td>{props.pelicula.title}</td>
        <td>{props.pelicula.release_date}</td>
        <td>{parseInt(props.pelicula.box_office).toLocaleString()}</td>
        <td>{props.pelicula.phase}</td>
        <td>{props.pelicula.post_credit_scenes}</td>
        <td>
            <a href="#" onClick={cambiarTipoFila}>Seleccionar</a>
        </td>
    </tr>
    }
    else{
    return <tr>
        <td>
            <input type={"text"} defaultValue={props.pelicula.id}/>
        </td>
        <td>
            <input type={"text"} defaultValue={props.pelicula.title}/>
        </td>
        <td>
            <input type={"text"} defaultValue={props.pelicula.release_date}/>
        </td>
        <td>
            <input type={"text"} defaultValue={parseInt(props.pelicula.box_office).toLocaleString()} />
        </td>
        <td>
            <input type={"text"} defaultValue={props.pelicula.phase} />
        </td>
        <td>{props.pelicula.post_credit_scenes}
            <input type="text" defaultValue={props.pelicula.phase} />
        </td>
        <td>
            <a href="#" onClick={cambiarTipoFila}>Seleccionar</a>
        </td>
    </tr>        
    }
}

export default FilaPelicula