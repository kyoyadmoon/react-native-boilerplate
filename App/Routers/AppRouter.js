import React, { Component } from 'react';
import { Actions, Router, Stack, Scene, Tabs } from 'react-native-router-flux';
import ReduxRouter from './ReduxRouter';

import Example from 'App/Containers/Example/ExampleScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';

const scenes = Actions.create(
  <Stack key="root" panHandlers={null} >
    <Scene key="splash" component={SplashScreen} hideNavBar type="replace"/>
    <Scene key="main" component={Example} hideNavBar />
  </Stack>
);

export default Routes = () => (
  <ReduxRouter
    gestureEnabled={false}
    panHandlers={null}
    scenes={scenes}
    backAndroidHandler={() => {
      return true;
    }}
  />
);