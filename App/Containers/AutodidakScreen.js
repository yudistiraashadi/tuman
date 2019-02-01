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
  ListItem
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import { NavigationActions } from "react-navigation";

// Styles
import styles from "./Styles/AutodidakScreenStyle";

class AutodidakScreen extends Component {
  // Navigation
  navigateBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  // Render
  render() {
    return (
      <Container style={styles.container}>
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
            <Text style={{ color: "#fff" }}>Autodidak</Text>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>

        <Content padder>
          <List>
            <ListItem>
              <Left>
                <Text>Tones</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Pinyin</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Perkenalan</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Hanzi</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Hapalan</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem>
              <Left>
                <Text>Percakapan</Text>
              </Left>
              <Right>
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
)(AutodidakScreen);
