import PizzaContent from "./PizzaContent";
import LocalStorage from "../store/PizzaStore";
import PizzaForm from "./PizzaForm";
import {IPizzaDetailed} from "../data/Pizza";
import React from "react";
import UserStore from "../store/UserStore";
import {observer} from "mobx-react";

const Main = observer(() => {
    return (
        <div>
            <h2>Hello, {UserStore.getSessionUserFullname()}</h2>
            <PizzaContent data={LocalStorage.data} />
            <span style={{ display: "inline-block", borderStyle: "solid", width: "33%", padding: "25px" }}>
                    <PizzaForm createPizza={(item:IPizzaDetailed)=>LocalStorage.createNewPizza(item)} />
                </span>
        </div>)
})

export default Main;