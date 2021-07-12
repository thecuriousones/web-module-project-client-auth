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
            <div className='bg-gray-200'>
                <div className='bg-white'>
                    <ul className='bg-white'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link onClick={this.logout}>Logout</Link>
                        </li>
                    </ul>
                    <p className='websitename'>FIND-A-FRIEND</p>
                </div>
                <div>
                    {this.state.friends.map(friend => (
                        <div key={friend.id} className='class'>
                            <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                                <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">

                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div class="mt-8">
                                    <p class="text-xl font-semibold my-2">{friend.name}</p>
                                    <div class="flex space-x-2 text-gray-400 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p>{friend.age}</p>
                                    </div>
                                    <div class="flex space-x-2 text-gray-400 text-sm my-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p>{friend.email}</p>
                                    </div>
                                    <div class="border-t-2"></div>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
                <div>
                    <Link to="/addfriends">+ Add a New Friend</Link>
                </div>
            </div>
        )
    }
}

export default FriendsList;
