import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { Body } from "../../Components/Body"
import { ContentBody } from "../../Components/ContentBody"
import { ProductCard } from "../../Components/ProductCard";
import { RFValue } from "react-native-responsive-fontsize";
import { Tilte } from "../../Components/Tilte";
import { ArrowSvg } from "../../Assets/Svg/Arrow";
import { useNavigation } from "@react-navigation/native";

const ProductList = [
    {
        id: 1,
        name: "Notebook L24",
        desc: "",
        price: 4000,
        qnt: 40,
        image: require('../../Assets/images/note.png'),
        category: "",
        date: ""
    },
    {
        id: 2,
        name: "Relógio DaHora",
        desc: "",
        price: 800,
        qnt: 20,
        image: require('../../Assets/images/watch.png'),
        category: "",
        date: ""
    },
    {
        id: 3,
        name: "Camisa Roxa",
        desc: "",
        price: 80,
        qnt: 40,
        image: require('../../Assets/images/Tshirt.png'),
        category: "",
        date: ""
    },
    {
        id: 4,
        name: "Óculos VR",
        desc: "",
        price: 2000,
        qnt: 30,
        image: require('../../Assets/images/glasses.png'),
        category: "",
        date: ""
    },
    {
        id: 5,
        name: "Notebook L24",
        desc: "",
        price: 4000,
        qnt: 40,
        image: require('../../Assets/images/note.png'),
        category: "",
        date: ""
    },
    {
        id: 6,
        name: "Relógio DaHora",
        desc: "",
        price: 800,
        qnt: 20,
        image: require('../../Assets/images/watch.png'),
        category: "",
        date: ""
    },
    {
        id: 7,
        name: "Camisa Roxa",
        desc: "",
        price: 80,
        qnt: 40,
        image: require('../../Assets/images/Tshirt.png'),
        category: "",
        date: ""
    },
    {
        id: 8,
        name: "Óculos VR",
        desc: "",
        price: 2000,
        qnt: 30,
        image: require('../../Assets/images/glasses.png'),
        category: "",
        date: ""
    },

]
export const StoreScreen = () => {
    const navigation = useNavigation()
    return <Body>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', paddingTop: RFValue(16), paddingLeft: RFValue(8) }}>
            <ArrowSvg /><Text style={{ marginLeft: RFValue(4), color: '#FFF', fontSize: RFValue(12) }}>Voltar</Text>
        </TouchableOpacity>
        <ContentBody heigth="90%">
            <View style={{ padding: RFValue(16) }}><Tilte color="#000">Shop</Tilte></View>
            <View style={{ width: '100%', height: "80%", justifyContent: "center", alignItems: "center", flex: 1, paddingHorizontal: RFValue(8) }}>
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
                    ListFooterComponent={() => <View style={{ height: RFValue(60) }}></View>}
                    data={ProductList}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <ProductCard id={item.id} name={item.name} desc={""} price={item.price} qnt={item.qnt} image={item.image} category={item.category} date={item.date} />
                        );
                    }}
                />
            </View>
        </ContentBody>
    </Body>
}