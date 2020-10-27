import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import BookingNew from './components/views/Booking/BookingNew';
import Booking from './components/views/Booking/Booking';
import EventsNew from './components/views/Events/EventsNew';
import Events from './components/views/Events/Events';
import Waiter from './components/views/Waiter/Waiter';
import OrdersNew from './components/views/Orders/OrdersNew';
import Orders from './components/views/Orders/Orders';
import Kitchen from './components/views/Kitchen/Kitchen';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#2B4C6F'},
    secondary: {main: '#11cb5f',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={BookingNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking:id`} component={Booking} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={EventsNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events:id`} component={Events} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrdersNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order:id`} component={Orders} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;