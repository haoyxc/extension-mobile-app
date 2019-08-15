import React from "react";
import { useState } from "react";
// import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label } from "native-base";

function Login({ navigation }) {
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

Login.navigationOptions = {
  title: "Login"
};
export default Login;
