import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import User from '../infra/typeorm/entities/User'
import IUsersRepository from '../repositories/IUsersRepository'

interface IRequest {
    name: String,
    email: String,
    password: String
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ){}

    public async execute({name, email, password}: IRequest): Promise<User> {

        const checkUserExists = await this.usersRepository.findByEmail({
            where: {email},
        })

        if (checkUserExists) {
            throw new AppError('Email address already used. ')
        }

        const hashedPassword = await hash(password, 8)

        const user = await this.usersRepository.create({
            name,
            email,
            password: hashedPassword
        })
        return user
    }
}

export default CreateUserService
