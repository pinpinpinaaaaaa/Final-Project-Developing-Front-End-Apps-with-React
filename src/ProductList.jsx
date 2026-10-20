import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
        description: 'Produces oxygen at night, improving air quality.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
        description: 'Filters formaldehyde and xylene from the air.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
        description: 'Removes mold spores and purifies the air.',
        cost: '$18',
      },
      {
        name: 'Boston Fern',
        image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
        description: 'Adds humidity to the air and removes toxins.',
        cost: '$20',
      },
      {
        name: 'Rubber Plant',
        image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
        description: 'Easy to care for and effective at removing toxins.',
        cost: '$17',
      },
      {
        name: 'Pothos',
        image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
        description: 'Trailing vine that clears benzene and carbon monoxide.',
        cost: '$10',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=600&auto=format&fit=crop',
        description: 'Calming scent, used in aromatherapy.',
        cost: '$20',
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=600&auto=format&fit=crop',
        description: 'Sweet fragrance that promotes relaxation.',
        cost: '$18',
      },
      {
        name: 'Rosemary',
        image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
        description: 'Invigorating scent, often used in cooking.',
        cost: '$15',
      },
      {
        name: 'Mint',
        image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
        description: 'Refreshing aroma, used in teas and cooking.',
        cost: '$12',
      },
      {
        name: 'Lemon Balm',
        image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
        description: 'Citrusy scent that relieves stress.',
        cost: '$14',
      },
      {
        name: 'Hyacinth',
        image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
        description: 'Colorful spring blooms with a sweet fragrance.',
        cost: '$22',
      },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      {
        name: 'Oregano',
        image: 'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg',
        description: 'Contains compounds that deter certain insects.',
        cost: '$10',
      },
      {
        name: 'Marigold',
        image: 'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg',
        description: 'Natural insect repellent that also adds color.',
        cost: '$8',
      },
      {
        name: 'Geraniums',
        image: 'https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg',
        description: 'Known for their insect-repelling properties.',
        cost: '$20',
      },
      {
        name: 'Basil',
        image: 'https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg',
        description: 'Repels flies and mosquitoes.',
        cost: '$9',
      },
      {
        name: 'Catnip',
        image: 'https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg',
        description: 'Repels mosquitoes and attracts cats.',
        cost: '$13',
      },
      {
        name: 'Peppermint',
        image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg',
        description: 'Strong scent keeps ants and spiders away.',
        cost: '$11',
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        name: 'ZZ Plant',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=600&auto=format&fit=crop',
        description: 'Thrives in low light and requires minimal watering.',
        cost: '$25',
      },
      {
        name: 'Cast Iron Plant',
        image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
        description: 'Hardy plant that tolerates neglect and low light.',
        cost: '$20',
      },
      {
        name: 'Succulents',
        image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
        description: 'Drought-tolerant plants with unique shapes.',
        cost: '$18',
      },
      {
        name: 'Aloe Vera',
        image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
        description: 'Soothing gel for skin and needs little water.',
        cost: '$14',
      },
      {
        name: 'Echinacea',
        image: 'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg',
        description: 'Drought-tolerant bloom that boosts the immune system.',
        cost: '$16',
      },
      {
        name: 'Calendula',
        image: 'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg',
        description: 'Easy-growing flower that heals wounds and soothes skin.',
        cost: '$12',
      },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Total number of plants in the cart, shown on the cart icon
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // A plant counts as "added" while it is in the cart, so its button stays disabled
  const isInCart = (plantName) => cartItems.some((item) => item.name === plantName);

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#" className="navbar-brand" onClick={handleHomeClick}>
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Paradise Nursery logo"
            className="navbar-logo"
          />
          <div>
            <h3 className="navbar-title">Paradise Nursery</h3>
            <i className="navbar-tagline">Where Green Meets Serenity</i>
          </div>
        </a>
        <ul className="navbar-links">
          <li>
            <a href="#" onClick={handleHomeClick}>Home</a>
          </li>
          <li>
            <a href="#" className={!showCart ? 'active' : ''} onClick={handlePlantsClick}>
              Plants
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`cart-link ${showCart ? 'active' : ''}`}
              onClick={handleCartClick}
              aria-label={`Cart with ${totalQuantity} items`}
            >
              <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
                <rect width="156" height="156" fill="none"></rect>
                <circle cx="80" cy="216" r="12"></circle>
                <circle cx="184" cy="216" r="12"></circle>
                <path
                  d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              <span className="cart-count">{totalQuantity}</span>
            </a>
          </li>
        </ul>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <section key={category.category} className="category-section">
              <h2 className="category-title">{category.category}</h2>
              <div className="product-list">
                {category.plants.map((plant) => {
                  const added = isInCart(plant.name);
                  return (
                    <div className="product-card" key={plant.name}>
                      <img className="product-image" src={plant.image} alt={plant.name} />
                      <div className="product-title">{plant.name}</div>
                      <div className="product-description">{plant.description}</div>
                      <div className="product-price">{plant.cost}</div>
                      <button
                        className={`product-button ${added ? 'added-to-cart' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={added}
                      >
                        {added ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
