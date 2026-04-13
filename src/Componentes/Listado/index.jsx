import Cita from "../Cita"

function Listado({ citas = [] }) {
    return (
        <div>
            <h2>Administra tus citas</h2>

            {citas.length === 0 ? (
                <p>No hay citas aún</p>
            ) : (
                citas.map((cita) => (
                    <Cita
                        key={cita.id}
                        Mascota={cita.mascota}
                        Dueño={cita.propietario}
                        Fecha={cita.fecha}
                        Hora={cita.hora}
                        Sintomas={cita.sintomas}
                    />
                ))
            )}
        </div>
    )
}

export default Listado