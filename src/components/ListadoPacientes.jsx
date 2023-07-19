import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>listado pacientes</h2>
          <p className='text-xl font-bold mt-5 text-center mb-10'>Administra tus <span className='text-indigo-600'>pacientes y citas</span></p>

          {
            pacientes.map((paciente) => {
              return (
                <Paciente 
                  paciente={paciente} 
                  key={paciente.id } 
                  setPaciente={setPaciente}
                  eliminarPaciente = {eliminarPaciente}
                />
              )
            })
          }
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl font-bold mt-5 text-center mb-10'>Agrega nuevos pacientes <span className='text-indigo-600'>y pareceran en este lugar</span></p>
        </>

      )}

    </div>
  )
}

export default ListadoPacientes