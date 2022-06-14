import TablaPelis from "./TablaPelis.component"
import CardDeck from "./CardDeck.component"

const ContenedorTabs = (props) =>
{
    if(props.modo === 1)
    {
        //Modo tabla
        return <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-tabla" role="tabpanel" aria-labelledby="v-pills-tabla-tab">
                <TablaPelis peliculas={props.peliculas}/>
            </div>
        </div>
    }
    else{
        //Modo deck
        return <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-card" role="tabpanel" aria-labelledby="v-pills-card-tab">
                <CardDeck peliculas={props.peliculas} />
            </div>
        </div>
    }
}
export default ContenedorTabs