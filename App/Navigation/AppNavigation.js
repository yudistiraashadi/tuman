import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../Containers/HomeScreen";
import BelajarMandarinScreen from "../Containers/BelajarMandarinScreen";
import CariTutorScreen from "../Containers/CariTutorScreen";
import AutodidakScreen from "../Containers/AutodidakScreen";
import DaftarTutorScreen from "../Containers/DaftarTutorScreen";
// import LaunchScreen from "../Containers/LaunchScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    BelajarMandarinScreen: { screen: BelajarMandarinScreen },
    CariTutorScreen: { screen: CariTutorScreen },
    AutodidakScreen: { screen: AutodidakScreen },
    DaftarTutorScreen: { screen: DaftarTutorScreen }
    // LaunchScreen: { screen: LaunchScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "HomeScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
