import React from 'react'
import {useRouteMatch, Link} from 'react-router-dom'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import {Header, RepositoryInfo, Issues} from './styles'

interface RepositoryParams {
    repository: string
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>()

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"/>
                <Link to='/'>
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/47870113?s=460&u=02b73fc747977be6c65fdfc9799f55c45d8eae5d&v=4" 
                        alt="Railson Santiago"/>
                    <div>
                        <strong>Railson25/GoStack</strong>
                        <p>Descrição do repositório</p>
                    </div>    
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link  to='DERFH'>
                    <div>
                        <strong>dfgh</strong>
                        <p>fdgjdfg</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    )
}

export default Repository