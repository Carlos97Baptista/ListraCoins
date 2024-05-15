import { ReactElement } from "react";
import styled from "styled-components/native";
import DropShadow from "react-native-drop-shadow";
import { View } from "react-native";
import { FieldError } from "react-hook-form/dist/types";



interface ListraInputTypes {
    value: string,
    handleChange: Function,
    icon?: ReactElement,
    placeHolder: string,
    onBlur?: Function,
    isError?: FieldError,
    isPassword: boolean
}



export const ListraInput = ({ value, handleChange, icon, placeHolder, onBlur, isError, isPassword = false }: ListraInputTypes) => {
    return <View style={{ height: 80 }}> <DropShadow
        style={{
            borderRadius: 24,
            width: "100%",
            flex: 1,
            shadowColor: isError ? "red" : "#000",
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: isError ? 0.8 : 0.2,
            shadowRadius: 15,
        }}
    >
        <InputContainer>
            {icon ? icon : null}
            <Input style={{ outlineStyle: 'none' }} secureTextEntry={isPassword} placeholder={placeHolder} placeholderTextColor={"#000"} value={value} onChangeText={handleChange} />
        </InputContainer>
    </DropShadow></View>
}

const InputContainer = styled.View`
    border-radius: 50px;
    padding: 8px 16px;
    background-color: #FFF;
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
flex-direction: row;
`
const Input = styled.TextInput`
    border-width: 0;
    height: 60px;
    background-color: transparent;
    color: #000;
    flex: 1;
    margin-left: 8px;
    font-weight: 700;
    font-size: 18px;
`