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
                        <td>{pelicula.nombre}</td>
                        <td>{pelicula.fecha}</td>
                        <td>{pelicula.recaudacion}</td>
                        <td>{pelicula.fase}</td>
                        <td>{pelicula.postcreditos}</td>
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