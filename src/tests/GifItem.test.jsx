import { render } from "@testing-library/react";
import { GifItem } from "../assets/components";


describe('pruebas en < GifItem>',()=>{

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
})

