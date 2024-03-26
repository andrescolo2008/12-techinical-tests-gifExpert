
import React from "react";

import { Counter } from "../assets/Counter";

import { render } from "@testing-library/react";

describe('pruebas en < Counter.jsx>',()=>{

test('deb de mostrar el valor del counter', () => { 
    // const variable='amigos'    
    // const message='hola amigos';
    // const message2=`hola ${variable}`;

    // expect(message2).toBe(message)
    const base =1

    const {container}= render(
        < Counter base={base}/>

        )
        expect(container).toMatchSnapshot()


   })
})

