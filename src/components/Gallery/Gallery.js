import React from 'react';
import './Gallery.css';
import image1 from '../../images/image-1.webp';
import image2 from '../../images/image-2.webp';
import image3 from '../../images/image-3.webp';
import image4 from '../../images/image-4.webp';
import image5 from '../../images/image-5.webp';
import image6 from '../../images/image-6.webp';
import image7 from '../../images/image-7.webp';
import image8 from '../../images/image-8.webp';
import image9 from '../../images/image-9.webp';
import image10 from '../../images/image-10.jpeg';
import image11 from '../../images/image-11.jpeg';

const Gallery = () => {
    return (
        <div>
            <div>
                <h2>Delete</h2>
            </div>
        <div className='gallery-img'>
            <img  src={image1} alt=""/>
            <img  src={image2} alt=""/>
            <img  src={image3} alt=""/>
            <img  src={image4} alt=""/>
            <img  src={image5} alt=""/>
            <img  src={image6} alt=""/>
            <img  src={image7} alt=""/>
            <img  src={image8} alt=""/>
            <img  src={image9} alt=""/>
            <img  src={image10} alt=""/>
            <img  src={image11} alt=""/> 

        </div>
        </div>
    );
};

export default Gallery;