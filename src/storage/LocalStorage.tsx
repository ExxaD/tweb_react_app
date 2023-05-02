import {action, makeObservable, observable} from "mobx";
import {IPizzaDetailed, pizzaMenu} from "../data/Pizza";

class LocalStorage {
    data: IPizzaDetailed[] = [];

    constructor() {
        makeObservable(this, {
            data: observable,
            createNewPizza: action,
        });
        console.log(localStorage.getItem("pizzaMenu"))
        if (!localStorage.getItem("pizzaMenu")) {
            this.data = pizzaMenu;
            localStorage.setItem("pizzaMenu", JSON.stringify([...this.data]))
        } else {
            this.data = JSON.parse(localStorage.getItem("pizzaMenu"))
        }
    }

    createNewPizza(item: IPizzaDetailed) {
        this.data = [...this.data, item]
        localStorage.setItem("pizzaMenu", JSON.stringify(this.data))
    }
}

export default new LocalStorage();