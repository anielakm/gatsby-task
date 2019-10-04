import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import BackgroundImage from '../images/header.png'
import BusinessCard from '../components/BusinessCard/BusinessCard'
import Button from '../components/Button/Button'
import H2 from '../components/H2/H2'

const SliderStyled = styled(Slider)`

background-image:url(${BackgroundImage});
background-position:center;
background-size:cover;
height:500px;

.desktop{

    display:block;

    @media(max-width:767px){
        display:none;
    }

    .slider-container{

        display: flex;
        align-items: center;

        .slider-left, .slider-right{
            width:50%;
        }

        .slider-left{
        min-height:500px;
        position:relative;

            #second-slide{ 
            top: 30%;
            }
       
            .slider-cards{
                position:absolute;
                top:25%;
                right:10%;

            div{float:right;
            
            position:relative;
            text-align:right;}

            div:nth-child(2){
                margin:-12% 3%;
            }
        }
    }

    }
    
}

.mobile{

    display:none;

    @media(max-width:767px){
        
        display:block;

        .slick-arrow{display:none !important}

    }

    .slider-container{
  
        text-align:center;
  
        .slider-cards{

            #second{
                margin:10%;
            }

            #first{
                margin: 2% 35%;
                position: relative;
                z-index: -10;
                float:left;
            }  
        }
    }
}

`;


class Header extends Component {

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: true
        };

        return (<>
            <SliderStyled {...settings}>
                <div>

                    <div className="desktop">
                        <div className="slider-container">
                            <div className="slider-left">
                                <div className="slider-cards">

                                    <BusinessCard top>
                                        <p>Wizytówka <span className="small">85x55mm</span></p>
                                        <p><span className="small">250 szt.</span> <br /> 57,99 zł</p>
                                    </BusinessCard>

                                    <BusinessCard>
                                        <p>Wizytówka <span className="small">85x55mm</span></p>
                                        <p><span className="small">250 szt.</span> <br /> 57,99 zł</p>
                                    </BusinessCard>

                                </div>
                            </div>
                            <div className="slider-right">
                                <div className="slider-text">
                                    <H2>Ciekawy <span className="big">slogan <br /> reklamowy</span></H2>
                                    <p>Otwieramy się na niskie nakłady! Niższe ceny małych zamówień!</p>
                                    <Button>Więcej informacji</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile">
                        <div className="slider-container">
                            <div className="slider-cards">

                                <H2 mobile>Ciekawy <span className="big">slogan <br /> reklamowy</span></H2>

                                <BusinessCard mobile id="first">
                                    <p className="text-top">Wizytówka <span className="small">90x50mm</span></p>
                                    <p className="text-bottom"><span className="small">250 szt.</span> <br /> 57,99 zł</p>
                                </BusinessCard>
                                <BusinessCard top mobile id="second">
                                    <p className="text-top">Wizytówka <span className="small">85x55mm</span></p>
                                    <p className="text-bottom"><span className="small">250 szt.</span> <br /> 57,99 zł</p>
                                </BusinessCard>

                            </div>
                            <p>Otwieramy się na niskie nakłady! Niższe ceny małych zamówień!</p>
                            <Button >Więcej informacji</Button>
                        </div>
                    </div>

                </div>


                <div>
                    <div className="desktop">

                        <div className="slider-container">
                            <div className="slider-left">
                                <div className="slider-cards" id="second-slide">

                                    <BusinessCard top >
                                        <p>Wizytówka <span className="small">85x55mm</span></p>
                                        <p><span className="small">250 szt.</span> <br /> 57,99 zł</p>
                                    </BusinessCard>

                                </div>

                            </div>
                            <div className="slider-right">
                                <div className="slider-text">
                                    <H2>Ciekawszy <span className="big">slogan <br /> reklamowy</span></H2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    <Button>Więcej informacji</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile">

                        <div className="slider-container">
                            <div className="slider-cards">

                                <H2 mobile>Ciekawszy <span className="big">slogan <br /> reklamowy</span></H2>

                                <BusinessCard mobile id="first">
                                    <p className="text-top">Wizytówka <span className="small">90x50mm</span></p>
                                    <p className="text-bottom"><span className="small">250 szt.</span> <br /> 57,99 zł</p>
                                </BusinessCard>
                                <BusinessCard top mobile id="second">
                                    <p className="text-top">Wizytówka <span className="small">85x55mm</span></p>
                                    <p className="text-bottom"><span className="small">250 szt.</span> <br /> 57,99 zł</p>
                                </BusinessCard>

                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <Button >Więcej informacji</Button>
                        </div>
                    </div>
                </div>


            </SliderStyled>
        </>);

    }

}

export default Header;