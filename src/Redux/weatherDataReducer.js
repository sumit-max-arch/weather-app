import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const REACT_APP_OPENWEATHER_API_KEY = '542ffd081e67f4512b705f89d2a611b2';

export const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState: {
    weather: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchWeatherDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherDataSuccess: (state, action) => {
      state.weather = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchWeatherDataFailure: (state, action) => {
      state.weather = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchWeatherDataStart, fetchWeatherDataSuccess, fetchWeatherDataFailure } = weatherDataSlice.actions;

export const fetchWeatherData = (city, country) => async (dispatch) => {
  try {
    dispatch(fetchWeatherDataStart());
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${REACT_APP_OPENWEATHER_API_KEY}`
    );
    dispatch(fetchWeatherDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchWeatherDataFailure(error.message));
  }
};

export default weatherDataSlice.reducer;
