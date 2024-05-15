import { ActivityIndicator, Image, ImageSourcePropType, View } from "react-native"
import styled from "styled-components/native"
import { CartSvg } from "../Assets/Svg/Cart"
import DropShadow from "react-native-drop-shadow";
import { NumericFormat } from "react-number-format";
import { RFValue } from "react-native-responsive-fontsize";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/auth";
import { CheckSvg } from "../Assets/Svg/Check";

export const ProductCard = ({ id, title, desc, price, qnt, image, category, date }: { id: number, title: string, desc: string, price: number, qnt: number, image: ImageSourcePropType, category: string, date: string }) => {

    const { user, handlePoints, points } = useContext(AuthContext)
    const [isLoading, setLoading] = useState(false)
    const [check, setCheck] = useState(false)

    const handlePurchare = () => {
        setLoading(true)
        if (points < price) {
            global.toast?.show(JSON.stringify(`Listra coins insuficientes`))
            return
        }
        handlePoints(points - price)

        setTimeout(() => {
            setLoading(false)
            setCheck(true)
        }, 1500)
    }
    return (
        <DropShadow
            style={{
                borderRadius: RFValue(16),
                width: RFValue(140),
                height: RFValue(210),
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.4,
                shadowRadius: RFValue(5),
                margin: RFValue(8)
            }}
        ><Card>
                <Image style={{ height: RFValue(105), width: RFValue(140), borderTopRightRadius: RFValue(16), borderTopLeftRadius: RFValue(16) }} source={image} />
                <CardBody >
                    <View>
                        <CardTitle>{title}</CardTitle>
                        <Quantity>{qnt} unidades</Quantity>
                    </View>
                    <View>
                        <PointsText bolder={false}>Lc</PointsText>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "flex-end", }}>
                            <PointsText bolder={true}>
                                <NumericFormat value={price} displayType={'text'} decimalSeparator="," thousandSeparator={'.'} prefix={''} />
                            </PointsText>
                            <PurshareBtn onPress={() => handlePurchare()}>{isLoading ? <ActivityIndicator color={'#FFF'} /> : check ? <CheckSvg /> : <CartSvg />}</PurshareBtn>
                        </View>
                    </View>
                </CardBody>
            </Card></DropShadow>
    )

}

const Card = styled.View`
    width: "100%";
    height: "100%";
    border-radius: ${RFValue(16)}px;
`
const CardBody = styled.View`
    border-bottom-right-radius: ${RFValue(16)}px;
    border-bottom-left-radius: ${RFValue(16)}px;
    padding: ${RFValue(16)}px;
    justify-content: space-between;
    background-color: #FFF;
    height: ${RFValue(105)}px;
`
const CardTitle = styled.Text`
    font-size: ${RFValue(12)}px;
    font-weight: 600;
    color: #000;
`
const Quantity = styled.Text`
    font-size: ${RFValue(8)}px;
    color: #9B9B9B;
`
const PointsText = styled.Text<{ bolder: boolean }>`
    font-size: ${props => props.bolder ? RFValue(18) : RFValue(12)}px;
    color: #7B22D3;
    font-weight: ${props => props.bolder ? 700 : 400};
`
const PurshareBtn = styled.TouchableOpacity`
    background-color: #7B22D3;
    padding: ${RFValue(4)}px;
    border-radius: ${RFValue(6)}px;
`