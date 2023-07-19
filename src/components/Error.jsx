import React from 'react'

const Error = ({mensaje}) => {
    return (
        <div className="bg-red-800 text-white p-3 uppercase font-bold rounded-md text-center mb-3">
            <p>{mensaje}</p>
        </div>
    )
}

export default Error