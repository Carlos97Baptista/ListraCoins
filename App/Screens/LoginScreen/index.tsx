import { View, Text } from "react-native";
import styled from "styled-components/native";
import { WalletSvg } from "../../Assets/Svg/wallet";
import { ContentBody } from "../../Components/ContentBody";
import { Tilte } from "../../Components/Tilte";
import { ListraInput } from "../../Components/ListraInput";
import { UserSvg } from "../../Assets/Svg/user";
import { LockSvg } from "../../Assets/Svg/lock";
import { useForm, Controller } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import { Body } from "../../Components/Body";
import { RFValue } from "react-native-responsive-fontsize";

export function LoginScreen() {

    const { siginIn } = useContext(AuthContext)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })
    const onSubmit = (data: any) => {
        siginIn(data)
    }

    return (
        <Body style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
                <WalletSvg color="white" size="96" />
                <TagLogo>
                    <Tilte>Listra Coins</Tilte>
                </TagLogo>
            </View>

            <ContentBody>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginVertical: RFValue(16) }}>
                    <Tilte size={32} color="#000" >Login</Tilte>
                </View>
                <View style={{ width: "100%", height: "60%", justifyContent: "space-around", paddingHorizontal: RFValue(16) }}>

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <ListraInput isError={errors.email} onBlur={onBlur} placeHolder="E-mail" value={value} handleChange={onChange} icon={<UserSvg />} isPassword={false} />)}
                        name="email"
                    />

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <ListraInput isPassword isError={errors.password} onBlur={onBlur} placeHolder="Senha" value={value} handleChange={onChange} icon={<LockSvg />} />)}
                        name="password"
                    />

                    <View style={{ width: "100%", alignItems: "center" }}>
                        <LoginBtn onPress={handleSubmit(onSubmit)}>
                            <Tilte>Entrar</Tilte>
                        </LoginBtn>
                    </View>
                </View>
                <View style={{ marginTop: RFValue(20), width: "100%", justifyContent: "center", alignItems: "center" }}><Text style={{ color: "#9B9B9B" }}>Registrar-se | Resetar senha</Text></View>
            </ContentBody>
        </Body >
    );
}


const LoginBtn = styled.TouchableOpacity`
    background-color: #7B22D3;
    border-radius: 50px;
    padding: 8px 16px;
    width: 30%;
    justify-content: center;
    align-items: center;
`
const TagLogo = styled.View`
    padding:  8px 16px;
    border-radius: 24px;
    background-color: #313131;

`
