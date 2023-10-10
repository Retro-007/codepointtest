export interface User {
    current_page: number,
    data: Data[],
    first_page_url: string,
    next_page_url: string,
    prev_page_url: string,
    last_page_url: string,
    from: number,
    last_page: number,
    per_page: number
    total: number,
    to: number,
}

export interface Data {
    id: number,
    first_name: string,
    last_name: string,
    middle_name: string,
    dob: string,
    mobile_no: string,
    email_id: string,
    gender: string,

}

export interface FinalData {
    id: number,
    name: string,
    email: string,

}
export interface FetchData {
    page: number,
    limit: number,
    orderBy: string,
    sortedBy: string,
}

export interface TableProps {
    checked?: boolean,
    handleCheckbox?: () => void,
    data: (FinalData[] | Data[]) | null,
    UserData: User[] | null
    page: number,
    limit: number,
    orderBy: string,
    sortedBy: string,
}