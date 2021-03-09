interface TechOject{
    title: string
    experience: number
}

interface CreateUserData{
    name ?: string
    email: string
    password: string
    techs: Array<string | TechOject>
}

export default function CreateUser({name = '', email, password} : CreateUserData) {
    const user ={
        name,
        email,
        password
    }
    return user 
}