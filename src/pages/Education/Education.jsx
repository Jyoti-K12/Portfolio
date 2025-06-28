import React from 'react'
import images from '../../assets/images'

function Education() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="text-center">
                    <h2 className="display-3 mb-5">Educational Journey</h2>
                </div>
                <div className="rounded-4 p-5"
                    style={{
                        backgroundImage: `url(${images.banner5})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="row">
                        <div className="col-md-6 my-4">
                            <div className="h-100 bg-yellow2 text-white p-4 rounded-4">
                                <div className="d-flex gap-4 align-items-start">
                                    <div className="icon">
                                        <div className="text-primary monitor" >
                                            <i className="fa-solid fa-graduation-cap" style={{ fontSize: '2em' }}></i>
                                        </div>
                                    </div>
                                    <div className="text-md-start">
                                        <h5 className="text-primary">
                                            Master of Computer Application
                                        </h5>
                                        <p className="text-black">
                                            Dev Bhoomi Groups of Institute
                                        </p>
                                        <span className="postf px-2"><i className="fa fa-location-dot"></i> Naugaon, Dehradun, Uttarakhand </span>
                                        <span className="postf px-2"><i className="fa-regular fa-calendar-days"></i> 2017- 2019</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-4">
                            <div className="h-100 bg-yellow2 text-white p-4 rounded-4">
                                <div className="d-flex gap-4 align-items-start">
                                    <div className="icon">
                                        <div className="text-primary monitor" >
                                            <i className="fa-solid fa-graduation-cap" style={{ fontSize: '2em' }}></i>
                                        </div>
                                    </div>
                                    <div className="text-md-start">
                                        <h5 className="text-primary">
                                            Bachelor of Computer Application
                                        </h5>
                                        <p className="text-black">
                                            Dev Bhoomi Groups of Institute
                                        </p>
                                        <span className="postf px-2"><i className="fa fa-location-dot"></i> Naugaon, Dehradun, Uttarakhand </span>
                                        <span className="postf px-2"><i className="fa-regular fa-calendar-days"></i> 2014- 2017</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-4">
                            <div className="h-100 bg-yellow2 text-white p-4 rounded-4">
                                <div className="d-flex gap-4 align-items-start">
                                    <div className="icon">
                                        <div className="text-primary monitor" >
                                            <i className="fa-solid fa-book-open" style={{ fontSize: '2em' }}></i>
                                        </div>
                                    </div>
                                    <div className="text-md-start">
                                        <h5 className="text-primary">
                                            12th (Arts: Maths, Geography and Economics)
                                        </h5>
                                        <p className="text-black">
                                            Govt. Sen. Sec. School
                                        </p>
                                        <span className="postf px-2"><i className="fa fa-location-dot"></i> Jahu, Hamirpur, Himachal Pradesh </span>
                                        <span className="postf px-2"><i className="fa-regular fa-calendar-days"></i> 2014</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-4">
                            <div className="h-100 bg-yellow2 text-white p-4 rounded-4">
                                <div className="d-flex gap-4 align-items-start">
                                    <div className="icon">
                                        <div className="text-primary monitor" >
                                            <i className="fa-solid fa-book-open" style={{ fontSize: '2em' }}></i>
                                        </div>
                                    </div>
                                    <div className="text-md-start">
                                        <h5 className="text-primary">
                                            10th
                                        </h5>
                                        <p className="text-black">
                                            Govt. Sen. Sec. School
                                        </p>
                                        <span className="postf px-2"><i className="fa fa-location-dot"></i> Jahu, Hamirpur, Himachal Pradesh </span>
                                        <span className="postf px-2"><i className="fa-regular fa-calendar-days"></i> 2012</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education