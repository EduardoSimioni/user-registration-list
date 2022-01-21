import styled from "styled-components";

export const Button = styled.button`
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    width: 342px;
    height: 74px;
    border: none;
    color: #FFFFFF;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 130px;
    text-decoration: none;

    &:hover{
        opacity: 0.8;
    }
    
    &:active{
        opacity: 0.5;
    }

    ${props => props.isBack && `
        background: transparent;
        border: 1px solid #FFFFFF;
        img{
        transform: rotateY(180deg);
        }
        `}
`;
