import React from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth';


class FriendForm extends React.Component {
    state = {
        newFriend: []
    };

    handleChange = e => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value,
                id: Math.random()
            }
        });
    };

    submit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', this.state.newFriend)
            .then(res => {
                console.log("AXIOS - FRIENDS PUT RESPONSE: ", res)
                // localStorage.setItem("token", res.data.payload);
                this.props.history.push('/friends');
            })

            .catch(err => {
                console.log(err);
            })

    };

    render () {
        return (
                <div>
                    <form onSubmit={this.submit}>
                        <div>
                            <label>Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name"
                                value={this.state.newFriend.name}
                                onChange={this.handleChange}
                            />
                            <label>Age:</label>
                            <input 
                                type="age" 
                                name="age" 
                                placeholder="Age"
                                value={this.state.newFriend.age}
                                onChange={this.handleChange}
                            />
                            <label>Email:</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email"
                                value={this.state.newFriend.email}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button>Add New Friend</button>
                    </form>
                </div>
        );
    }
}

export default FriendForm;