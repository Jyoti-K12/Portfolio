import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';

function Project() {
    return (
        <section>
            <div className="container">
                <div className="text-center">
                    <h2 className="display-3 mb-5">Projects</h2>
                </div>

                {/* Swiper component */}

                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className="testimonial-card rounded-3 py-4 px-4 h-14em">
                            <div className="text-start">
                                <h5>Trakop</h5>
                                <p className="postd">  [Website + Admin Panel] (Cake PHP, JS)</p>
                                <p>
                                    Trakop is a delivery management system that enables businesses to optimize their delivery operations.


                                </p>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card rounded-3 py-4 px-4 h-14em">
                            <div className="text-start">
                                <h5>TrainByTrainer</h5>
                                <p className="postd">[website + admin panel] (Laravel Framework)</p>
                                <p>
                                    A Gym Management System is a comprehensive software solution designed to streamline and automate
                                    various administrative and operational tasks within a tness facility.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card rounded-3 py-4 px-4 h-14em">
                            <div className="text-start">
                                <h5>Loggie</h5>
                                <p className="postd">[mobile application + website + admin panel] (Laravel Framework)</p>
                                <p>
                                    A pick and drop delivery marketplace is a platform or service that connects users or businesses requiring
                                    transportation services with logistics providers.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card bg-black rounded-3 py-4 px-4 h-14em">
                            <div className="text-start">
                                <h5>RSA Trucking</h5>
                                <p className="postd">[mobile application + admin panel] (Laravel Framework)</p>
                                <p>
                                    A trucking loading and unloading software project involves creating a centralized interface that allows
                                    administrators to manage and oversee various aspects of the system.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-card bg-black rounded-3 py-4 px-4 h-14em">
                            <div className="text-start">
                                <h5>EasyFynd</h5>
                                <p className="postd"> [mobile application + admin panel] (Yii2 Framework)</p>
                                <p>
                                    A website to provide hardware services involves creating an online platform that effectively communicates
                                    the services offered, establishes trust, and makes it easy for potential customers to engage with services.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-card bg-black rounded-3 py-4 px-4 h-14em">
                            <div className="text-start">
                                <h5>Tricity job Portal</h5>
                                <p className="postd"> [website + admin panel] (PHP, MySql, AJAX, Jquery, JavaScript)</p>
                                <p>
                                    A Personal Job Portal Management System designed for HR (Human Resources) professionals would cater to
                                    the unique needs and responsibilities of HR practitioners involved in the recruitment and hiring process.
                                </p>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-card bg-black rounded-3 py-4 px-4 h-14em">
                            <div className="text-start">
                                <h5>Likey</h5>
                                <p className="postd"> [website + admin panel] (PHP, MySql, AJAX, Jquery, JavaScript)</p>
                                <p>
                                    An embedded door lock system refers to a security solution where the locking mechanism is integrated into
                                    a door and controlled by an embedded electronic system.
                                </p>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-card bg-black rounded-3 py-4 px-4 h-14em">
                            <div className="text-start">
                                <h5>Chipknock</h5>
                                <p className="postd"> [website + admin panel] (PHP, MySql, AJAX, Jquery, JavaScript, Wordpress)</p>
                                <p>
                                    A School management system facilitates efcient management of day-to-day operations, enhances
                                    communication between stakeholders, and provides valuable insights for decision-making.
                                </p>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* You can add the pagination styling here if needed */}
                <div className="testimonial-swiper-pagination position-relative mt-5 text-center"></div>
            </div>
        </section>
    )
}

export default Project