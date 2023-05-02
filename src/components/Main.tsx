import PizzaContent from "./PizzaContent";
import LocalStorage from "../store/PizzaStore";
import React from "react";
import UserStore from "../store/UserStore";
import {observer} from "mobx-react";

const Main = observer(() => {
    return (
        <div>
            <h2>Hello, {UserStore.getSessionUserFullname()}</h2>
            <PizzaContent data={LocalStorage.data} />
        </div>)
})

export default Main;