
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.div`
  margin: 10px;
  padding: 5px;
`;

const Temperature = styled.span`
  font-size: 48px;
  font-weight: bold;
`;

const Description = styled.span`
  font-size: 24px;
`;

function WeatherInfo() {
  const weatherData = useSelector((state) => state.weatherData);

  return (
    <Container>
      {weatherData.loading && <Info>Loading...</Info>}
      {weatherData.error && <Info>{weatherData.error}</Info>}
      {weatherData.weather && (
        <>
          <Info>
            <Temperature>{weatherData.weather.main.temp}°C</Temperature>
          </Info>
          <Info>
            <Description>{weatherData.weather.weather[0].description}</Description>
          </Info>
        </>
      )}
    </Container>
  );
}

export default WeatherInfo;
