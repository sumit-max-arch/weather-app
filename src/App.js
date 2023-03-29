import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import WeatherInfo from './components/WeatherInfo';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <SearchForm />
        <WeatherInfo />
      </Container>
    </Provider>
  );
}

export default App;
