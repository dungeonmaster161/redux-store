import { createStoreHook } from "react-redux";
import { Reducers } from "../reducer/Reducers";

export const mystore = createStoreHook(Reducers)