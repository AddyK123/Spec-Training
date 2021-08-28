import {useState} from 'react';

function CreateSource ({addSource}){
    
    const [entered, setEntered] = useState({
        name: '',
        email: ''
    });

    function submitSource (e){
        e.preventDefault();
        addSource(entered);
    }
    

    return(
        <form>
                <span>
                    <label for="name">Source Name: </label>
                    <input type = "text" id = "name" value={entered.name} onChange={e => setEntered({name: e.target.value, email: entered.email})}/>
                </span>
                <span>
                    <label for="email">Source Email: </label>
                    <input type="text" id="email" value={entered.email} onChange={e => setEntered({name: entered.name, email: e.target.value})}/>
                </span>
                <span class="SubButton" onClick = {submitSource}>Submit</span>
        </form>
    )
}

export default CreateSource;