import React, { Component } from "react";
import { Image } from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";

// Styles
import styles from "./Styles/LaunchScreenStyles";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

const slides = [
  {
    key: "a",
    image: require("../Images/slide-1.png"),
    title: "Menyenangkan",
    text: "Belajar mandarin enggak harus susah.",
    titleStyle: {
      width: windowWidth,
      textAlign: "center",
      fontSize: 35,
      color: "#FFF"
    },
    textStyle: {
      width: windowWidth,
      textAlign: "center",
      fontSize: 18,
      color: "#FFF"
    },
    imageStyle: {
      width: 320,
      height: 380
    },
    backgroundColor: "#59b2ab"
  },
  {
    key: "b",
    image: require("../Images/slide-2.png"),
    title: "Gampang",
    text: "Kamu bisa belajar dimanapun dan kapanpun!",
    titleStyle: {
      width: windowWidth,
      textAlign: "center",
      fontSize: 35,
      color: "#FFF"
    },
    textStyle: {
      width: windowWidth,
      textAlign: "center",
      fontSize: 18,
      color: "#FFF"
    },
    imageStyle: {
      width: 380,
      height: 300
    },
    backgroundColor: "#febe29"
  }
];

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRealApp: false
    };
  }

  // componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.showRealApp === true) {
      this.navigateToHomeScreen();
    }
  }

  // navigation
  navigateToHomeScreen = () => {
    this.props.navigation.navigate("HomeScreen");
  };

  // AppIntroSlider functions
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };

  render() {
    return (
      <AppIntroSlider
        showPrevButton={true}
        prevLabel="Kembali"
        nextLabel="Lanjut"
        doneLabel="Masuk"
        slides={slides}
        onDone={this._onDone}
      />
    );
  }
}
