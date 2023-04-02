import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { housesData, housesType } from '../data';

type housesStateType = {
    houses: housesType[];
    country: string;
    countries: string[];
    property: string;
    properties: string[];
    price: string;
};

const initialState: housesStateType = {
    houses: housesData,
    countries: ['Location (any)', 'United States', 'Canada'],
    country: 'Location (any)',
    price: '100$',
    properties: ['Property type (any)', 'Appartment', 'House'],
    property: 'Property type (any)',
};

export const houseSlice = createSlice({
    name: 'house',
    initialState,
    reducers: {
        changeCountry: (state, action: PayloadAction<string>) => {
            state.country = action.payload;
        },
        changeProperty: (state, action: PayloadAction<string>) => {
            state.property = action.payload;
        },
        changePrice: (state, action: PayloadAction<string>) => {
            state.price = action.payload;
        },
    },
});
