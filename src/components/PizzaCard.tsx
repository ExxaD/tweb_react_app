import {Card, InputNumber} from 'antd';
import {IPizzaDetailed} from "../data/Pizza";

const { Meta } = Card;

export default function PizzaCard(props: IPizzaDetailed) {
    return(
        <Card
            hoverable
            style={{ width: "30%", display: "inline-block", margin: "1%"}}
            cover={<img alt="Pizza" src={props.imageUrl} />}
        >
            <Meta title={props.name} description={props.description} />
            <br />
            <br />
            <InputNumber readOnly={true} defaultValue={props.price}/>
        </Card>
    )
}