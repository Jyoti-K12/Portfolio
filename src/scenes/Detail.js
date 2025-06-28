import React from 'react'
import Images from '../assets/Images'

function Detail() {
    return (
        <div className="card-container bg-black" id="team">
            <div className="container-fluid px-3 py-3">
                <div className="row center mx-4 my-4 text-white">
                    <h2>Meet Our Expert</h2>
                    <p>Highly professional team</p>
                </div>
                <div className="row mb-5">
                    <div className="col">
                        <div className="card" >
                            <img src="https://img.freepik.com/free-vector/work-time-concept-illustration_114360-1474.jpg?w=740&t=st=1667038053~exp=1667038653~hmac=7f51a4d7c9f7dc9e0e3a6d53d45f381fc455e5424bcc36a0bedca65db24487e7" className="card-img-top" style={{ height: '300px' }} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Martina doena</h5>
                                <p className="card-text">Highly proficient in Web3 and AI and professional in Designing Websites with tools of Web3.0.</p>
                                <a href="#" className="btn org-btn">Learn More.</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src="https://img.freepik.com/free-vector/work-time-concept-illustration_114360-1074.jpg" className="card-img-top" style={{ height: '300px' }} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Zaid S.</h5>
                                <p className="card-text">A professional web designer with a wealth of knowledge about the web Development and Software Development. </p>
                                <a href="#" className="btn org-btn">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src="https://img.freepik.com/free-vector/teaching-concept-illustration_114360-1708.jpg?w=740&t=st=1667038099~exp=1667038699~hmac=d144ede4a891a4bfcb57b109cc26614850ed35f5260bbf32541845325c476dbb" className="card-img-top" style={{ height: '300px' }} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Jhon Doe</h5>
                                <p className="card-text">Expert in all aspects of coding and knowledgeable about a wide range of coding languages</p>
                                <a href="#" className="btn org-btn">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail