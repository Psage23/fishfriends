import React from 'react';
import '../App.css'

const AddLogForm = () => {


return (
    <div className="log-form">
        <p src='/fishpic.jpg' alt='fish picture' />
        <form className="log">
                <label>Bait: </label>	
                    <select className="dropdown" value="" onChange="">
                        <option placeholder='select'>Bait Used</option>
                        <option value='flies'>Flies</option>
                        <option value='naturalBait'>Natural Bait</option>
                        <option value='lures'>Lures</option>
                        <option value='other'>Other</option>
                    </select>
                <label>Species: </label>	                
                    <input text='text' name='species' placeholder='Species'/>	                
                <label>Location:  </label>	               
                    <input type="text" class='location' placeholder='Location'/>	                
                <label>Time of Day: </label>	
                <input text='text' name='time' placeholder='6:00 am'/>	
                <label># of Fish: </label>	
                <input text='text' name='fishCount' placeholder='20'/>	
                <button type='submit'>Next</button>	                
            </form>	            
        </div>	       
    )
}
export default AddLogForm;