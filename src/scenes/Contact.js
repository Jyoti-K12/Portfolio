import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-validation';
class Contact extends Component {

    constructor(props) {
        super(props);

        // Initial state to store form data
        this.state = {
            id: '',
            name: '',
            message: '',
        };
    }

    // Handle input changes and update the state
    handleInputChangeTitle = (e) => {
        this.setState({ name: e.target.value });
    };

    handleInputChangeId = (e) => {

        this.setState({ id: e.target.value });
    };

    handleInputChangeMessage = (e) => {
        this.setState({ message: e.target.value });
    };

    handleChinku = (e) => {
        const inputVal = e.target.value
        const inputName = e.target.name
        this.setState({ message: inputVal })
    }

    // Handle form submission
    handleSubmit = (e) => {
        e.preventDefault();

        const { name, id, message } = this.state

        // You can perform form validation here before submitting

        // Example: Check if required fields are filled
        if (!name || !id || !message) {
            alert('Please fill in all fields');
            return;
        }

        // If validation passes, you can perform further actions (e.g., send data to a server)

        let payload = {
            title: name,
            body: message,
            userId: id,
        }

        // when key and value are same we can destructure into given below
        // let payloads = { name, message, id }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                console.log('response', response)

                // Optionally, you can clear the form after submission
                this.setState({
                    name: '',
                    id: '',
                    message: '',
                });
            })
            .catch((json) => console.log('Error', json));


    };

    componentDidMount() {
        // Initialize the jQuery Validation Plugin
        $('#myForm').validate({
            rules: {
                // Specify validation rules here
                name: 'required',
                id: {
                    required: true,
                    number: true,
                },
                message: {
                    required: true,
                    minlength: 6,
                },
            },
            messages: {
                // Specify custom error messages here
                name: 'Please enter your username',
                id: {
                    required: 'Please enter your User ID',
                    number: 'Please enter a valid ID',
                },
                message: {
                    required: 'Please enter your Message',
                    minlength: 'Your Message must be at least 6 characters long',
                },
            },
            // Handle form submission
            submitHandler: (form) => {
                // Handle the form submission logic here
                console.log('Form submitted successfully');
            },
        });
    }



    render() {
        return (
            <div className="card-container bg-black" id="team">
                <div className="container-fluid px-3 py-3">
                    <div className="row center mx-4 my-4 text-white">
                        <h2>Contact Us</h2>
                        <p>We Are Here Just For You</p>
                    </div>
                    <div className='form-box card'>
                        <form id="myForm" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>User ID </label>
                                <input
                                    type="text"
                                    name="id"
                                    className="form-control"
                                    value={this.state.id}
                                    onChange={this.handleInputChangeId}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    Title </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.handleInputChangeTitle}
                                />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    className="form-control"
                                    value={this.state.message}
                                    onChange={this.handleInputChangeMessage}
                                />
                            </div>
                            <br />
                            <button className='btn btn-info' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
