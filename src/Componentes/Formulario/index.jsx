import './Formulario.css'

function Formulario({ citas, setCitas }) {

    const agregarCita = (e) => {
        e.preventDefault();

        const formulario = e.target;

        const nuevaCita = {
            Mascota: formulario.mascota.value,
            Dueño: formulario.propietario.value,
            Fecha: formulario.fecha.value,
            Hora: formulario.hora.value,
            Sintomas: formulario.sintomas.value
        }

        setCitas([...citas, nuevaCita])

        formulario.mascota.value = "";
        formulario.propietario.value = "";
        formulario.fecha.value = "";
        formulario.hora.value = "";
        formulario.sintomas.value = "";

    }

    return (

        <div>


            <form onSubmit={agregarCita}>

                <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" ></input>

                <label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" ></input>

                <label>Fecha</label><input type="date" name="fecha" className="u-full-width" ></input>

                <label>hora</label><input type="time" name="hora" className="u-full-width" ></input>

                <label>Sintomas</label>

                <textarea name="sintomas" className="u-full-width"></textarea>

                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>

            </form>

        </div>
    )
}
export default Formulario;