import React, { Component } from 'react'
import Images from '../assets/Images';

class Listing extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <div className="card" style={{ width: '400px' }}>
                        <img className="card-img-top" src={Images.home} alt="Card image" />
                        <div className="card-body">
                            <h2 className="mt-5 theme-color-text">TITLE HEADING</h2>
                            <h5>Title description, Sep 2, 2020</h5>
                            <p>Some text..</p>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card" style={{ width: '400px' }}>
                        <img className="card-img-top" src={Images.detail} alt="Card image" />
                        <div className="card-body">
                            <h2 className="mt-5 theme-color-text">TITLE HEADING</h2>
                            <h5>Title description, Sep 2, 2020</h5>
                            <p>Some text..</p>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card" style={{ width: '400px' }}>
                        <img className="card-img-top" src={Images.contact} alt="Card image" />
                        <div className="card-body">
                            <h2 className="mt-5 theme-color-text">TITLE HEADING</h2>
                            <h5>Title description, Sep 2, 2020</h5>
                            <p>Some text..</p>
                            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Listing;