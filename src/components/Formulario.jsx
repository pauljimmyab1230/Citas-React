import { useState, useEffect } from "react"
import Error from './Error'

function Formulario({pacientes,setPacientes, paciente, setPaciente}) {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(()=>{
    if (Object.keys(paciente).length >0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas)
    }
  },[paciente])


  const generarId = ()=>{
    const random = Math.random().toString(36).substring(20);
    const fecha = Date.now().toString();
    return random+fecha
  }
  const handleSubmit  = e=>{
    e.preventDefault();
    if ([nombre,propietario,email,fecha,sintomas].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,

    }

    if (paciente.id) {
      // editando registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente:pacienteState);
      setPacientes(pacientesActualizado);
      setPaciente({});

    }else{
      // nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes,objetoPaciente]);
    }


    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
        <p className="text-xl font-bold mt-5 text-center mb-10">Añade pacientes y <span className="text-indigo-600">administralos</span></p>

        <form onSubmit={handleSubmit} action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          
          {error && <Error mensaje = 'Todos los campos son obligatorios'/>}
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input value={nombre} onChange={(e)=> setNombre(e.target.value)} type="text" name="mascota" id="mascota" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input value={propietario} onChange={e=> setPropietario(e.target.value)} type="text" name="propietario" id="propietario" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Correo contacto propiertario" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" />
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input value={fecha} onChange={e => setFecha(e.target.value)} type="date" name="alta" id="alta"  className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" />
          </div>

          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
            <textarea value={sintomas} onChange={e=> setSintomas(e.target.value)} name="sitomas" id="sintomas" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" placeholder="describe los sintomas"></textarea>
          </div>

          <input type="submit" value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded hover:bg-indigo-700 cursor-pointer transition-all" />

        </form>
    </div>
  )
}

export default Formulario