import React from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth';
import { Link } from 'react-router-dom';



class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }


    getFriends = () => {
        axiosWithAuth().get('/friends')
            .then(res => {
                console.log("AXIOS - GET RESPONSE: ", res.data)
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div> loading..
                {this.state.friends.map(friend => (
                    <div key={friend.id}>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        <p>---------------</p>
                    </div>
                )
                )}
                <div>
                  <Link to="/addfriends">+ Add a New Friend</Link>
                </div>
            </div>
        )
    }
}

export default FriendsList;