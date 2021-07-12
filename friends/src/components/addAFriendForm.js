import React from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth';
import { Link } from 'react-router-dom';


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
                <form onSubmit={this.submit}>
                    <div class="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden mt-32">
                        <div class="px-4 py-8 sm:px-10">
                            <div class="relative mt-6">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-300">
                                    </div>
                                </div>
                                <div class="relative flex justify-center text-sm leading-5">
                                    <span class="px-2 text-gray-500 bg-white">
                                        Add a New Friend
                                    </span>
                                </div>
                            </div>
                            <div class="mt-6">
                                <div class="w-full space-y-6">
                                    <div class="w-full">
                                        <div class=" relative ">
                                            <input
                                                type="text"
                                                name="name"
                                                value={this.state.newFriend.name}
                                                onChange={this.handleChange}
                                                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <div class=" relative ">
                                            <input
                                                type="text"
                                                name="age"
                                                value={this.state.newFriend.age}
                                                onChange={this.handleChange}
                                                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Age" />
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <div class=" relative ">
                                            <input
                                                type="email"
                                                name="email"
                                                value={this.state.newFriend.email}
                                                onChange={this.handleChange}
                                                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div>
                                        <span class="block w-full rounded-md shadow-sm">
                                            <button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Submit
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                            <p class="text-xs leading-5 text-gray-500">
                                Lifelong friendships are just around the corner
                            </p>
                        </div>
                    </div>
                </form>
                <div className='space'>
                    <p>empty space</p>
                    <p>empty space</p>
                    <p>empty space</p>
                    <p>empty space</p>
                    <p>empty space</p>
                </div>
            </div>
        );
    }
}

export default FriendForm;

{/* <form onSubmit={this.submit}>
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
</form> */}