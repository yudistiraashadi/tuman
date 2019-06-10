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
import { TouchableOpacity } from "react-native";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/HomeScreenStyle";

import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

class HomeScreen extends Component {
  // Navigation
  navigateToBelajarMandarin = () => {
    this.props.navigation.navigate("BelajarMandarinScreen");
  };

  navigateToDaftarTutor = () => {
    this.props.navigation.navigate("DaftarTutorScreen");
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
          <Left style={{ flex: 1 }} />
          <Body
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ color: "#fff", fontSize: 20 }}>Tuman</Text>
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
                width: 230,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* middle buttons */}
              <View
                style={{
                  flex: 5,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {/* Belajar Mandarin */}
                <TouchableOpacity
                  onPress={this.navigateToBelajarMandarin}
                  style={{
                    alignItems: "center"
                  }}
                >
                  <Icon
                    name={"md-book"}
                    style={{ fontSize: 80, color: "black" }}
                  />
                  <Text>Belajar Mandarin</Text>
                </TouchableOpacity>

                {/* 学习印尼语 */}
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    marginTop: 30
                  }}
                >
                  <Icon
                    name={"ios-book"}
                    style={{ fontSize: 80, color: "black" }}
                  />
                  <Text>学习印尼语</Text>
                </TouchableOpacity>
              </View>

              {/* daftar tutor */}
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Button
                  full
                  onPress={this.navigateToDaftarTutor}
                  style={{ backgroundColor: "red" }}
                >
                  <Text>Daftar Tutor</Text>
                </Button>
              </View>
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
)(HomeScreen);
