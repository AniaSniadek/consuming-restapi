import React from 'react';
import AddUser from './AddUser';
import ShowUsers from './ShowUsers';
//import DeleteUser from './DeleteUser';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <ShowUsers/>
                <AddUser/>
                {/* <DeleteUser/> */}
            </div>
        );
    }
}
export default App