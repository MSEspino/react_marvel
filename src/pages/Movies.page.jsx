import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContenedorTabs from "../components/ContenerdorTabs.component"
import MenuLateral from "../components/MenuLateral.component"

import data from "../resources/data"

const MoviesPage = () =>
{
    const listaPeliculas = data.data
    
    return <div className="container">
        <h1>Marvel Cinematic Universe (MCU)</h1>
        <div className="row">
            <div className="col-3">
                <MenuLateral />
            </div>
            <div className="col-9">
                <ContenedorTabs modo={1} peliculas={listaPeliculas}/>
            </div>
        </div>
    </div>
}

export default MoviesPage