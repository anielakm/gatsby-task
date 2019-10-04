import styled from 'styled-components'

const BusinessCard = styled.div`

width:${props => props.top ? '241px' : '255px'};
height:${props => props.top ? '156px' : '142px'};
background-image:linear-gradient(to right, #E20F83,#1CA8F3);
box-shadow:2px 2px 3px rgba(0,0,0,.05);
border-radius:10px;

transform: rotate(-15deg);
-moz-transform: rotate(-15deg);
-webkit-transform: rotate(-15deg);

color:white;
font-family:'lato';
font-weight:500;
position:inherit;
z-index:${props => props.top ? '9' : '5'};

    p{
        position:absolute;
        bottom:10px;
        right:10px;
        font-size:20px;
        margin:0;            
    }

    p:nth-child(1){
        right:70px;
        bottom:30px;
    }
                    
    .small{
      font-size:10px;
     }

     @media(max-width:767px){
        width:${props => props.top ? '180px' : '191px'};
        height:${props => props.top ? '117px' : '106px'};
       
       p{font-size:14px;} 
       .text-top{ top:25px;}
    }


   
`

export default BusinessCard;