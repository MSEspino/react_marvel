import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const MoviesPage= () =>
{
    return <div className="container">
        <h1>Marvel Cinematic Universe (MCU)</h1>
        <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-tabla-tab" data-toggle="pill" href="#v-pills-tabla" role="tab" aria-controls="v-pills-tabla" aria-selected="true">
                        Tabla
                    </a>
                    <a className="nav-link" id="v-pills-card-tab" data-toggle="pill" href="#v-pills-card" role="tab" aria-controls="v-pills-card" aria-selected="false">
                        Card
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default MoviesPage