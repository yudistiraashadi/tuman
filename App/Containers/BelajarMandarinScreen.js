import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Text,
  View,
  Header,
  Left,
  Body,
  Right,
  Icon
} from "native-base";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import { NavigationActions } from "react-navigation";

// Styles
import styles from "./Styles/BelajarMandarinScreenStyle";

import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

class BelajarMandarinScreen extends Component {
  // Navigation
  navigateBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  navigateToCariTutor = () => {
    this.props.navigation.navigate("CariTutorScreen");
  };

  navigateToAutodidak = () => {
    this.props.navigation.navigate("AutodidakScreen");
  };

  // Render
  render() {
    return (
      <Container style={styles.container}>
        {/* header */}
        <Header
          iosBarStyle="light-content"
          androidStatusBarColor="red"
          style={{ backgroundColor: "red" }}
        >
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={this.navigateBack}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ color: "#fff" }}>Belajar Mandarin</Text>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>

        {/* content */}
        <Content padder>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                height: windowHeight * (80 / 100),
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* Cari Tutor */}
              <TouchableOpacity
                onPress={this.navigateToCariTutor}
                style={{
                  alignItems: "center"
                }}
              >
                <Icon
                  name={"md-search"}
                  style={{ fontSize: 80, color: "black" }}
                />
                <Text>Cari Tutor</Text>
              </TouchableOpacity>

              {/* Autodidak */}
              <TouchableOpacity
                onPress={this.navigateToAutodidak}
                style={{
                  alignItems: "center",
                  marginTop: 30
                }}
              >
                <Icon
                  name={"md-list"}
                  style={{ fontSize: 80, color: "black" }}
                />
                <Text>Autodidak</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BelajarMandarinScreen);
