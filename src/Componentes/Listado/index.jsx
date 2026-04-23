import Cita from "../Cita";

const Listado = ({citas, setCitas }) => {
    return (
        <div>
            {citas.map((cita) => (
                <Cita
                    Mascota={cita.Mascota}
                    Dueño={cita.Dueño}
                    Fecha={cita.Fecha}
                    Hora={cita.Hora}
                    Sintomas={cita.Sintomas}
                />
            ))}
        </div>
    )
}

export default Listado;