'use client'
import React from 'react';
import Slider from "react-slick";
import img1 from '../../assets/IMG_1186.jpg'
import img2 from '../../assets/img_viber_2024-02-12_11-40-19-814.jpg'
import img3 from '../../assets/Slider/24c85e8d-b73b-480f-aacf-a207bcb1afb7 (1) 2.jpg'
import img4 from '../../assets/Slider/IMG_0621 2.jpg'
import img5 from '../../assets/Slider/IMG_20150122_192107 2.jpg'
import img6 from '../../assets/Slider/слайдер.jpg'
import img7 from '../../assets/Slider/цыбулька режим работы 2.jpg'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from "../Arrows/Arrows";
import styles from './slider.module.css'

export const SimpleSlider = () => {
    let settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    };
    const image_slider_arr = [
        {id: 0, image: img1, alt: 'Каритнка_1'},
        {id: 1, image: img2, alt: 'Каритнка_2'},
        {id: 2, image: img3, alt: 'Каритнка_3'},
        {id: 3, image: img4, alt: 'Каритнка_4'},
        {id: 4, image: img5, alt: 'Каритнка_5'},
        {id: 5, image: img6, alt: 'Каритнка_6'},
        {id: 6, image: img7, alt: 'Каритнка_7'},
    ]

    return (
        <div className={styles.container}>
            <Slider {...settings}>
                {image_slider_arr.map((item) => (
                    <div key={item.id}>
                        <Image src={item.image} alt={item.alt} width={600} height={350}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}