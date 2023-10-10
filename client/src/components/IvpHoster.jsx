import React from 'react'

function IvpHoster() {
  return (
    <div>
        <h2 className='m-3 text-2xl font-semibold'>Conocé al anfitrión</h2>

        <div className='m-3 p-10 bg-stone-300 rounded-2xl'>
    
            <div className="flex bg-white items-center justify-around p-4 border border-gray-300 rounded-lg ">
                <div className="mr-4 text-center">
                    <img src="https://cdn.leonardo.ai/users/985a0e63-0a48-487a-944f-cee547f6b059/generations/b28a7a77-ed1f-4a81-a729-0d9616c9dcf2/variations/Default_Childrens_book_cover_Beautiful_creole_female_pirate_ca_1_b28a7a77-ed1f-4a81-a729-0d9616c9dcf2_1.jpg?w=512" className="w-40 h-40 object-cover rounded-full" alt="Profile Photo" />
                    <h2 className='m-3 text-3xl font-bold'>
                        Lucía
                    </h2>
                    <span className='font-semibold'>
                        SuperAnfitrión
                    </span>
                </div>
                <div>
                    <div className="text-center border-b">
                        <div className='text-2xl font-bold mb-2'>95</div>
                        <span className='text-xs'>Evaluaciones</span>
                    </div>
                    <div className="text-center border-b">
                        <div className='text-2xl font-bold mb-2'>4,83</div>
                        <span className='text-xs'>Calificación</span>
                    </div>
                    <div className='text-center'>
                        <div className='text-2xl font-bold mb-2'>5</div>
                        <span className='text-xs'>Años de experiencia como anfitrión</span>
                    </div>
                </div>
            </div>

            <div className="m-3 border-b">
                <div className='text-lg mt-4'>Vive en Inglaterra, Reino Unido</div>
                <span className='text-lg  font-semibold underline'>Mostrar más</span>
                <br></br>
                <button
                className="bg-stone-900 text-white p-2 px-4 rounded-md cursor-pointer my-4"
                >
                Escribile al anfitrión
                </button>
            </div>
            <div className="m-3">
                <span className='text-xs text-stone-500'>Para proteger tus pagos, nunca transfieras dinero ni te comuniques fuera del sitio web o la app de Airbnb.</span>
            </div>

  
            
        </div>
    </div>
  )
}

export default IvpHoster