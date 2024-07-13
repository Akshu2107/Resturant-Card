import React from 'react'

const Menucard = ({ menuData }) => {
    return (
        <div>
            <section className='main-card--cointainer'>
                {menuData.map((curElem) => {
                    const { id, name, category, image, description } = curElem;
                    return (
                        <div>
                            <div className='card-container' key={id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{id}</span>
                                        <span className='card-auther subtle'>{category}</span>
                                        <h2 className='card-title'>{name}</h2>
                                        <span className='card-description subtle'>{description}</span>
                                        <div className='card-read'>Read</div>
                                        <img src={image} alt="images" className='card-media'></img>
                                        <span className='card-tag subtle'>Order Now</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </section>

        </div>
    )
}

export default Menucard;
