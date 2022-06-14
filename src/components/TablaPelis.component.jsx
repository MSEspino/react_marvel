const TablaPelis = () =>
{
    return <table className="table">
    <thead>
        <tr>
            <th>Id.</th>
            <th>Título</th>
            <th>Fecha de Lanzamiento</th>
            <th>Recaudación</th>
            <th>Fase MCU</th>
            <th># escenas postcréditos</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Iron Man</td>
            <td>2008-05-02</td>
            <td>585,171,547</td>
            <td>1</td>
            <td>1</td>
            <td>
                <a href="#">Seleccionar</a>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>The Incredible Hulk</td>
            <td>2008-06-13</td>
            <td>265,573,859</td>
            <td>1</td>
            <td>1</td>
            <td>
                <a href="#">Seleccionar</a>
            </td>
        </tr>
    </tbody>

</table>
}

export default TablaPelis