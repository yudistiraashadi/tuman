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
        <Header>
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

        <Content padder>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                height: windowHeight * (80 / 100),
                width: 230,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Button full onPress={this.navigateToCariTutor}>
                <Text>Cari Tutor</Text>
              </Button>

              <Button
                full
                onPress={this.navigateToAutodidak}
                style={{ marginTop: 15 }}
              >
                <Text>Autodidak</Text>
              </Button>
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
