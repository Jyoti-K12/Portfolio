import React, { Component } from 'react'
import '../assets/Profile.css';
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_list: [],
            currentPage: 1,
            perPage: 10
        }
    }
    componentDidMount() {
        this.userList()
    }

    userList() {
        fetch(`https://dummyjson.com/users?skip=${(this.state.currentPage)}&limit=${this.state.perPage}`)
            .then(response => response.json())  // Convert the response to JSON
            .then(json => {


                // Assuming 'list' is an array property in your component state
                this.setState({
                    user_list: json.users
                }, () => console.log('json', this.state.user_list));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }

    handlePageChange = (newPage) => {
        this.setState({
            currentPage: newPage
        }, () => this.userList());
    };

    render() {
        const { user_list } = this.state
        return (
            <div className="content bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4"><a href="#custom-modal" className="btn btn-custom waves-effect waves-light mb-4" data-animation="fadein" data-plugin="custommodal" data-overlayspeed="200" data-overlaycolor="#36404a"><i className="mdi mdi-plus"></i> Add Member</a></div>
                    </div>

                    {/* Pagination Buttons */}
                    <div className='d-flex mb-5'>
                        <button className='btn btn-info' onClick={() => this.handlePageChange(this.state.currentPage - 1)} disabled={this.state.currentPage === 1}>
                            Previous
                        </button>
                        <p style={{ color: 'white', margin: 5 }}>Page {this.state.currentPage}</p>
                        <button className='btn btn-info' onClick={() => this.handlePageChange(this.state.currentPage + 1)}>Next</button>
                    </div>
                    <div className="row">
                        {
                            user_list?.map((user, index) =>
                                <div className="col-lg-4" key={index}>
                                    <div className="text-center card-box">
                                        <div className="member-card pt-2 pb-2">
                                            <div className="thumb-lg member-thumb mx-auto"><img src={user.image} className="rounded-circle img-thumbnail" alt="profile-image" /></div>
                                            <div className="">
                                                <h4>{user.firstName}</h4>
                                                <p className="text-muted">{user.username} <span>| </span><span><a href="#" className="text-pink">{user.email}</a></span></p>
                                                <p className="text-muted"><b>ID: </b><span className="text-dark">{"#" + user.id}</span></p>
                                                <p className="text-muted"><b>Date of Birth: </b><span className="text-dark">{user.birthDate}</span></p>
                                                <p className="text-muted"><b>Gender: </b><span className="text-dark">{user.gender}</span></p>
                                                <p className="text-muted"><b>Phone: </b><span className="text-dark">{user.phone}</span></p>
                                                <p className="text-muted"><b>Address: </b><span className="text-dark">{user.address.address}</span></p>
                                            </div>
                                            <ul className="social-links list-inline">
                                                <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                                <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                                <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a></li>
                                            </ul>
                                            <button type="button" className="btn btn-outline-info btn-rounded waves-effect w-md waves-light">Message Now</button>

                                            <div className="mt-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="mt-3">
                                                            <h4>Blood Group</h4>
                                                            <p className="mb-0 text-muted">{user.bloodGroup}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="mt-3">
                                                            <h4>Height</h4>
                                                            <p className="mb-0 text-muted">{user.height}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="mt-3">
                                                            <h4>Eye Color</h4>
                                                            <p className="mb-0 text-muted">{user.eyeColor}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>


                    {/* <div className="row">
                        <div className="col-12">
                            <div className="text-right">
                                <ul className="pagination pagination-split mt-0 float-right">
                                    <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span> <span className="sr-only">Previous</span></a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span> <span className="sr-only">Next</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>


            </div >
        )
    }
}
