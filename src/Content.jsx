import ItemList from "./ItemList";

const Content = ({items, handelCheck, handelDelete}) => { 

  return (   
 
        <main>
            { items.length ? (   
                <ItemList
                    items={items}
                    handelCheck={handelCheck}
                    handelDelete={handelDelete}
                />
            ) : (
                <p style={{marginTop: '2rem', color: 'red'}}>The List is Empty</p>
            )
                
            }
        </main>
    
  )
}

export default Content