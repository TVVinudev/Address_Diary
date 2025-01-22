import React, { useState } from 'react'

const FormData = () => {
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(id, name, address, phone);



        const formData = { id, name, address, phone };
        try {
            const resp = await fetch("/api/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include',
            });

            console.log(resp.status);
            if (resp.status == 201) {
                setID('');
                setName('');
                setAddress('');
                setPhone('');
            }

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>

            <div className='flex justify-center items-center shadow-xl px-14 py-5'>

                <form className='' onSubmit={handleSubmit}>
                    <h1 className='text-center text-xl font-semibold mb-5'>ADD DATA</h1>
                    <div className="mb-5">
                        <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your ID</label>
                        <input
                            type="text"
                            id="id"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Name"
                            value={id}
                            onChange={(e) => setID(e.target.value)}
                            required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="Address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
                        <textarea
                            id="address"
                            rows={4}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                </form>


            </div>



        </>
    )
}

export default FormData