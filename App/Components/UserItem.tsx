import { View, Text } from "react-native"
import DropShadow from "react-native-drop-shadow"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { ChevronSvg } from "../Assets/Svg/Chevron"
import { ReactElement } from "react"


export const UserItem = ({ svg, text }: { svg: ReactElement, text: string }) => {
    return <DropShadow
        style={{
            borderRadius: RFValue(16),
            width: '90%',
            height: RFValue(80),
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.4,
            shadowRadius: RFValue(15),
            margin: RFValue(8)
        }}
    ><CardContainer>
            <View style={{ width: '100%', flexDirection: 'row', height: '100%' }}>
                <View style={{ width: '20%', height: '100%', justifyContent: "center", alignItems: "center", }}>
                    {svg}
                </View>
                <View style={{ width: '70%', height: '100%', justifyContent: "center", alignItems: "flex-start", }}>
                    <Text style={{ fontSize: RFValue(14), fontWeight: 600 }}>{text}</Text>

                </View>
                <View style={{ width: '10%', height: '100%', justifyContent: "center", alignItems: "center", }}>
                    <ChevronSvg />

                </View>
            </View>
        </CardContainer>
    </DropShadow>
}

const CardContainer = styled.TouchableOpacity`
padding: ${RFValue(16)}px;
height: 100%;
`