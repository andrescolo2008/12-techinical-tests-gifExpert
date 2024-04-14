import { render, screen } from "@testing-library/react";
import { GifItem } from "../assets/components";


describe('pruebas en < GifItem>',()=>{

    const title ='superman flying GIF';
    const url='https://media4.giphy.com/media/VvxtXb86Lwicw/giphy.gif?cid=f9bcdc55usujxj2u7sifii80s7kcs2cgedbm3ctoewdktepv&ep=v1_gifs_search&rid=giphy.gif&ct=g';
    
    test('validar las props', () => { 

        const {container} = render(  < GifItem title ={'manzana'} url={"https:123.com"}/>)

        expect(container).toMatchSnapshot()

    //  const GifItem = ({id,title,url}) => {
    
    //     console.log(id,title,url);
        //f
    //   return (
    //     <div  
    //     key={id}>
    //         <img src={url} alt="title" />
    //     </div>
    //   )
    // }
    
  })
  test('Debe de mostrar la url y alt ', () => { 


     render(  < GifItem title ={title} url={url}/>)

    // screen.debug()
    // expect(screen.getByRole('img').src).toBe(url)
    // console.log(screen.getByRole('img'));

    const {src,alt} =screen.getByRole('img')
    expect(src).toBe(url);
    expect(alt).toBe(title);


    })
    test('Debe de mostrar el título como texto  ', () => { 


        render(  < GifItem title ={title} url={url}/>)
   
    expect(screen.getByText(title)).toBeTruthy()
   
    //    const {src,alt} =screen.getByRole('img')
    //    expect(src).toBe(url);
    //    expect(alt).toBe(title);
   
   
       })
})

