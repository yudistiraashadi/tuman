import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Text,
  Header,
  Left,
  Body,
  Right,
  Icon,
  List,
  ListItem,
  Thumbnail
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import { NavigationActions } from "react-navigation";

// Styles
import styles from "./Styles/CariTutorScreenStyle";
const images = {
  orang_1: require("../Images/orang-1.jpg"),
  orang_2: require("../Images/orang-2.jpg"),
  orang_3: require("../Images/orang-3.jpeg")
};

class CariTutorScreen extends Component {
  // Navigation
  navigateBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
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
            <Text style={{ color: "#fff" }}>Cari Tutor</Text>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>

        {/* content */}
        <Content padder>
          <List>
            <ListItem avatar noIndent>
              <Left>
                <Thumbnail source={images.orang_1} />
              </Left>
              <Body>
                <Text>Chen WeiSheng</Text>
                <Text note>30 tahun</Text>
                <Text note>Lulusan S1 di Tiongkok</Text>
                <Text note>HSK 5</Text>
              </Body>
              <Right style={{ justifyContent: "center", alignItems: "center" }}>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem avatar noIndent>
              <Left>
                <Thumbnail source={images.orang_2} />
              </Left>
              <Body>
                <Text>Yudistira Ashadi</Text>
                <Text note>22 tahun</Text>
                <Text note>7 tahun di Tiongkok</Text>
                <Text note>HSK 6</Text>
              </Body>
              <Right style={{ justifyContent: "center", alignItems: "center" }}>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem avatar noIndent>
              <Left>
                <Thumbnail source={images.orang_3} />
              </Left>
              <Body>
                <Text>Desi Nur Indah</Text>
                <Text note>20 tahun</Text>
                <Text note>Lulusan D3 di Tiongkok</Text>
                <Text note>HSK 5</Text>
                <Text note>Guru Mandarin di SMA 10</Text>
              </Body>
              <Right style={{ justifyContent: "center", alignItems: "center" }}>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
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
)(CariTutorScreen);
