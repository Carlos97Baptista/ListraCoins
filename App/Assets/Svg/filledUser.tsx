
import { Circle, Path, Svg } from "react-native-svg"

export const FilledUserSvg = ({ color }: { color: string }) => {
    return <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
        <Path d="M9.77985 9.95703C12.2828 9.95703 14.2916 7.75488 14.2916 5.01562C14.2916 2.34082 12.272 0.192383 9.77985 0.192383C7.2984 0.192383 5.25739 2.3623 5.26813 5.02637C5.27887 7.76562 7.27692 9.95703 9.77985 9.95703ZM9.77985 8.7002C8.02887 8.7002 6.60016 7.09961 6.60016 5.02637C6.57867 3.03906 8.02887 1.45996 9.77985 1.45996C11.5308 1.45996 12.9595 3.01758 12.9595 5.01562C12.9595 7.07812 11.5416 8.7002 9.77985 8.7002ZM2.82965 19.8076H16.6978C18.2769 19.8076 19.0181 19.3027 19.0181 18.2178C19.0181 15.4141 15.4947 11.4287 9.7691 11.4287C4.03278 11.4287 0.509338 15.4141 0.509338 18.2178C0.509338 19.3027 1.26129 19.8076 2.82965 19.8076ZM2.49664 18.54C2.0025 18.54 1.84137 18.4219 1.84137 18.0781C1.84137 16.0479 4.70953 12.6855 9.7691 12.6855C14.8179 12.6855 17.6968 16.0479 17.6968 18.0781C17.6968 18.4219 17.525 18.54 17.0416 18.54H2.49664Z" fill={color} />
        <Circle cx="9.99957" cy="5" r="4" fill={color} />
        <Path d="M10.9996 12.5H9.49957C9.14005 12.5 6.59925 13.0386 4.99957 13.3896L4.49957 14C4.33291 14 3.89957 14.1 3.49957 14.5C2.99957 15 3.49957 15 2.99957 15.5L2.49957 16C1.99957 16.5 1.99957 16.5 1.99957 17.5V18V18.5H3.99957H7.49957H10.4996H14.9996H17.4996C18.4996 18.5 15.9996 18 17.9996 17.5C18.4846 17.3787 17.4996 16.5 17.4996 16C17.4996 15.5 16.4996 16.5 16.4996 16C16.4996 15.6 16.1662 14.6667 15.9996 14.5C15.3329 14.3333 14.3996 13.4 13.9996 13C13.5996 12.6 11.8329 12.5 10.9996 12.5Z" fill={color} />
        <Path d="M4.49957 13.5C4.65134 13.4663 4.8195 13.4291 4.99957 13.3896M4.99957 13.3896C6.59925 13.0386 9.14005 12.5 9.49957 12.5C9.89957 12.5 10.6662 12.5 10.9996 12.5C11.8329 12.5 13.5996 12.6 13.9996 13C14.3996 13.4 15.3329 14.3333 15.9996 14.5C16.1662 14.6667 16.4996 15.6 16.4996 16C16.4996 16.5 17.4996 15.5 17.4996 16C17.4996 16.5 18.4846 17.3787 17.9996 17.5C15.9996 18 18.4996 18.5 17.4996 18.5C16.4996 18.5 15.4996 18.5 14.9996 18.5C14.4996 18.5 10.9996 18.5 10.4996 18.5C9.99957 18.5 8.99957 18.5 7.49957 18.5C5.99957 18.5 4.49957 18.5 3.99957 18.5C3.59957 18.5 2.49957 18.5 1.99957 18.5V18C1.99957 18.1667 1.99957 18.3 1.99957 17.5C1.99957 16.5 1.99957 16.5 2.49957 16C2.99957 15.5 2.49957 16 2.99957 15.5C3.49957 15 2.99957 15 3.49957 14.5C3.89957 14.1 4.33291 14 4.49957 14L4.99957 13.3896Z" stroke={color} />
    </Svg>

}

