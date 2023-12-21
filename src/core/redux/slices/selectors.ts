import {RootState} from '../store'

export const appDirection = (state:RootState) => state.cookies.dir;
export const appLanguage = (state:RootState) => state.cookies.lang;
export const appMode = (state:RootState) => state.cookies.mode;