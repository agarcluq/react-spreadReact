import React,{Fragment, useState} from 'react';

const Listas = () => {

    const [numeros, setNumero] = useState([1,2,3,4,5,6])

    const [tiempo, setTiempo] = useState(1)
    const arrayUno = ['Chile', 'Argentina']
    const arrayDos = ['Perú', 'Mexico']

    const Unidos = [...arrayUno, ...arrayDos]
    console.log(Unidos)

    const aumentar = () => {
        setTiempo(tiempo + 1)
        setNumero([
            ...numeros,
            tiempo + 6
        ])
    }

    return (
        <Fragment>
            <h2>{Unidos}</h2>
            <ul>
                <button onClick={aumentar}>Aumentar</button>
                <p>Tiempo: {tiempo}</p>
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