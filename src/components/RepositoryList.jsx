import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos
/*
const repository = {
    name: "unform",
    description: "Forms in React",
    link: "http://www.google.com"
}
*/

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [repositories])

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
                
            </ul>
        </section>
    )
}