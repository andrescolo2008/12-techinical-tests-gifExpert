import React from 'react'

export const JsMethods = () => {
  //   const url ='www/andres/com'
  //   const array= (data ) =>{
  //       return data.split("/").slice(1,2)
  //   }

  //  console.log(array(url));

  //función para sacar números pares e impares de una función

   
   const numeros2=[34,56,12,2,4,5,78,1000,3]
   const texto="This document will change on an as needed basis"

  const pares= ( ) =>{
    const par= numeros.filter(numero=>numero %2 ===0)
    return par;
    
  }
  

  const impares= ( ) =>{
    const par= numeros.filter(numero=>numero %2 !== 0)
    return par;
    
  }
  
  const ordenamiento= ( ) =>{
    const ord =numeros2.sort((a,b)=>b-a)
    return ord
  }
    
  const separarcion= ( ) =>{
    const sep= texto.split(" ")
    return sep
  }

  const numeros=[1,2,3,5,6,7,8,10,12,14,22]
  const letras=["a","b","c"]

  const mezcla= (element) =>{
    const newArray = numeros.map((numero, index) => {
      return numero.toString() + letras[index % letras.length];
    });
     return newArray;
  }

  const personas= [
    {name:'andres',age:34},
    {name:'lucas',age:26},
    {name:'lTomás',age:45},
    {name:'Luna',age:13},

  ]

 personas.some((persona) =>{
    return persona.age >16
  })

  const personasfiltradas=personas.filter((persona) =>persona.age >  16)
  
  const muestraPersonasFiltradas= personasfiltradas.map(   
    (persona,index)=>(  <div key={index}> {persona.age} - {persona.name}</div>)
  )
  console.log(personasfiltradas);
  


  return (
    <>
    <div>Hola , Aquí practicaré algunos médtodos de js</div>
    {/* <div>{pares(numeros).join(', ')}</div>
    <div>{impares(numeros).join(', ')}</div>
    <div>{ordenamiento(numeros2).join('#,# ')}</div>
    <div>{separarcion(texto).join(',')}</div>
    <div>{mezcla()}</div> */}
   <div>resultado de personas filtradas</div>
   {/* 
   
    const muestraPersonasFiltradas= personasfiltradas.map(   
    (persona,index)=>(  <div key={index}> {persona.age} - {persona.name}</div>)
  )
   = a 

   {personasFiltradas.map((persona, index) => (
        <div key={index}>{persona.name} - {persona.age}</div>
      ))} */}
   {/* <div>{muestraPersonasFiltradas}</div> */}

   <ol>
   {
   personasfiltradas.map( (persona,numeroPersona)=>
     
   { 
     return(  
         
         <li key={numeroPersona}> {persona.age} - {persona.name}</li>
         );
        }
  
   
    )
   }
        </ol>
    </>
  )
}

