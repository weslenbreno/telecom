import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Detail } from 'pages';
import { Colors } from 'utils';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: ${Colors.bg};
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Switch>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
