const TablaPelis = (props) =>
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
            {
                props.peliculas.map((pelicula)=> {
                    return <tr key={`pelicula_${pelicula.id}`}>
                        <td>{pelicula.id}</td>
                        <td>{pelicula.title}</td>
                        <td>{pelicula.release_date}</td>
                        <td>{parseInt(pelicula.box_office).toLocaleString()}</td>
                        <td>{pelicula.phase}</td>
                        <td>{pelicula.post_credit_scenes}</td>
                        <td>
                            <a href="#">Seleccionar</a>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
}

export default TablaPelis