import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { houseSlice } from './houseSlice';

export const rootReducer = combineReducers({
    house: houseSlice.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];
