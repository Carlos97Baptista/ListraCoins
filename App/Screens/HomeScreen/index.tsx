import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { Body } from "../../Components/Body"
import { ContentBody } from "../../Components/ContentBody"
import styled from "styled-components/native"
import DropShadow from "react-native-drop-shadow"
import { WalletSvg } from "../../Assets/Svg/wallet"
import { Wallet2Svg } from "../../Assets/Svg/wallet2"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Contexts/auth"
import { NumericFormat } from "react-number-format"
import { ShopBag } from "../../Assets/Svg/shopBag"
import { Tilte } from "../../Components/Tilte"
import { BellSvg } from "../../Assets/Svg/bell"
import { Banner } from "../../Components/Banner"
import { ProductCard } from "../../Components/ProductCard"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native"


const Banners = [
    {
        name: "ACAPULCO",
        descriprion: "Guerrero - México",
        value: 50000,
        svg: <Image style={{
            height: RFValue(60), width: RFValue(60),
        }} source={require("../../Assets/images/travel.png")} />
    },
    {
        name: "Buzios",
        descriprion: "Rio de Janeiro - Brasil",
        value: 20000,
        svg: <Image style={{
            height: RFValue(60), width: RFValue(60),
        }} source={require("../../Assets/images/travel.png")} />
    },
    {
        name: "Barcelona",
        descriprion: "Espanha",
        value: 70000,
        svg: <Image style={{
            height: RFValue(60), width: RFValue(60),
        }} source={require("../../Assets/images/travel.png")} />
    },
]
export const HomeScreen = () => {
    const navigation = useNavigation();
    const { user, handlePoints, points } = useContext(AuthContext)
    // const [points, setPoints] = useState(0)
    useEffect(() => {
        // setPoints(user.points)
    }, [user])
    return (
        <Body>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: RFValue(16) }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: RFValue(16) }}>
                    <Image style={{
                        height: RFValue(50), width: RFValue(50), borderRadius: RFValue(26), borderColor: '#FFF',
                        borderWidth: 2
                    }} source={require("../../Assets/images/profile.jpeg")} />
                    <TagLogo>
                        <Tilte size={RFValue(12)}>Listra Coins</Tilte>
                    </TagLogo>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: RFValue(16), marginTop: RFValue(8) }}>
                    <Text style={{ color: '#FFF', fontSize: RFValue(14) }}>Olá,<Text style={{ fontWeight: 600 }}>{user.name}</Text></Text>
                    <BellSvg />
                </View>
            </View>
            <ContentBody heigth="75%">
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <DropShadow
                        style={{
                            borderRadius: 15,
                            width: "80%",
                            height: RFValue(60),
                            position: "absolute",
                            top: -40,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: RFValue(5),
                            },
                            shadowOpacity: 0.2,
                            shadowRadius: RFValue(5),
                        }}
                    > <WalletValues>
                            <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
                                <Wallet2Svg />
                                <Text style={{ marginLeft: RFValue(4), fontSize: RFValue(16), fontWeight: 600 }}>
                                    <NumericFormat value={points} displayType={'text'} decimalSeparator="," thousandSeparator={'.'} prefix={'Lc '} />

                                </Text>
                            </View>
                            <View style={{ height: RFValue(80), width: 1, backgroundColor: "#313131", opacity: 0.2, marginHorizontal: RFValue(8) }} />
                            <TouchableOpacity onPress={() => navigation.navigate('Store')} style={{ flexDirection: "row", alignItems: "center" }}><ShopBag /> <Text style={{ color: "#000", fontSize: RFValue(16), fontWeight: 600, marginLeft: RFValue(8) }}>Shop</Text></TouchableOpacity>
                        </WalletValues> </DropShadow>
                </View>
                <View style={{ marginTop: RFValue(50) }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={Banners}
                        horizontal
                        renderItem={({ item }) => <Banner name={item.name} description={item.descriprion} value={item.value} svg={item.svg} />} />

                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: RFValue(10) }}>
                    <ProductCard id={0} title={"Notebook L24"} desc={""} price={4000} qnt={40} image={require('../../Assets/images/note.png')} category={""} date={""} />
                    <ProductCard id={1} title={"Relógio DaHora"} desc={""} price={800} qnt={20} image={require('../../Assets/images/watch.png')} category={""} date={""} />
                </View>
                <View style={{ width: '100%', justifyContent: "center", alignItems: "center", marginTop: RFValue(16) }}>
                    <MoreBtn onPress={() => navigation.navigate('Store')}>
                        <Text style={{ color: "#FFF", fontSize: RFValue(12), fontWeight: 600 }}>Ver Todos os Produtos</Text>
                    </MoreBtn>
                </View>
            </ContentBody>
        </Body>)
}
const WalletValues = styled.View`
    border-radius: ${(RFValue(15))}px; 
    padding:  ${(RFValue(8))}px;
    width: 100%;
    height: 100%;
    background-color: #FFF;
    align-items: center;
    flex-direction: row;
`
const TagLogo = styled.View`
    padding:   ${(RFValue(4))}px  ${(RFValue(8))}px;
    border-radius:  ${(RFValue(24))}px;
    height:  ${(RFValue(40))}px;
    background-color: #313131;
    justify-content: center;
    align-items: center;

`
const MoreBtn = styled.TouchableOpacity`
    padding:  ${(RFValue(8))}px ${(RFValue(16))}px ;
    background-color: #7B22D3;
    border-radius: ${RFValue(16)}px;
    justify-content: center;
    align-items: center;
`