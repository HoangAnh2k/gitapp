import React from 'react';

export default class ListUsers extends React.Component{
    
        state = {
            
            listRepos: [],
            listFollowers: [],
            listFollowing: [],
            isLoading: true,
            
        }
        
    
    async componentDidMount() {
        
    const urlRepos = `https://api.github.com/users/${this.props.searchInput}/repos`;
    const urlFollowers = `https://api.github.com/users/${this.props.searchInput}/followers`;
    const urlFollowing = `https://api.github.com/users/${this.props.searchInput}/following`;
     Promise.all([
        await fetch(urlRepos,
            {
                headers: {
                    authorization: 'token e79f93e4dcb25120dba3c4ab491fb7dd6675941b '
                }
            }),
        fetch(urlFollowers,
            {
                headers: {
                    authorization: 'token e79f93e4dcb25120dba3c4ab491fb7dd6675941b '
                }
            }),
        fetch(urlFollowing,
            {
                headers: {
                    authorization: 'token e79f93e4dcb25120dba3c4ab491fb7dd6675941b '
                }
            })
     ]).then(([res1, res2, res3])=>Promise.all(
         [res1.json(), res2.json(), res3.json()]))
     .then(([data1, data2, data3])=>this.setState({
             
             listRepos: data1,
             listFollowers: data2,
             listFollowing: data3,
             isLoading: false
             
        }));
       
     
}
render(){
    const {isLoading} = this.state;
    if (isLoading !== false){
        return <p>Loading...</p>
    }    
    return (
            <table>
                <thead>
                <tr>
                    <th>List Repos</th>
                    <th>List Followers</th>
                    <th>List Following</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {this.state.listRepos.map(repos=>
                            <li key={repos.id}>{repos.name}</li>)}
                    </td>
                    <td>
                        {this.state.listFollowers.map(followers=>
                            <li key={followers.id}>{followers.login}</li>)}
                    </td>
                    <td>
                        {this.state.listFollowing.map(following=>
                            <li key={following.id}>{following.login}</li>)}
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

