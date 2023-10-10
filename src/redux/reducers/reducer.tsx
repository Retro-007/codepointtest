import { User } from "../../types/interfaces";
import { GET_USERS, GO_TO_PAGE, NEXT_PAGE, PER_PAGE_CHANGE, PREV_PAGE, SORTFIELDS, UPDATE_SORTED_BY } from '../reduxActions/actionTypes';
import { GetUserAction, GoToPageAction, NextPageAction, PerPageAction, PrevPageAction, SortAction, UpdateSortedByAction } from '../reduxActions/actions';

// Define the user state type
export interface UserState {
    users: User | null;
    page: number,
    limit: number,
    orderBy: string,
    sortedBy: string,

}

// Initial state
const initialState: UserState = {
    users: null,
    page: 1,
    limit: 10,
    orderBy: 'id',
    sortedBy: 'asc',
};


// Reducer function
const userReducer = (state = initialState, action:
    GetUserAction
    | NextPageAction
    | PrevPageAction
    | GoToPageAction
    | PerPageAction
    | SortAction
    | UpdateSortedByAction
): UserState => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                page: action.payload.current_page,
                limit: action.payload.per_page,
            };
        case NEXT_PAGE:
            return {
                ...state,
                users: action.payload,
                page: action.payload.current_page,
                limit: action.payload.per_page,
            };
        case PREV_PAGE:
            return {
                ...state,
                users: action.payload,
                page: action.payload.current_page,
                limit: action.payload.per_page,
            };
        case GO_TO_PAGE:
            return {
                ...state,
                users: action.payload,
                page: action.payload.current_page,
                limit: action.payload.per_page,
            };
        case PER_PAGE_CHANGE:
            return {
                ...state,
                users: action.payload,
                page: action.payload.current_page,
                limit: action.payload.per_page,
            };
        case SORTFIELDS:
            return {
                ...state,
                users: action.payload,
                page: action.payload.current_page,
                limit: action.payload.per_page,
            };
        case UPDATE_SORTED_BY:
            return {
                ...state,
                orderBy: action.orderBy,
                sortedBy: action.sortedBy,  // Update sortedBy based on the action
            };
        default:
            return state;
    }
};

export default userReducer;
