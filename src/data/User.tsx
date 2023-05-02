export interface IUser {
    login: string,
    password: string,
    firstname?: string,
    lastname?: string
}

export const userDatabase: IUser[] = [
    {
        login: 'user1',
        password: 'user1',
        firstname: 'Max',
        lastname: 'Gribencicov'
    },
    {
        login: 'user2',
        password: 'user2',
        firstname: 'Max',
        lastname: 'Gribencicov'
    },
    {
        login: 'user3',
        password: 'user3',
        firstname: 'Max',
        lastname: 'Gribencicov'
    },
    {
        login: 'user4',
        password: 'user4',
        firstname: 'Max',
        lastname: 'Gribencicov'
    },
    {
        login: 'user5',
        password: 'user5',
        firstname: 'Max',
        lastname: 'Gribencicov'
    }
]