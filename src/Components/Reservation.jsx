import React from 'react'

const Reservation = () => {
  return (
    <section className="bg-[#0d1b1e] text-white min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center bg-no-repeat">

        <div className="text-center space-y-6">
            <h2 className="text-lg italic text-gray-400">Reservations</h2>
            <h1 className="text-4xl md:text-5xl tracking-widest font-semibold text-[#d3af7f]">BOOK A TABLE</h1>
            <p className="text-xl md:text-2xl text-[#d3af7f] font-medium">STEP 1 : SELECT GUESTS, DATE AND TIME</p>
            
            <div className="mt-8">
            <label className="mb-2 text-lg text-[#d3af7f] font-semibold text-center block" for="guests">
                Guests: <span className="text-red-500"></span>
            </label>

            <select id="guests" className="select select-bordered w-64 max-w-xs bg-white p-2.5 text-black">
                <option disabled selected>No. of Guests</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
            </select>
            </div>
        </div>

    </section>
  )
}

export default Reservation
