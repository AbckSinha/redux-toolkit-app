import httpService from "../../services/HttpService";
import ApiConfig from "../../services/ApiConfig";
import { IUser } from "./User.type";


export const getUserList = () => {
    return httpService.get<IUser[]>(ApiConfig.user);
}