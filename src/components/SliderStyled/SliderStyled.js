import styled from 'styled-components'
import Slider from "react-slick";
import BackgroundImage from '../../images/header.png'

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


export default SliderStyled;