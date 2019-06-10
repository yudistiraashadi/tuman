import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import HomeScreen from "../Containers/HomeScreen";
import BelajarMandarinScreen from "../Containers/BelajarMandarinScreen";
import CariTutorScreen from "../Containers/CariTutorScreen";
import AutodidakScreen from "../Containers/AutodidakScreen";
import DaftarTutorScreen from "../Containers/DaftarTutorScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    HomeScreen: { screen: HomeScreen },
    BelajarMandarinScreen: { screen: BelajarMandarinScreen },
    CariTutorScreen: { screen: CariTutorScreen },
    AutodidakScreen: { screen: AutodidakScreen },
    DaftarTutorScreen: { screen: DaftarTutorScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "LaunchScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
