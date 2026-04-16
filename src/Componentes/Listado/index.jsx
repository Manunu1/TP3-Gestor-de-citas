import Cita from "../Cita";

const Listado = ({ ArrayCitas = [] }) => {
    return (
        <div>
            {ArrayCitas && ArrayCitas.length > 0 ? ( //esto es un if
                ArrayCitas.map((cita, i) => {
                    const [Mascota, Dueño, Fecha, Hora, Sintomas] = cita;

                    return (
                        <Cita
                            key={i}
                            Mascota={Mascota}
                            Dueño={Dueño}
                            Fecha={Fecha}
                            Hora={Hora}
                            Sintomas={Sintomas}
                        />
                    );
                })
            ) : ( //este es el else
                <p>No hay citas todavía</p>
            )}
        </div>
    );
};

export default Listado;