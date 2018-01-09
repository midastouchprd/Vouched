import React, { Component } from 'react';
import { Content, Text, Container } from 'native-base';

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
        >
          <Text>LandingPage</Text>
        </Content>
      </Container>
    );
  }
}

export default LandingPage;
