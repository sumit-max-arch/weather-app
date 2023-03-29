import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchWeatherData } from '../Redux/weatherDataReducer';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px;
  padding: 5px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 5px;
`;

function SearchForm() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchWeatherData(city, country));
    setCity('');
    setCountry('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Get weather info report :</h1>
      <Input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      />
      <Button type="submit">Search</Button>
</Form>
);
}

export default SearchForm;
