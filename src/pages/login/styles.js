import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`;

export const Content = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #2B3036;
    max-width: 350px;
    padding: 20px;
    border-radius: 20px;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color: #d97e4a;
`;

export const LabelSignup = styled.label`
    font-size: 16px;
    border-radius: 20px;
    color: #d9b68b;
`;

export const labelError = styled.label`
    font-size: 14px;
    border-radius: 20px;
    color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #d97e4a;
    }
`;