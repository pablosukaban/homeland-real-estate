import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { housesData, housesType, reviewersData, reviewType } from '../data';

type housesStateType = {
    houses: housesType[];
    filteredHouses: housesType[];
    country: string;
    countries: string[];
    property: string;
    properties: string[];
    price: string;
    prices: string[];
    reviewers: reviewType[];
};

const initialState: housesStateType = {
    houses: housesData,
    filteredHouses: housesData,
    countries: ['Расположение (любой)', 'США', 'Канада'],
    country: 'Расположение (любой)',
    price: 'Диапазон цен (любой)',
    prices: [
        'Диапазон цен (любой)',
        '100000 - 130000',
        '130000 - 160000',
        '160000 - 190000',
        '190000 - 220000',
        '10000 - 30000',
        '30000 - 40000',
    ],
    properties: ['Тип жилья (любой)', 'Апартаменты', 'Дом'],
    property: 'Тип жилья (любой)',
    reviewers: reviewersData,
};

const isDefault = (s: string) => {
    return s.split(' ').includes('(любой)');
};

const getMinPriceNum = (p: string) => {
    return parseInt(p.split(' ')[0]);
};
const getMaxPriceNum = (p: string) => {
    return parseInt(p.split(' ')[2]);
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
        handleSearch: (state) => {
            const minPrice = getMinPriceNum(state.price);
            const maxPrice = getMaxPriceNum(state.price);

            const newHouses = state.houses.filter((house) => {
                const housePrice = parseInt(house.price);

                const goodPriceCondition =
                    housePrice >= minPrice && housePrice <= maxPrice;

                const allMatch =
                    house.country === state.country &&
                    house.type === state.property &&
                    goodPriceCondition;

                const allDefault =
                    isDefault(state.country) &&
                    isDefault(state.property) &&
                    isDefault(state.price);

                const matchByCountry =
                    !isDefault(state.country) &&
                    isDefault(state.property) &&
                    isDefault(state.price);

                const matchByProperty =
                    isDefault(state.country) &&
                    !isDefault(state.property) &&
                    isDefault(state.price);

                const matchByPrice =
                    isDefault(state.country) &&
                    isDefault(state.property) &&
                    !isDefault(state.price);

                const matchByCountryProperty =
                    !isDefault(state.country) &&
                    !isDefault(state.property) &&
                    isDefault(state.price);

                const matchByCountryPrice =
                    !isDefault(state.country) &&
                    isDefault(state.property) &&
                    !isDefault(state.price);

                const matchByPropertyPrice =
                    isDefault(state.country) &&
                    !isDefault(state.property) &&
                    !isDefault(state.price);

                if (allMatch) {
                    return house;
                }

                if (allDefault) {
                    return house;
                }

                if (matchByCountry) {
                    return house.country === state.country;
                }

                if (matchByProperty) {
                    return house.type === state.property;
                }

                if (matchByPrice) {
                    if (goodPriceCondition) {
                        return house;
                    }
                }

                if (matchByCountryProperty) {
                    return (
                        house.country === state.country &&
                        house.type === state.property
                    );
                }

                if (matchByCountryPrice) {
                    if (goodPriceCondition) {
                        return house.country === state.country;
                    }
                }

                if (matchByPropertyPrice) {
                    if (goodPriceCondition) {
                        return house.type === state.property;
                    }
                }
            });

            state.filteredHouses = newHouses;
        },
    },
});

// Appartment
// Apartament
