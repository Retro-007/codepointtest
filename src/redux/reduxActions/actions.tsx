/* eslint-disable react-refresh/only-export-components */
import { Dispatch } from "react";
import { User } from "../../types/interfaces";
import { GET_USERS, GO_TO_PAGE, NEXT_PAGE, PER_PAGE_CHANGE, PREV_PAGE, SORTFIELDS, UPDATE_SORTED_BY } from "./actionTypes";
import axiosInstance from "../axiosInstance";


// Define action interfaces
export interface GetUserAction {
    type: typeof GET_USERS;
    payload: User;
}

export interface NextPageAction {
    type: typeof NEXT_PAGE;
    payload: User;
}
export interface PrevPageAction {
    type: typeof PREV_PAGE;
    payload: User;
}
export interface GoToPageAction {
    type: typeof GO_TO_PAGE;
    payload: User;
}

export interface PerPageAction {
    type: typeof PER_PAGE_CHANGE;
    payload: User;
}
export interface SortAction {
    type: typeof SORTFIELDS;
    payload: User;
}

export interface UpdateSortedByAction {
    type: typeof UPDATE_SORTED_BY;
    orderBy: string;
    sortedBy: string;
}

// Action creators
export const getUsers = (page: number, limit: number, orderBy: string, sortedBy: string) => {
    return async (dispatch: Dispatch<GetUserAction>) => {
        try {
            const response = await axiosInstance.get(`?page=${page}&limit=${limit}&orderBy=${orderBy}&sortedBy=${sortedBy}`);

            if (!response?.data && response?.status !== 200) {
                throw new Error("Failed to fetch data");
            }
            const data = await response?.data;

            // Dispatch the action with the fetched data
            dispatch({
                type: GET_USERS,
                payload: data,
            });
        } catch (error) {
            // Handle any errors
            console.error("Error:", error);
        }
    };
};

export const nextPage = (next_page_url: string) => {
    return async (dispatch: Dispatch<NextPageAction>) => {
        try {
            const response = await axiosInstance.get(next_page_url);

            if (!response?.data && response?.status !== 200) {
                throw new Error("Failed to fetch data");
            }
            const data = await response?.data;

            // Dispatch the action with the fetched data
            dispatch({
                type: NEXT_PAGE,
                payload: data,
            });
        } catch (error) {
            // Handle any errors
            console.error("Error:", error);
        }
    };
};

export const prevPage = (prev_page_url: string) => {
    return async (dispatch: Dispatch<PrevPageAction>) => {
        try {
            const response = await axiosInstance.get(prev_page_url);

            if (!response?.data && response?.status !== 200) {
                throw new Error("Failed to fetch data");
            }
            const data = await response?.data;

            // Dispatch the action with the fetched data
            dispatch({
                type: PREV_PAGE,
                payload: data,
            });
        } catch (error) {
            // Handle any errors
            console.error("Error:", error);
        }
    };
};

export const goToPage = (event: string, limit: number, orderBy: string, sortedBy: string) => {
    return async (dispatch: Dispatch<GoToPageAction>) => {
        try {
            const response = await axiosInstance.get(`?page=${event}&limit=${limit}&orderBy=${orderBy}&sortedBy=${sortedBy}`);

            if (!response?.data && response?.status !== 200) {
                throw new Error("Failed to fetch data");
            }
            const data = await response?.data;

            // Dispatch the action with the fetched data
            dispatch({
                type: GO_TO_PAGE,
                payload: data,
            });
        } catch (error) {
            // Handle any errors
            console.error("Error:", error);
        }
    };
};

export const PerPageChange = (page: string, event: number, orderBy: string, sortedBy: string) => {
    return async (dispatch: Dispatch<PerPageAction>) => {
        try {
            const response = await axiosInstance.get(`?page=${page}&limit=${event}&orderBy=${orderBy}&sortedBy=${sortedBy}`);

            if (!response?.data && response?.status !== 200) {
                throw new Error("Failed to fetch data");
            }
            const data = await response?.data;

            // Dispatch the action with the fetched data
            dispatch({
                type: PER_PAGE_CHANGE,
                payload: data,
            });
        } catch (error) {
            // Handle any errors
            console.error("Error:", error);
        }
    };
};

export const sortFields = (page: string, limit: number, orderBy: string, sortedBy: string) => {
    return async (dispatch: Dispatch<SortAction | UpdateSortedByAction>) => {
        try {
            const response = await axiosInstance.get(`?page=${page}&limit=${limit}&orderBy=${orderBy}&sortedBy=${sortedBy}`);

            if (!response?.data && response?.status !== 200) {
                throw new Error("Failed to fetch data");
            }
            const data = await response?.data;

            // Dispatch the action with the fetched data
            dispatch({
                type: SORTFIELDS,
                payload: data,
            });
            dispatch({
                type: UPDATE_SORTED_BY,
                orderBy: orderBy,
                sortedBy: sortedBy,
            });
        } catch (error) {
            // Handle any errors
            console.error("Error:", error);
        }
    };
};




