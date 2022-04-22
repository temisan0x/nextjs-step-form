import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import stepSlice from './slices/steps';

const rootReducer = combineReducers({
    stepState: stepSlice
})

export type RootState = ReturnType<typeof rootReducer>


const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;