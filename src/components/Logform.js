import React from 'react';

// const AddLogForm = ({props, values, errors, touched, status}) => {
//     const [logs, setLogs] = useState([]);

//     useEffect(() => {
//         status && setLogs(logs => [...logs, status])
//     }, [status] )
 const AddLogForm = () => {
return (
    <div className="log-form">
        <h2>Add New Log</h2>
        <p src='/fishpic.jpg' alt='fish picture' />
        <form className="log">
                <label>Bait: </label>	
                    <select className="dropdown">
                        <option placeholder='select'>Bait Used</option>
                        <option value='flies'>Flies</option>
                        <option value='naturalBait'>Natural Bait</option>
                        <option value='lures'>Lures</option>
                        <option value='other'>Other</option>
                    </select>
                <label>Species: </label>	                
                    <input text='text' name='species' placeholder='Species'/>	                
                <label>Location:  </label>	               
                    <input type="text" name='location' placeholder='Location'/>	                
                <label>Time of Day: </label>	
                <input text='text' name='time' placeholder='6:00 am'/>	
                <label># of Fish: </label>	
                <input text='text' name='fishCount' placeholder='20'/>	
                <button>Submit</button>	                
            </form>	
            {/* {logs.map(log => (
                <div key={log.id}>
                    <p>
                        {log.species}
                    </p>
                </div>
            ))}             */}
        </div>	       
    )
}


export default AddLogForm;