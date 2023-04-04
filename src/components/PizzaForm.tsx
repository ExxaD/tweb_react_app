import React, {FormEventHandler, useState} from 'react';
import {IPizza} from "../data/Pizza";
import {Button, Form, Input, InputNumber} from 'antd';

const { TextArea } = Input;

export default function PizzaForm({createPizza}: any) {
    const [form] = Form.useForm();

    const onSubmit = (values: any) => {
        const newItem : IPizza={
            name: values.name,
            description: values.description,
            imageUrl: values.imageUrl,
            price: values.price
        }
        createPizza(newItem)
        form.resetFields()
    };

    return (
        <Form
            name="basic"
            layout="vertical"
            initialValues={{
                price: 1.00
            }}
            onFinish={onSubmit}
            style={{ width: "33%", margin: "1%"}}
        >
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter name!' }]}>
                <Input name="name" placeholder="Enter a pizza name" showCount maxLength={20}/>
            </Form.Item>
            <Form.Item label="Description" name="description"  rules={[{ required: true, message: 'Please enter description!' }]}>
                <TextArea name="description" placeholder="Enter the pizza's description here"
                          showCount maxLength={300} />
            </Form.Item>
            <Form.Item label="Image URL" name="imageUrl"  rules={[{ required: true, message: 'Please enter image url!' }]}>
                <Input name="imageUrl" placeholder="Enter the image URL" />
            </Form.Item>
            <Form.Item label="Price" name="price">
                <InputNumber<number>
                            name="price"
                            defaultValue={1}
                            min={0}
                            max={10}
                            step="0.01"
                            precision={2}
                        />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

// <form className='pizzaForm' onSubmit={handleSubmit}>
        //     <div style={{ width: "30%", display: "inline-block", margin: "1%", padding: "1%", borderStyle: "dashed"}}>
        //         Add new pizza
        //         <br />
        //         <br />
        //         <Input value={name} showCount maxLength={20} onChange={(e)=>setName(e.target.value)} />
        //         <br />
        //         <br />
        //         <TextArea value={description} showCount maxLength={300} onChange={(e)=>setDescription(e.target.value)} />
        //         <br />
        //         <br />
        //         <Input value={imageUrl} placeholder="Image URL" onChange={(e)=>setImageUrl(e.target.value)} />
        //         <br />
        //         <br />
        //         <InputNumber<number>
        //             value={price}
        //             style={{ width: 200 }}
        //             defaultValue={1}
        //             min={0}
        //             max={10}
        //             step="0.01"
        //             precision={2}
        //             onChange={(e)=>setPrice(e ? e : 0)}
        //         />
        //         <br />
        //         <br />
        //         <Button type="primary" size="large">
        //             Submit
        //         </Button>
        //     </div>
        // </form>
    )
}