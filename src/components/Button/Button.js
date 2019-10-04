import styled from 'styled-components'

const Button = styled.button`
   margin-top:30px;
    background-color: #E20F83;
    border:none;
    color:white;
    padding:10px 20px;

    transition: opacity .5s;


    &:hover{
    cursor: pointer;
    opacity:.8;
}

                  
`;

export default Button;