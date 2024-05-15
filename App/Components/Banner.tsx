import { ReactElement } from "react";
import { View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { NumericFormat } from "react-number-format";
import styled from "styled-components/native";


export const Banner = ({ name, description, value, svg, }: { name: string, description: string, value: number, svg: ReactElement }) => {

    return <BannerBody>
        {svg} <View style={{ flex: 1, marginLeft: RFValue(12), justifyContent: "space-around" }}>
            <Text style={{ fontSize: RFValue(14), color: "#FFF" }}>Pacote <Text style={{ fontWeight: 600 }}>{name}</Text></Text>
            <Text style={{ fontSize: RFValue(8), color: "#FFF" }}>{description}</Text>
            <Text style={{ fontSize: RFValue(12), color: "#FFF" }}><Text style={{ fontWeight: 900, fontSize: RFValue(16) }}>{<NumericFormat value={value} displayType={'text'} decimalSeparator="," thousandSeparator={'.'} prefix={'Lc '} />
            }</Text></Text>

        </View>
    </BannerBody>
}

const BannerBody = styled.TouchableOpacity`
    background-color: #7B22D3;
    width: ${RFValue(240)}px;
    height: ${RFValue(100)}px;
    border-radius: ${RFValue(30)}px;
    padding:${RFValue(16)}px;
    margin: ${RFValue(8)}px;
    flex-direction: row;
`