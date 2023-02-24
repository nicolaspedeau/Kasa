import { useState } from  'react';
import arrowdown from '../assets/arrowDown.png';
import arrowup from '../assets/arrowUp.png';


function Collapse (props){
    
    const [open, setOpen] = useState(false)

    return(
        <div className="accordion_item">
            <div className="accordion_item_title" onClick={() => {setOpen(!open)}}>
                <h2>{props.title}</h2>
                <span>{open  ? <img src={arrowup} alt='arrowdown'></img> : <img src={arrowdown}  alt='arrowup'></img>}</span>
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
