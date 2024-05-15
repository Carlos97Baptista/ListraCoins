import { TouchableOpacity, View, Text } from "react-native";
import { HomeSvg } from "../Assets/Svg/home";
import { StoreSvg } from "../Assets/Svg/store";
import { FilledUserSvg } from "../Assets/Svg/filledUser";
import DropShadow from "react-native-drop-shadow";


export const TabComponent = ({ state, descriptors, navigation }) => {
    const getData = ({ label, isFocused }: { label: string, isFocused: boolean }) => {
        if (label === 'Home') {
            return <HomeSvg color={isFocused ? '#673ab7' : '#8D8D8D'} />
        } else if (label === 'Store') {
            return <StoreSvg color={isFocused ? '#673ab7' : '#8D8D8D'} />
        } else if (label === "User") {
            return <FilledUserSvg color={isFocused ? '#673ab7' : '#8D8D8D'} />

        } else {
            return <FilledUserSvg color={isFocused ? '#673ab7' : '#8D8D8D'} />
        }
    }
    return <View style={{
        width: "100%", backgroundColor: "#F9F9F9", borderWidth: 0, position: "absolute",
        bottom: 0,
    }}><DropShadow
        style={{
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            borderWidth: 0,
            width: "100%",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5,
        }}
    ><View style={{ backgroundColor: "#FFF", borderTopRightRadius: 50, borderTopLeftRadius: 50, width: "100%", flexDirection: 'row', justifyContent: "space-around", alignItems: "center", paddingHorizontal: 16, paddingVertical: 24 }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };


                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                        >
                            {getData({ label, isFocused })}

                        </TouchableOpacity>
                    );
                })}
            </View></DropShadow></View>
}