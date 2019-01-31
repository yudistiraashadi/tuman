import React, { Component } from "react";
import { Container, Content, Button, Text, View } from "native-base";
import { connect } from "react-redux";
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
              <Button full onPress={this.navigateToBelajarMandarin}>
                <Text>Belajar Mandarin</Text>
              </Button>

              <Button full style={{ marginTop: 15 }}>
                <Text>学习印尼语</Text>
              </Button>
            </View>

            <View
              style={{
                flex: 1,
                width: 150,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Button full onPress={this.navigateToDaftarTutor}>
                <Text>Daftar Tutor</Text>
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
)(HomeScreen);
