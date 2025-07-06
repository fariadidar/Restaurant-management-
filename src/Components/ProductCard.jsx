import React from 'react'

const ProductCard = () => {
  return (
    <div className="flex-shrink-0 w-64 snap-start">
        <div className="bg-black shadow-lg rounded-lg overflow-hidden text-center">

            <img src="./images/Hazelnut Frappe.jpg" alt="" className="w-full h-[222px] object-cover" />
            <div className="p-4">
                <h5 id="namepr1" className="text-lg font-bold">Hazelnut Frappe</h5>
                <h6 className="text-red-600 mt-1">Bdt. <i id="pricepr1">210</i>/-</h6>
                <p className="text-gray-600 text-sm mt-1">Creamy, Chilled coffee drink blended with ice, milk, espresso, and rich hazelnut syrup</p>
                <div id="divpr1" className="mt-3">
                    <button id="pr1" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cart">Add to Cart</button>
                </div>
                <a href="/shop/productView/1">
                    <button id="qv1" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cart">Quick View</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
