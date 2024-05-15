import styled from "styled-components/native";

export const Tilte = styled.Text<{ color?: string, size?: number }>`
    font-size: ${(props) => props.size ? props.size : 24}px;
    font-weight: 700;
    color: ${(props) => props.color ? props.color : "#FFF"};
`