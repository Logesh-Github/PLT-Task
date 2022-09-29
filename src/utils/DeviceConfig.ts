// It determines screen ratio for different screen sizes for proper display of contents
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const DeviceConfig = {
    screenHeight: height,
    screenWidth: width,
    heightRatio: height / 667,
    widthRatio: width / 375
}

export default DeviceConfig;
