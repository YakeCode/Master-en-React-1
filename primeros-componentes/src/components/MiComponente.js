
import React from "react";  // se importq modulos de react/dependencias

const MyComponent = ()=>{  // se crea el componente

    let nombre="Yake";
    let web= "www.Yake.Dev"

    const user ={
        name:"yimi",
        online:"YakeCode"
    }


    return(
        <>
        <p>mi primer componente</p>
        <h2>componente <hr/>creado</h2>
        <h3>Datos del usuario:</h3>
        <ul>
            <li>{`nombre: ${nombre}`}</li> {/* asi se haria como en js normal */}
            <li><strong>url: {web}</strong></li>{/*esta es la syntaxis de react */}

        </ul>

        <h3>
            <strong>Con Objetos</strong>

            <ul>
                <li>name: {user.name}</li>
                <li>wep App:{user.online}</li>
            </ul>
        </h3>


        <ul> habilidades <hr/>
            <li>react</li>
            <li>anfular</li>
            <li>web servises</li>
        </ul>

        </>
    )
}

export default MyComponent;  //se exporta 


// <></> es el objeto minimalizado de fragment

/*para usar el normal seria 
    import React,{Fragment} from "react"
    <Fragment>
        <p>mi primer componente</p>
        <h2>componente <hr/>creado</h2>

        <ul>
            <li>react</li>
            <li>anfular</li>
            <li>web servises</li>
        </ul>


        <Fragment/>


        la mejor forma es utilizando fragment abreviado o utilizando un div directamente

        --

        <div classname ="mi-componente">
        <p>mi primer componente</p>
        <h2>componente <hr/>creado</h2>
        <ul>
            <li>react</li>
            <li>anfular</li>
            <li>web servises</li>
        </ul>

        <div/>

        el div tiene mas control

*/

