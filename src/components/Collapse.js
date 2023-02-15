import { useState } from  'react';


function Collapse (props){
    
    const [open, setOpen] = useState(false)

    return(
        <div className="accordion_item">
            <div className="accordion_item_title" onClick={() => {setOpen(!open)}}>
                <h2>{props.title}</h2>
                <span>{open  ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</span>
            </div>{
                open && (Array.isArray(props.description) ? (
                    <ul className='accordion_item_list '>
                    {props.description.map((list, index) => (
                        <li key={index}>{list}</li>
                ))}
                    </ul>
                ): (<p className= "accordion_item_content_show">{props.description}</p>))
            }
        </div>
    )
}

export default Collapse;
