import React, { useEffect, useState } from "react";
import { Container, Header, Content, Form, Item, Input, Label } from "native-base";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel last>
              <Label>Enter your unique ID</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
