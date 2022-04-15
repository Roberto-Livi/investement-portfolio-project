import api from '../api/users';
import _ from 'lodash';
import { SecurityMessages, Assets } from '../store/types';

export const createUser = (userInfo: object) => {
    api.post("/users", userInfo);
}

export const retrieveExistingUser = async (username: string, password: string) => {
    let userInfo = await api.get("/users").then((resp) => {
                return resp.data.find((user: any) => _.isEqual(user.username, username) && _.isEqual(user.password,password))
            })
    return _.isEmpty(userInfo) ? SecurityMessages.USER_NOT_FOUND : userInfo;
}

export const addOrModifyAssets = (id: number | null, assets: any[], type: string) => {
    api.patch(`/users/${id}`, {[type]: assets});
}
