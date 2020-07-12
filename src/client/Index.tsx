import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';

import {
    AppBar,
    Box,
    CssBaseline,
    Container,
    ThemeProvider,
    Toolbar,
} from '@material-ui/core';

import {
    StylesProvider
} from '@material-ui/core/styles';

import { MDXProvider } from '@mdx-js/react';
import commonMDXComponents from '../common/MDXComponents';

import theme from './Theme'

import { NavButton } from '../common/NavButton';

import DefaultLayout from './DefaultLayout';

import Home from '../pages/Home.mdx';
import Assignments from '../pages/Assignments.mdx';
import Calendar from '../pages/Calendar.mdx';

import { AppStore, createAppStore } from "../stores/AppStore";
import { AppStoreProvider } from '../stores/AppStoreProvider';

declare let module: any;

const appStore: AppStore = createAppStore();

const createUi = () => {
    return (
        <AppStoreProvider>
            <ThemeProvider theme={theme}>
                <StylesProvider injectFirst>
                    <CssBaseline/>
                    <MDXProvider components={commonMDXComponents}>
                        <Router history={appStore.routerStore.history}>
                            <AppBar position="static">
                                <Container>
                                    <Toolbar disableGutters>
                                        <Box display="flex" flexDirection="row" width="100%" role="navigation" aria-label="Main Links">
                                            <NavButton to="/" match="never">CSE 510 - Advanced Topics in HCI - Winter 2020</NavButton>
                                            <Box flexGrow={1} />
                                            <NavButton to="/assignments">Assignments</NavButton>
                                            <NavButton to="/calendar">Calendar</NavButton>
                                        </Box>
                                    </Toolbar>
                                </Container>
                            </AppBar>
                            <Container>
                                <DefaultLayout>
                                    { /* TODO React Router v6 for Routes Component */ }
                                    <Switch>
                                        <Route exact path="/">
                                            <Home />
                                        </Route>
                                        <Route path="/assignments">
                                            <Assignments />
                                        </Route>
                                        <Route path="/calendar">
                                            <Calendar />
                                        </Route>
                                    </Switch>
                                </DefaultLayout>
                            </Container>
                        </Router>
                    </MDXProvider>
                </StylesProvider>
            </ThemeProvider>
        </AppStoreProvider>
    );
};

const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(createUi(), rootElement);
} else {
  ReactDOM.render(createUi(), rootElement);
}

if (module.hot) {
    module.hot.accept();
}
