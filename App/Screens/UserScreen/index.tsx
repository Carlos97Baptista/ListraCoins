import { View, Text, Image, ImageBackground } from "react-native"
import { Body } from "../../Components/Body"
import { ContentBody } from "../../Components/ContentBody"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { Tilte } from "../../Components/Tilte"
import { CameraSvg } from "../../Assets/Svg/Camera"
import { UserItem } from "../../Components/UserItem"
import { ProfileSvg } from "../../Assets/Svg/Profile"
import { DetailsSvg } from "../../Assets/Svg/Details"
import { HistoricSvg } from "../../Assets/Svg/Historic"
import { useContext } from "react"
import { AuthContext } from "../../Contexts/auth"


export const UserScreen = () => {
    const { user } = useContext(AuthContext)

    return (
        <Body>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: RFValue(16) }}>
                <View style={{ width: '100%', justifyContent: "center", alignItems: 'center', }}>
                    <ImageBackground imageStyle={{ borderRadius: RFValue(20) }} style={{ width: RFValue(80), height: RFValue(80), }} source={require("../../Assets/images/profile.jpeg")} >
                        <ProfilePhoto>

                        </ProfilePhoto>
                    </ImageBackground>
                    <CameraContainer><CameraSvg /></CameraContainer>
                    <NameText>{user.name}</NameText>
                    <EditBtn ><TextBtn>Editar Perfil</TextBtn></EditBtn>
                </View>
            </View>
            <ContentBody heigth="70%">
                <View style={{ width: "100%", justifyContent: 'space-around', alignItems: "center", marginTop: RFValue(30) }}>
                    <UserItem svg={<ProfileSvg />} text={"Detalhes do Perfil"} />
                    <UserItem svg={<DetailsSvg />} text={"Detalhes da Conta"} />
                    <UserItem svg={<HistoricSvg />} text={"Histórico"} />
                </View>
            </ContentBody>
        </Body>
    )
}

const ProfilePhoto = styled.View`
width: ${RFValue(80)}px;
height: ${RFValue(80)}px;
border-radius: ${RFValue(20)}px;
padding: ${RFValue(2)}px;
background-color: transparent;
border-color: #FFF;
border-width: ${RFValue(4)}px;
opacity: 0.3;

`
const CameraContainer = styled.View`
    background-color: #FFF;
    padding: ${RFValue(4)}px;
    border-radius: ${RFValue(15)}px;
    margin-top: -${RFValue(15)}px;
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
    justify-content: center;
    align-items: center;
`
const EditBtn = styled.TouchableOpacity`
    padding: ${RFValue(8)}px;
    background-color: #313131;
    border-radius: ${RFValue(8)}px;
    margin: ${RFValue(8)}px;
`
const TextBtn = styled.Text`
    font-size: ${RFValue(12)}px;
    font-weight: 600;
    color: #FFF;
`
const NameText = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: 600;
    color: #FFF;
    margin-top: ${RFValue(8)}px;
`