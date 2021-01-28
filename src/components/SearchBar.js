import React from 'react';
import {connect} from 'react-redux';
import {addSearchInput} from '../actions/index';
function mapDispatchToProps(dispatch){
    return{
        addSearchInput: searchInput=>dispatch(addSearchInput(searchInput))
    };
}

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            userName: []
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({searchInput: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        
        this.setState({searchInput: ''});
    }
    

         async componentDidMount() {
            const url = `https://api.github.com/users/${this.state.searchInput}`
             await fetch(url,
                {
                    headers: {
                        authorization: 'token e79f93e4dcb25120dba3c4ab491fb7dd6675941b '
                    }
                }).then(res => res.json()).then((result) => this.setState({ 
                    userName: result })
                )
        }
    
    
     
    render() {
        const{userName, searchInput} = this.state;
        return (
            <div >
                <h1>GitHub App</h1>
                <form onSubmit={this.handleSubmit}>
                <input
                    type='text'      
                    placeholder='Enter User Name'
                    value={searchInput}
                    onChange={this.handleChange}
                />
                <button type='submit'>Submit Here!</button>
                </form>
                
                <h3>Results</h3>
                    <h4>{userName.login}</h4>
                    <img
                        src={userName.avatar_url} alt='avatar'
                        width='150 px'
                        height='150 px'
                    />
                    
                        
            </div>
        );
    }
}
const Search = connect(null,mapDispatchToProps)(SearchBar);
export default Search;