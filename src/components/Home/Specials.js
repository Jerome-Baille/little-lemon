import greekSalad from '../../assets/small/greek salad.jpg';
import bruschetta from '../../assets/small/bruchetta.jpg';
import lemonDessert from '../../assets/small/lemon dessert.jpg';
import scooter from '../../assets/small/scooter.svg';
import { Link, useNavigate } from 'react-router-dom';

function Specials() {
    const navigate = useNavigate();
    const meals = [
        {
            id: 'greek-salad',
            name: 'Greek Salad',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            price: '12.99',
            image: greekSalad,
            alt: 'A close up of a Greek Salad with  a fork in the foreground. The salad is made up of lettuce, tomatoes, olives, feta cheese, and a few other ingredients.',
        },
        {
            id: 'bruschetta',
            name: 'Bruschetta',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            price: '5.99',
            image: bruschetta,
            alt:'A picture of a plate of four bruschettas. The bruschetta is made up of bread, tomatoes, and a few other ingredients.'
        },
        {
            id: 'lemon-dessert',
            name: 'Lemon Dessert',
            description:"This comes straight from grandma's recipe Booking, every last ingredient has been sourced and is as authentic as can be imagined",
            price: '5.00',
            image: lemonDessert,
            alt: 'A picture of a lemon dessert with a fork in the foreground. The dessert is made up of a lemon, sugar, and a few other ingredients.'
        }
    ]

    const handleOrderClick = () => {
        navigate('/order-online');
    };

    return (
        <section className="specials-container">
            <div className="specials__header">
                <h2>Specials</h2>
                <button className="btn btn--primary" onClick={handleOrderClick}>
                    Online Menu
                </button>
            </div>
            <div className="specials__cards-container">
                {meals.map((meal) => (
                    <div className="card" key={meal.id}>
                        <div className="img-container card__img">
                            <img src={meal.image} className='img' alt={meal.alt} />
                        </div>
                        <div className="card__content">
                            <div className='card__header'>
                                <h3 className='card__title'>{meal.name}</h3>
                                <span className="card__highlight" aria-label='Price of the meal.'>$ {meal.price}</span>
                            </div>
                            <p className="card__text">{meal.description}</p>
                            <Link to='/order-online' className='card__footer' aria-label='Click to order one of our meals.'>
                                Order a delivery
                                <img src={scooter} loading='lazy' alt="scooter" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Specials;