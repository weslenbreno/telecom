import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { EditPage, HomePage, CreateNumberPage } from 'pages';
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
        <Route path="/edit/:id">
          <EditPage />
        </Route>
        <Route path="/create">
          <CreateNumberPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
