export interface IUser {
    id: number,
    name: string,
    email: string
}

export enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "error"
}

export interface IUserState {
    list: IUser[],
    listStatus: ApiStatus.ideal
}

export const defaultList: IUser[] = [{
    id: 1,
    name: "bob",
    email: "bob@gmail.com"
},
{
    id: 2,
    name: "sam",
    email: "sam@gmail.com"
}];