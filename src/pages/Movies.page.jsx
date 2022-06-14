import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContenedorTabs from "../components/ContenerdorTabs.component"
import MenuLateral from "../components/MenuLateral.component"

const MoviesPage = () =>
{
    const listaPeliculas = [
        {
            id: 1 ,
            nombre:"Iron Man" ,
            fecha:"2008-05-02",
            recaudacion:"585,171,547",
            fase:"1" ,
            postcreditos:"1",
        },
        {
            id: 2 ,
            nombre:"The Incredible Hulk" ,
            fecha:"2008-06-13",
            recaudacion:"265,573,859",
            fase:"1" ,
            postcreditos:"1",
        }
    ]

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