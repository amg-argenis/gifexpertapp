const { render } = require("@testing-library/react")

describe('Pruebas en <GifItem />', () => {
  test('Debe hacer match con el snapshot', () => {
    const title = "Titulo de prueba."
    const url = "httms://google.com"

    render(<GifItem title={title} url={url}/>)
  })
  
})
