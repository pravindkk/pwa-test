
import { IRootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const selectAuth = (state: IRootState) => state.auth

export const userSelector = createSelector(
    selectAuth,
    (auth) => auth.user
)

export const isAuthSelector = createSelector(
    selectAuth,
    (auth) => auth.isAuthenticated
)
