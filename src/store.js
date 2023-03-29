import { configureStore } from '@reduxjs/toolkit';
import weatherDataReducer from './Redux/weatherDataReducer';

export default configureStore({
  reducer: {
    weatherData: weatherDataReducer,
  },
});
