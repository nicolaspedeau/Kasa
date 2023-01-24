import { useState } from  'react';




function Collapse (props){

    // let {id} = useParams();
    // const goodProduct = products.filter(product => 
    // id === product.id
    // )
    
    const [open, setOpen] = useState(false)

    // const toggle = (i) => {
    //     if (open == i) {
    //         return setOpen(null)
    //     }


    //     setOpen(i)
    // }
    
        return(
            <div className="accordion_item">
                <div className="accordion_item_title" onClick={() => {setOpen(!open)}}>
                    <h2>{props.title}</h2>
                    <span>{open  ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}</span>
                </div>{
                    open && (Array.isArray(props.description) ? (
                        <ul className='accordion_item_list'>
                        {props.description.map((list, index) => (
                            <li key={index}>{list}</li>
                    ))}
                        </ul>
                    ): (<div className= "accordion_item_content_show">{props.description}</div>))
                }
            </div>
        )
   
        
    
}

export default Collapse;
