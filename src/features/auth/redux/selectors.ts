import {RootState} from '@/core/redux/store'

export const token = (state:RootState) => state.auth.token;
export const userId = (state:RootState) => state.auth.userId;
export const isLoggedIn = (state:RootState) => state.auth.isLoggedIn;