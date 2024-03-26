describe('pruebas en < demo>',()=>{
test('debe de mostrar el mensaje ', () => { 
const message1= 'Hola Mundo';
// const message2='carro';

const message2=message1.trim();
expect(message1).toBe(message2);
})
})

