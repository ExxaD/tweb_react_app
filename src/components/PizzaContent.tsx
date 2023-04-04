import {IPizzaDetailed} from "../data/Pizza";
import PizzaCard from "./PizzaCard";

export default function PizzaContent({data}:any) {

    return (
        <div>
            {data.map((el:IPizzaDetailed)=><PizzaCard key={el.name} {...el}/>)}
        </div>
    );
}