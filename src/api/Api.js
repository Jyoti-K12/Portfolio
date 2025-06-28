import React, { Component } from 'react'

export default class Api extends Component {
    fetchList() {
        fetch('https://dummyjson.com/posts?skip=5&limit=10')
            .then(response => response.json())  // Convert the response to JSON
            .then(json => {
                console.log('json', json);

                // Assuming 'list' is an array property in your component state
                this.setState({
                    list: json
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }
}
