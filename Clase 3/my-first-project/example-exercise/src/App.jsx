import { useEffect } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
// MAP de arrays
const products = [
  {
      name: 'Playera',
      color: 'red',
      id: 'dofpjgnh'
  },
  {
      name: 'Pantalón',
      color: 'azul',
      id: 'fdjgnhfgh'
  },
  {
      name: 'Camisa',
      color: 'negra',
      id: 'djfgnjfgnjgfib'
  },
] // -> promesas


function App(){

  useEffect(() => {
    const somethingWillHappen = () => {
      return new Promise((resolve, reject) => {
          if(true){
              setTimeout(() => {
                  resolve(products)
               }, 2000)
          }else{
              reject('Oh no, lo hice mal')
          }
      })
    }
    somethingWillHappen()
    .then((res) => console.log(res))
  })

    return(
      <Fragment>
        {
          products.map((product) => {
            return(
              <div key={product.id}>
                <h1>{product.name}</h1>
                <p>{product.color}</p>
              </div>
            )
          })
        }
      </Fragment>
    )
}

export default App