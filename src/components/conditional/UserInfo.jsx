import React from "react";
import CheckUser from "./CheckUser";

const UserInfo = props => {

    const user = props.user || {};

    return (
        <div>
            <CheckUser test={user && user.name}>
                Seja bem vindo(a) <strong>{ user.name }</strong>!
            </CheckUser>

            <CheckUser test={!user || !user.name}>
                Usuário não logado
            </CheckUser>
        </div>
    )
}

export default UserInfo;