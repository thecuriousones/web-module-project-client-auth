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

    logout = () => {
        localStorage.removeItem("token");
        console.log("Logged out!");
        this.props.history.push("/");
      };

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link onClick={this.logout}>Logout</Link>
                        </li>
                    </ul>
                    <p className='websitename'>FIND-A-FRIEND</p>
                </div>
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