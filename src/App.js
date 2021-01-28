import React from 'react';
import ListUsers from './components/ListUsers';
import Search from './components/SearchBar';

export default class App extends React.Component {
    render() {
        return (
          <div>
          <Search/>
          <ListUsers/>
          </div>
        )
            
                    
    }
}
