import {TypedUseSelectorHook, useSelector} from "react-redux";
import {boardState} from "../store/reducers/boardReducer.ts";

export const useTypedSelector:TypedUseSelectorHook<boardState> = useSelector;