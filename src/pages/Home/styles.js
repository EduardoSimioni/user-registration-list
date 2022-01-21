import styled from 'styled-components'
import Background from '../../assets/background1.svg' 

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
`;

export const Image = styled.img `
    margin-top: 30px;
`;

export const InputLabel = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 25px;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
    margin-bottom: 34px;
`;

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
`;

