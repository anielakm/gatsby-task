import styled from 'styled-components'

const GridItemsContainer = styled.div`

    max-width:1200px;
    display:flex;
    flex-wrap:wrap;
    margin:auto;

    .border{
        background-image:linear-gradient(#E20F83,#1CA8F3);
        margin:2%;
        width:21%;
        visibility:hidden;
        border-radius:5px;

        &:hover{
           visibility:visible;
        }

        .item{
            border-radius:5px;
            background-color:#fafafa;
            padding:15% 0;
            margin:3px;
            width:98%;
            height:98%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            visibility:visible;


            img{
            max-width: 200px;
            height:auto;
            }
        }

        @media(max-width:767px){
            width:100%;
            margin:10%;
        }
    }
`;


export default GridItemsContainer;