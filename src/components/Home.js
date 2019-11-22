import React from 'react';
import UserCard from './UserCard';


// function Home() {
// const [savedList, setSavedList] = useState([]);
// const addToSavedList = movie => {
// setSavedList([...savedList, movie]);
// }
//     return (
//         <div>
//             <SavedList list={savedList} />
//         </div>
//     )
// }

// export default Home;

function Home() {
    return (
        <div>
            <UserCard />
        </div>
    )
}

export default Home;
