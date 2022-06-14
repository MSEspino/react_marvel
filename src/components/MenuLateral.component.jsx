const MenuLateral = () =>
{
    return <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <a className="nav-link active" id="v-pills-tabla-tab" data-toggle="pill" href="#v-pills-tabla" role="tab" aria-controls="v-pills-tabla" aria-selected="true">
        Tabla
    </a>
    <a className="nav-link" id="v-pills-card-tab" data-toggle="pill" href="#v-pills-card" role="tab" aria-controls="v-pills-card" aria-selected="false">
        Card
    </a>
</div>
}

export default MenuLateral