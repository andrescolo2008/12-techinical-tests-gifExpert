import { string } from "prop-types"
import { getGifs } from "../helpers/getGif"

describe('pruebas en < getGif>',()=>{
test('debe de retornar un arreglode gifs',async () => { 
const gifs=await getGifs('batman',3)
// console.log(gifs);

expect(gifs.length).toBeGreaterThan(0)
expect(gifs[0]).toEqual({
    id:expect.any(String),
    title:expect.any(String),
    url:expect.any(String)
})

    })
})