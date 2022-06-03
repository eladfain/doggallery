import { configureStore } from '@reduxjs/toolkit';
import dogReducer from './dogReducer';

const store=configureStore({reducer:dogReducer});

export default store;

