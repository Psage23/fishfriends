import React from 'react';
import '../App.css'

const AddLogForm = () => {


return (
    <div>
        <h2>Add a Catch</h2>
        <form>
            <label>Bait: <select value="" onChange="">
                    <option value='select'>Select</option>
                    <option value='flies'>Flies</option>
                    <option value='naturalBait'>Natural Bait</option>
                    <option value='lures'>Lures</option>
                    <option value='other'>Other</option>
                </select>
            </label>
            <label>Species:<input text='text' name='species' placeholder='Species'/></label>
            <label>Location:  <input type="text" class='location' value='Location'/></label>
            <label>Time of Day: <input/></label>

            <label># of Fish: <input/></label>
            <button type='submit'>Next</button>
        </form>
    </div>
    )
}
export default AddLogForm;