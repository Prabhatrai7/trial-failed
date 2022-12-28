import'./Services.css';

import babycare from '../images/babycare.jpg';
import nutrition from '../images/nutrition.jpg';
import womencare from '../images/womencare.png';
import personalcare from '../images/personal-care.jpg'
import ayurveda from '../images/ayurveda.jpg';

const Services = () => {
    return (
        <div className='services-container' id='services'>
            <div className='header-start'>SERV<div className='header-end'>ICES</div></div>
            <div className='circle-container'>
                <div className='circle'>
                    <div className='image'>
                        <img src={babycare} alt='babycare' />
                    </div>
                    <div className='products-info'>
                        <p>Baby Care</p>
                    </div>
                </div>
                <div className='circle'>
                    <div className='image'>
                        <img src={nutrition} alt='babycare' />
                    </div>
                    <div className='products-info'>
                        <p>Nutrition</p>
                    </div>
                </div>
                <div className='circle'>
                    <div className='image'>
                        <img src={womencare} alt='babycare' />
                    </div>
                    <div className='products-info'>
                        <p>Women Care</p>
                    </div>
                </div>
                <div className='circle'>
                    <div className='image'>
                        <img src={personalcare} alt='babycare' />
                    </div>
                    <div className='products-info'>
                        <p>Personal Care</p>
                    </div>
                </div>
                <div className='circle'>
                    <div className='image'>
                        <img src={ayurveda} alt='babycare' />
                    </div>
                    <div className='products-info'>
                        <p>Ayurveda</p>
                    </div>
                </div>
            </div>

            <div className='card-container'>
                <div className='card'>
                    <h3>Service Heading</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                        consequatur necessitatibus eaque.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                        consequatur necessitatibus eaque.
                    </p>
                </div>
                <div className='card'>
                    <h3>Service Heading</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                        consequatur necessitatibus eaque.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                        consequatur necessitatibus eaque.
                    </p>
                </div>
                <div className='card'>
                    <h3>Service Heading</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                        consequatur necessitatibus eaque.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                        consequatur necessitatibus eaque.
                    </p>
                </div>
                <div className='card'>
                    <h3>Service Heading</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                        consequatur necessitatibus eaque.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                        consequatur necessitatibus eaque.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services;