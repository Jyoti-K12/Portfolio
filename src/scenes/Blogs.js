import React, { Component } from 'react';


export class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.fetchList()
    }

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

    render() {
        const { list } = this.state
        return (



            <div className="card-container bg-black" id="team">
                <div className="container-fluid px-3 py-3">
                    <div className="row center mx-4 my-4 text-white">
                        <h2>Meet Our Expert</h2>
                        <p>Highly professional team</p>
                    </div>
                    <div className="row">
                        {list?.posts?.map((res, index) =>
                            <div className="col-md-3 mb-5">
                                <div className="card" style={{ height: '540px' }} >
                                    <img src={"https://picsum.photos/400/40" + index} className="card-img-top" style={{ height: '300px' }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{res.title}</h5>
                                        <p className="card-text">{res.body.substring(0, 150)}</p>
                                        <a href="#" className="btn org-btn">Learn More.</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Blogs