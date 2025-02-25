import React from 'react'

const Card = ({ data }) => {
    console.log(data);

    async function handleDelete() {
        try {
            alert('delete This file?')
            const resp = await fetch(`/api/delete/${data.id}`,
                {
                    method: 'DELETE'
                }
            );
            if (resp.status == 200) {
                alert('delete Success fully')
            }

        } catch (error) {
            console.log(error);

        }
    }

    return (


        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{data.id}</p>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{data.address}</p>
            <p className="inline-flex font-medium items-center text-blue-600 ">
                {data.phone}
            </p>
            <div className='mt-5 space-x-2'>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                <button
                    type="submit"
                    onClick={handleDelete}
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>

            </div>

        </div>

    )
}

export default Card