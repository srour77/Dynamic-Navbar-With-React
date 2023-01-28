import './addurl.css'

function AddUrl(props) {

    function alterUrl(ev) {
        let link = document.querySelector('#input').value;
        let name = document.querySelector('#url-name').value;
        if(ev.target.classList.contains('add')){
            props.addUrl(link, name);
        }else{
            props.removeUrl(link, name);
        }
    }
    
    return(
        <div className='inputs'>
            <input id='url-name' type="text" placeholder='add website name'></input>
            <input id='input' type="text" placeholder='add website url'></input>
            <div className='btns'> 
                <button className='add' onClick={alterUrl} >Add Url</button>
                <button className='remove' onClick={alterUrl} >Remove Url</button>
            </div>
        </div>
    )
}

export default AddUrl