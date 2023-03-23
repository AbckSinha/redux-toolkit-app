import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { RootState } from "../../app/store";
import { IUser, ApiStatus } from './User.type';
import { getUserListAction } from "./UserSlice";

export const UserList = () => {

    const { list, listStatus } = useAppSelector((state: RootState) => state.user);
    console.log("lits", list);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getUserListAction())
    }, []);

    return (
        <table >
            <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            {/* {listStatus === ApiStatus.loading && <tbody>List is loading</tbody>}
            {listStatus === ApiStatus.error && <tbody>Error while List is loading</tbody>} */}
            {listStatus === ApiStatus.ideal && list.map((item: IUser, index: number) => {
                return <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>Action</td>
                </tr>
            })}

        </table>
    )
}