import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle } from '@fortawesome/free-solid-svg-icons';

const App = () => {

	const [products, setProducts] = useState([
		{ id: 1, name: 'Android', price: 200, quantity: 0, cost: 0},
		{ id: 2, name: 'Apple', price: 500, quantity: 0, cost: 0 },
		{ id: 3, name: 'Nokia', price: 50, quantity: 0, cost: 0 },
	]);

  const [totalCount, setTotalCount] = useState(0);
  const [totalCost, setCost] = useState(0);


  	const handleQuantityIncrease = (index) => {
  		const newProducts = [...products];

  	  newProducts[index].quantity++;
      newProducts[index].cost = newProducts[index].price * newProducts[index].quantity
  		setProducts(newProducts);
  		calculateTotalProducts();
  	};

  	const handleQuantityDecrease = (index) => {
  		const newProducts = [...products];
      if(newProducts[index].quantity > 0){
  		    newProducts[index].quantity--
        }
      newProducts[index].cost = newProducts[index].price * newProducts[index].quantity

  		setProducts(newProducts);
  		calculateTotalProducts();
  	};

	const calculateTotalProducts = () => {
		const totalCount = products.reduce((total, product) => {
			return total + product.quantity;
		}, 0);

		setTotalCount(totalCount);

    const totalCost = products.reduce((total, currentValue) =>  {
        return total = total + currentValue.cost
      }, 0)

    setCost(totalCost);
    console.log(totalCost)
	}



	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='item-list'>
					{products.map((product, index) => (
						<div className='item-container' key={product.id}>
							<div className='item-name' >



										<FontAwesomeIcon icon={faCircle} />
										<span>{product.name} (${product.price})</span>


							</div>
							<div className='quantity'>

								<button>
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
								</button>

								<span> {product.quantity} </span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>
						</div>
					))}
				</div>
        <div className='cost'>Total Cost: ${totalCost}</div>
				<div className='total'>Total Items: {totalCount}</div>
			</div>
		</div>
)
}

export default App;
