import React,{Fragment, useState,useEffect} from 'react';

const Listas = () => {

    const [numeros, setNumero] = useState([1,2,3,4,5,6])

    const [masNumeros, setMasNumeros] = useState(numeros[numeros.length-1]+1)


    const aumentar = () => {
        setMasNumeros(masNumeros + 1)
        setNumero([
            ...numeros,
            masNumeros
        ])
    }

    return (
        <Fragment>
 
            <ul>
                <button onClick={aumentar}>Aumentar</button>
                <p>Añade el {masNumeros}</p>
                {
                    numeros.map((item, index) => 
                        <li key={index}>
                            Posición {index} - Numero {item}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    );
}
 
export default Listas;