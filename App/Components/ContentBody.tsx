import styled from "styled-components/native";


export const ContentBody = styled.View<{ heigth?: string }>`
    background-color: #F9F9F9;
    z-index: 10;
    width: 100%;
    height: ${(props) => props.heigth ? props.heigth : '65%'};
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
`