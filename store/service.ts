import { AnyAction, Dispatch } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from ".";


export const useAppDispatch = () => useDispatch<Dispatch<AnyAction>>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector