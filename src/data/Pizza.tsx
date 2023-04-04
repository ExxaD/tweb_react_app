export interface IPizza {
    name: string,
    description: string,
    imageUrl: string,
    price: number
}

export interface IPizzaDetailed extends IPizza {
    ingredients?: string[],
    allergens?: string[],
    vegan?: boolean
}

export const pizzaMenu: IPizzaDetailed[] = [
    {
        name: 'Pepperoni',
        description: 'A classic favorite made with freshly rolled dough, tangy tomato sauce, melted mozzarella cheese,' +
            'and generous slices of spicy pepperoni. Perfectly baked in a traditional stone oven to achieve that crispy' +
            'crust and irresistible aroma, this pizza is sure to satisfy your cravings and leave you wanting more.',
        imageUrl: 'https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg',
        ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Pepperoni', 'Olive oil'],
        price: 5.99
    },
    {
        name: 'Diablo',
        description: 'A classic favorite made with freshly rolled dough, tangy tomato sauce, melted mozzarella cheese,' +
            'and generous slices of spicy pepperoni. Perfectly baked in a traditional stone oven to achieve that crispy' +
            'crust and irresistible aroma, this pizza is sure to satisfy your cravings and leave you wanting more.',
        imageUrl: 'https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg',
        price: 5.99
    },
    {
        name: '4 Cheese',
        description: 'A classic favorite made with freshly rolled dough, tangy tomato sauce, melted mozzarella cheese,' +
            'and generous slices of spicy pepperoni. Perfectly baked in a traditional stone oven to achieve that crispy' +
            'crust and irresistible aroma, this pizza is sure to satisfy your cravings and leave you wanting more.',
        imageUrl: 'https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg',
        price: 5.99
    },
    {
        name: 'Capricio',
        description: 'A classic favorite made with freshly rolled dough, tangy tomato sauce, melted mozzarella cheese,' +
            'and generous slices of spicy pepperoni. Perfectly baked in a traditional stone oven to achieve that crispy' +
            'crust and irresistible aroma, this pizza is sure to satisfy your cravings and leave you wanting more.',
        imageUrl: 'https://www.simplyrecipes.com/thmb/I4razizFmeF8ua2jwuD0Pq4XpP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg',
        price: 5.99
    }
]