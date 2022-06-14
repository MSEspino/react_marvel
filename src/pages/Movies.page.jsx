import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import CardDeck from "../components/CardDeck.component"
import MenuLateral from "../components/MenuLateral.component"
import TablaPelis from "../components/TablaPelis.component"

const MoviesPage= () =>
{
    return <div className="container">
        <h1>Marvel Cinematic Universe (MCU)</h1>
        <div className="row">
            <div className="col-3">
                <MenuLateral />
            </div>
            <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-tabla" role="tabpanel" aria-labelledby="v-pills-tabla-tab">
                        <TablaPelis />
                    </div>
                    <div className="tab-pane fade" id="v-pills-card" role="tabpanel" aria-labelledby="v-pills-card-tab">
                        <CardDeck />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MoviesPage