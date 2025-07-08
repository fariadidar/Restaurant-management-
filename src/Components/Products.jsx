import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div id="menu" className="bg-[#0d1b1e]">
        <div className="w-[1200px] mx-auto grid grid-cols-4 justify-center items-center gap-4 text-white px-4 py-10">

        {/* Product 1 */}
        <div className="flex-shrink-0 snap-start">
          <div className="bg-black shadow-lg rounded-lg overflow-hidden text-center">
            <img src="/images/Blue Squash Drink.jpg" alt="Product" className="w-full h-[222px] object-cover" />
            <div className="p-4">
              <h5 className="text-lg font-bold">Blue Squash Drink</h5>
              <h6 className="text-red-600 mt-1">Bdt. <i>180</i>/-</h6>
              <p className="text-gray-600 text-sm mt-1">
                Combines blue curaçao syrup with lemon or lime juice, soda, and crushed ice.
              </p>
              <div className="mt-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cart">
                  Add to Cart
                </button>
              </div>
              <Link to="/shop/productView/1">
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cart">
                  Quick View
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Product 1 */}
        <div className="flex-shrink-0 snap-start">
          <div className="bg-black shadow-lg rounded-lg overflow-hidden text-center">
            <img src="/images/Blue Squash Drink.jpg" alt="Product" className="w-full h-[222px] object-cover" />
            <div className="p-4">
              <h5 className="text-lg font-bold">Blue Squash Drink</h5>
              <h6 className="text-red-600 mt-1">Bdt. <i>180</i>/-</h6>
              <p className="text-gray-600 text-sm mt-1">
                Combines blue curaçao syrup with lemon or lime juice, soda, and crushed ice.
              </p>
              <div className="mt-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cart">
                  Add to Cart
                </button>
              </div>
              <Link to="/shop/productView/1">
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cart">
                  Quick View
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex-shrink-0 snap-start">
          <div className="bg-black shadow-lg rounded-lg overflow-hidden text-center">
            <img src="/images/Chocolate Milkshake.jpg" alt="Product" className="w-full h-[222px] object-cover" />
            <div className="p-4">
              <h5 className="text-lg font-bold">Chocolate Milkshake</h5>
              <h6 className="text-red-600 mt-1">Bdt. <i>210</i>/-</h6>
              <p className="text-gray-600 text-sm mt-1">
                A creamy and indulgent treat made by blending rich chocolate syrup or cocoa powder with milk and ice cream.
              </p>
              <div className="mt-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cart">
                  Add to Cart
                </button>
              </div>
              <Link to="/shop/productView/1">
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cart">
                  Quick View
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex-shrink-0 snap-start">
          <div className="bg-black shadow-lg rounded-lg overflow-hidden text-center">
            <img src="/images/Pina Colada.jpg" alt="Product" className="w-full h-[222px] object-cover" />
            <div className="p-4">
              <h5 className="text-lg font-bold">Pina Colada</h5>
              <h6 className="text-red-600 mt-1">Bdt. <i>250</i>/-</h6>
              <p className="text-gray-600 text-sm mt-1">
                Combines pineapple juice, coconut cream and blended with ice to create a smooth and refreshing drink.
              </p>
              <div className="mt-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cart">
                  Add to Cart
                </button>
              </div>
              <Link to="/shop/productView/1">
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cart">
                  Quick View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products