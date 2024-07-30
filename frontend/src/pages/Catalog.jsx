import React from 'react';
import AllProducts from '../components/AllProducts.jsx';
import '../assets/css/views/catalog.css';
import catalogConfig from '../../../backend/models/site/navFilterColection.json';
import Footer from '../components/Footer.jsx';




const Catalog = () => {
    return (
        <div className='main__products'>
            <div className='back-view-product__container'>
                <img src='https://cimejal.com.mx/blog/wp-content/uploads/2024/01/muebles-2024.jpeg' alt='material' />

            </div>

            <div className='catalog-title__container'>
                <p className='catalog-title__text'>{catalogConfig.title}</p>
            </div>

            <div className='nav__filter'>
                <div className='catalog-nav'>
                    <div className='catalog-nav__list'>
                        {catalogConfig.navOptions.map((navOption, index) => (
                            <React.Fragment key={index}>
                                <div className='catalog-nav__item'>
                                    <select className='catalog-nav__select'>
                                        <option value=''>{navOption.section}</option>
                                        {navOption.options.map((option, optionIndex) => (
                                            <option key={optionIndex} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                                {index < catalogConfig.navOptions.length - 1 && <span className="square-divider"></span>}
                            </React.Fragment>
                        ))}
                        <span className="square-divider"></span>
                        <div className='catalog-search__item'>
                            <div className='search__container'>
                                <input className='catalog-search__input' placeholder={catalogConfig.searchPlaceholder}></input>
                                <img src="https://cimejal.com.mx/blog/wp-content/uploads/2024/01/muebles-2024.jpeg" alt="Buscar" className="search-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='catalog-colection__container'></div>
            <AllProducts/>

            <Footer/>

            
        </div>
    );
}

export default Catalog;