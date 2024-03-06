import { musicReducer } from './features/MusicalSlice';
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    musicReducer
  },
});

type RootType = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch; 
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
