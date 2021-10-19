import  {useState} from "react";

//hook -> gancho do react
// imutabilidade -> dar um novo valor para a variavel

// usuarios = ['user1', 'user2']
// usuarios.push('user3')

// imutabilidade é
// novosUsuarios = []
// novosUsuarios = [...usuarios, 'user1']

export function Counter(){

    const [counter, setCounter] = useState(0);
    
    function increment(){
        console.log("counter is" + counter)
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>increment + 50</button>
        </div>
    );
}