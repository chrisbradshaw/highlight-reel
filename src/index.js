import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Movie from './components/Movie';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Cormorant Garamond', 'serif', 'Proza Libre', 'sans-serif'],
  },
});

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/movie/:id'} component={Movie} />
          <Route path={'/'} component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
