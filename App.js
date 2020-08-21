import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { appStyles } from './src/services';
import { MainWrapper, ButtonColored, ButtonBordered, RowWrapper, ButtonColoredSmall, ButtonBorderedSmall } from './src/components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <MainWrapper>
          <ButtonColored
          text="Test"
          />
          <ButtonBordered
          text="Test"
          />
          <RowWrapper>
            <ButtonColoredSmall
            text="small"
            />
            <ButtonBorderedSmall
            text="small"
            />
          </RowWrapper>
        </MainWrapper>
      </SafeAreaView>
    );
  }
}

export default App;
