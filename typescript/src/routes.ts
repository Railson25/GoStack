import {Request, Response} from 'express'
import createUser from './services/CreateUser'

export function hello (request : Request, response: Response) {
    const user = createUser({
        email: 'teste@teste.com',
        password: '123',
        techs: [
            'Typescript',
            'ReactJS',
            'ReactNatrive',
            {title: 'JavaScript', experience: 100}
        ]
    
    })
    return response.json({message: 'Hello'})
}