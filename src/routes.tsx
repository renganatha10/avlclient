import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Landing from './Pages/Landing';
import PawnLanding from './Pages/PawnLanding';
import PawnCreation from './Pages/PawnCreation';
import PawnDetails from './Pages/PawnDetails';

import AppLayout from './Components/AppLayout';

import GlobalStyles from './utils/globalStyles';

export default class Routes extends React.PureComponent {
  public render() {
    return (
      <BrowserRouter>
        <AppLayout>
          <GlobalStyles />
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/home" component={Landing} />
          <Route exact={true} path="/pawnlanding" component={PawnLanding} />
          <Route exact={true} path="/pawncreation" component={PawnCreation} />
          <Route exact={true} path="/pawndetail" component={PawnDetails} />
        </AppLayout>
      </BrowserRouter>
    );
  }
}
