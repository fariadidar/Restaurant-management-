import React from 'react';
import { Link } from 'react-router-dom';

const food_list = [
  {
    _id: "1",
    name: "Hazelnut Frappe",
    image: "https://i.ibb.co/bR246w21/Hazelnut-Frappe.jpg",
    price: 210,
    description: "Creamy, chilled coffee drink blended with ice, milk, espresso, and rich hazelnut syrup",
    category: "Coffee"
  },
  {
    _id: "2",
    name: "Cappuccino",
    image: "https://i.ibb.co/tMZ5hjxK/cappuccino.jpg",
    price: 200,
    description: "Classic Italian coffee made with equal parts espresso, steamed milk, and milk foam",
    category: "Coffee"
  },
  {
    _id: "3",
    name: "Espresso",
    image: "https://i.ibb.co/23J8vdbt/Espresso.jpg",
    price: 180,
    description: "Strong, concentrated coffee made by forcing hot water through finely-ground coffee beans",
    category: "Coffee"
  },
  {
    _id: "4",
    name: "Idli",
    image: "https://i.ibb.co/gbM04wvL/Idli.jpg",
    price: 340,
    description: "Soft, fluffy South Indian steamed cake made from fermented rice and urad dal batter",
    category: "South-Indian"
  },
  {
    _id: "5",
    name: "Sambar",
    image: "https://i.ibb.co/Jj3HK75p/Sambar.jpg",
    price: 225,
    description: "South Indian lentil stew made with mixed vegetables and a blend of aromatic spices",
    category: "South-Indian"
  },
  {
    _id: "6",
    name: "Dosa",
    image: "https://i.ibb.co/Kp3vWW1Z/Dosa.jpg",
    price: 220,
    description: "Thin, crispy South Indian pancake made from a fermented rice and urad dal batter",
    category: "South-Indian"
  },
  {
    _id: "7",
    name: "Uttapam",
    image: "https://i.ibb.co/vxM9BpXC/Uttapam.jpg",
    price: 170,
    description: "Thick, soft South Indian pancake made from fermented rice and urad dal batter",
    category: "South-Indian"
  },
  {
    _id: "8",
    name: "Payasam",
    image: "https://i.ibb.co/ynyhP783/Payasam.jpg",
    price: 300,
    description: "South Indian dessert made with milk, sugar or jaggery, and ingredients like rice, etc.",
    category: "South-Indian"
  },
  {
    _id: "9",
    name: "French Fries",
    image: "https://i.ibb.co/j9860Q3z/French-Fries.jpg",
    price: 250,
    description: "Thinly sliced seasoned potatoes served with dips",
    category: "Appetizer"
  },
  {
    _id: "10",
    name: "Nachos",
    image: "https://i.ibb.co/8RXtrxg/Nachos.jpg",
    price: 460,
    description: "Tortilla chips topped with melted cheese and ingredients like jalapeños",
    category: "Appetizer"
  },
  {
    _id: "11",
    name: "Pepperoni Pizza",
    image: "https://i.ibb.co/6JHHZKpw/Pepperoni-pizza.jpg",
    price: 650,
    description: "A thin crust topped with pepperoni, sauce, and mozzarella cheese",
    category: "Appetizer"
  },
  {
    _id: "12",
    name: "Margherita",
    image: "https://i.ibb.co/hxFB5W6V/Margherita.jpg",
    price: 800,
    description: "Thin crust pizza topped with fresh tomato sauce, mozzarella, and basil leaves",
    category: "Appetizer"
  }
];

const Products = () => {
  return (
    <div id="menu" className="bg-[#0d1b1e] py-10 px-4">
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-white">
        {food_list.map((product) => (
          <div key={product._id} className="bg-black shadow-lg rounded-lg overflow-hidden text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[222px] object-cover"
            />
            <div className="p-4">
              <h5 className="text-lg font-bold">{product.name}</h5>
              <h6 className="text-red-600 mt-1">BDT. <i>{product.price}</i>/-</h6>
              <p className="text-gray-400 text-sm mt-1">{product.description}</p>
              <div className="mt-3 flex flex-col gap-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
                <Link to={`/shop/productView/${product._id}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Quick View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
