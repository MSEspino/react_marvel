import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContenedorTabs from "../components/ContenerdorTabs.component"
import MenuLateral from "../components/MenuLateral.component"

const MoviesPage = () =>
{
    return <div className="container">
        <h1>Marvel Cinematic Universe (MCU)</h1>
        <div className="row">
            <div className="col-3">
                <MenuLateral />
            </div>
            <div className="col-9">
                <ContenedorTabs modo={2}/>
            </div>
        </div>
    </div>
}

export default MoviesPage