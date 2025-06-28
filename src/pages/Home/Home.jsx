import React, { useState } from "react";
import images from '../../assets/images'

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageList = [
        { src: images.illustration1, title: "Illustration 1" },
        { src: images.illustration2, title: "Illustration 2" },
        { src: images.illustration3, title: "Illustration 3" },
        { src: images.illustration4, title: "Illustration 4" }
    ];
    return (
        <>
            <section>
                <div className="container">
                    <div className="banner rounded-4 p-5"
                        style={{
                            backgroundImage: `url(${images.banner6})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="text-content text-white py-5 my-5">
                            <p className="fs-4">
                                Full Stack Developer
                            </p>
                            <h1 className="display-1">
                                Jyoti <br /> Kumari
                            </h1>
                        </div>
                        <div className="row text-uppercase bg-black rounded-4 p-3 mt-5">
                            <div className="col-md-3">
                                <div className="d-flex align-items-center gap-4">
                                    <h2 className="display-2 text-light">
                                        5
                                    </h2>
                                    <p className="text-light-emphasis justify-content-center m-0 ls-4">
                                        Years of <br /> experience
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex align-items-center gap-4">
                                    <h2 className="display-2 text-light">
                                        20
                                    </h2>
                                    <p className="text-light-emphasis justify-content-center m-0 ls-4">
                                        E-commerce<br />Websites
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex align-items-center gap-4">
                                    <h2 className="display-2 text-light">
                                        8
                                    </h2>
                                    <p className="text-light-emphasis justify-content-center m-0 ls-4">
                                        CMS <br /> Management
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex align-items-center gap-4">
                                    <h2 className="display-2 text-light">
                                        2
                                    </h2>
                                    <p className="text-light-emphasis justify-content-center m-0 ls-4">
                                        online service <br />products
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <div className="d-flex gap-4 align-items-start">
                                <div className="icon">
                                    <div className="text-primary monitor" >
                                        <i className="fa fa-phone" style={{ fontSize: '2em' }}></i>
                                    </div>
                                </div>
                                <div className="text-md-start">
                                    <h5>
                                        Contact Me
                                    </h5>
                                    <p className="postf">
                                        +91 ********20
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex gap-4 align-items-start">
                                <div className="icon">
                                    <div className="text-primary monitor" >
                                        <i className="fa fa-envelope" style={{ fontSize: '2em' }}></i>
                                    </div>
                                </div>
                                <div className="text-md-start">
                                    <h5>
                                        Official Email
                                    </h5>
                                    <p className="postf">
                                        jyoti.ranote97@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex gap-4 align-items-start">
                                <div className="icon">
                                    <div className="text-primary monitor" >
                                        <i className=" fa-brands fa-linkedin-in" style={{ fontSize: '2em' }}></i>
                                    </div>
                                </div>
                                <div className="text-md-start">
                                    <h5>
                                        On Linkedin
                                    </h5>
                                    <p className="postf">
                                        linkedin.com/in/jyoti-ranaut/
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex gap-4 align-items-start">
                                <div className="icon">
                                    <div className="text-primary monitor" >
                                        <i className="fa fa-location-dot" style={{ fontSize: '2em' }}></i>
                                    </div>
                                </div>
                                <div className="text-md-start">
                                    <h5>
                                        Current Location
                                    </h5>
                                    <p className="postf">
                                        Mohali, Punjab
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>





            {/* <section className="portfolio py-5">
                <div className="container">
                    <div className="justify-content-center">

                        <div className="row justify-content-center">

                            <div className="col-lg-6" data-aos="fade-up">
                                <div className="section-header text-center">
                                    <h4 className="fw-bold fs-2 txt-fx slide-up">
                                        As a passionate life coach and entrepreneur, I'm dedicated to guiding you on your journey to success and
                                        fulfillment.
                                    </h4>
                                </div>
                            </div>

                            <div id="filters" className="button-group d-flex flex-wrap gap-3 justify-content-center py-5" data-aos="fade-up">
                                <a href="#" className="btn btn-primary text-decoration-none text-uppercase is-checked"
                                    data-filter=".photography">Photography</a>
                                <a href="#" className="btn btn-primary text-decoration-none text-uppercase" data-filter=".graphicdesign">Graphic
                                    Design</a>
                                <a href="#" className="btn btn-primary text-decoration-none text-uppercase"
                                    data-filter=".illustrations">Illustrations</a>
                                <a href="#" className="btn btn-primary text-decoration-none text-uppercase" data-filter=".branding">Branding</a>
                            </div>
                        </div>

                        <div>
                            <div className="grid p-0 clearfix row row-cols-2 row-cols-lg-3 row-cols-xl-4" data-aos="fade-up">
                                {imageList.map((image, index) => (
                                    <div className="col mb-4 portfolio-item photography" key={index}>
                                        <a
                                            href={image.src}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpen(true);
                                                setCurrentIndex(index);
                                            }}
                                            title={image.title}
                                        >
                                            <img
                                                src={image.src}
                                                className="img-fluid rounded-4"
                                                alt={image.title}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            
            {isOpen && (
                <Lightbox
                    mainSrc={imageList[currentIndex].src}
                    nextSrc={imageList[(currentIndex + 1) % imageList.length].src}
                    prevSrc={imageList[(currentIndex + imageList.length - 1) % imageList.length].src}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setCurrentIndex((currentIndex + imageList.length - 1) % imageList.length)}
                    onMoveNextRequest={() => setCurrentIndex((currentIndex + 1) % imageList.length)}
                />
            )}
        </div >



            <div className="text-center p-3">
                <a href="index.html" className="btn btn-outline-dark btn-lg mt-3 text-uppercase text-decoration-none">
                    View All Works
                </a>
            </div>
                    </div >
                </div >
            </section > */
            }



            {/* <section>
                <div className="container">
                    <div className="text-center pt-5">
                        <h2 className="display-3">
                            FAQs
                        </h2>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <img src={images.illustration6} className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion accordion-flush" id="accordion-flush">
                                <div className="accordion-item border mb-3 rounded-3">
                                    <h5 className="accordion-header">
                                        <button className="accordion-button collapsed" style={{ fontWeight: 'bold' }} type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            Can I use credit cards or USD for payment?
                                        </button>
                                    </h5>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion-flush" >
                                        <div className=" accordion-body">
                                            <p>Et nec ipsum tincidunt ut felis elementum proin eget dignissim egestas quis velit maecenas magnis.
                                                Etiam faucibus et ultrices sit aliquet ultrices.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border mb-3 rounded-3">
                                    <h5 className="accordion-header">
                                        <button className="accordion-button collapsed" style={{ fontWeight: 'bold' }} type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            What times are you available for calls?
                                        </button>
                                    </h5>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion-flush">
                                        <div className="accordion-body">
                                            <p>Labore accusam in modo compungi, iacentem substantiales um se sed esse haec. Labore accusam in modo
                                                compungi, iacentem substantiales um se sed esse haec.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border mb-3 rounded-3">
                                    <h5 className="accordion-header">
                                        <button className="accordion-button collapsed" style={{ fontWeight: 'bold' }} type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            How do I hire you for few months?
                                        </button>
                                    </h5>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion-flush">
                                        <div className="accordion-body">
                                            <p>Et nec ipsum tincidunt ut felis elementum proin eget dignissim egestas quis velit maecenas magnis.
                                                Etiam faucibus et ultrices sit aliquet ultrices.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border mb-3 rounded-3">
                                    <h5 className="accordion-header">
                                        <button className="accordion-button collapsed" style={{ fontWeight: 'bold' }} type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">
                                            Will I get the source files of my order?
                                        </button>
                                    </h5>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion-flush">
                                        <div className="accordion-body">
                                            <p>Et nec ipsum tincidunt ut felis elementum proin eget dignissim egestas quis velit maecenas magnis.
                                                Etiam faucibus et ultrices sit aliquet ultrices.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border mb-3 rounded-3">
                                    <h5 className="accordion-header">
                                        <button className="accordion-button collapsed" style={{ fontWeight: 'bold' }} type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                            aria-controls="collapseFive">
                                            Will I get the source files of my order?
                                        </button>
                                    </h5>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordion-flush">
                                        <div className="accordion-body">
                                            <p>Et nec ipsum tincidunt ut felis elementum proin eget dignissim egestas quis velit maecenas magnis.
                                                Etiam faucibus et ultrices sit aliquet ultrices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section > */}

            {/* <section className="py-5">
                <div className="container">
                    <div className="text-center">
                        <h2 className="display-3">
                            Latest News
                        </h2>
                        <p>
                            Accusan maiores alias conseaut equatur aut perferendi.
                        </p>
                    </div>
                    <div className="row py-4">
                        <div className="col-lg-6 p-3">
                            <div className="post-item p-3 border rounded-5">
                                <div className="row g-md-5">
                                    <div className="col-lg-5">
                                        <img src={images.postThumb1} className="img-fluid rounded-4" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p className="text-uppercase text-muted mt-3">
                                            Design / Sept 12, 2022
                                        </p>
                                        <h3>
                                            Graphic Designing Useful Tips & Best Practices
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-3">
                            <div className="post-item p-3 border rounded-5">
                                <div className="row g-md-5">
                                    <div className="col-lg-5">
                                        <img src={images.postThumb2} className="img-fluid rounded-4" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p className="text-uppercase text-muted mt-3">
                                            Design / Sept 12, 2022
                                        </p>
                                        <h3>
                                            Best way to do branding of digital products
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-3">
                            <div className="post-item p-3 border rounded-5">
                                <div className="row g-md-5">
                                    <div className="col-lg-5">
                                        <img src={images.postThumb3} className="img-fluid rounded-4" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p className="text-uppercase text-muted mt-3">
                                            Design / Sept 12, 2022
                                        </p>
                                        <h3>
                                            Top 10 graphic designs review in 2022
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-3">
                            <div className="post-item p-3 border rounded-5">
                                <div className="row g-md-5">
                                    <div className="col-lg-5">
                                        <img src={images.postThumb4} className="img-fluid rounded-4" />
                                    </div>
                                    <div className="col-lg-7">
                                        <p className="text-uppercase text-muted mt-3">
                                            Design / Sept 12, 2022
                                        </p>
                                        <h3>
                                            Graphic Designing Useful Tips & Best Practices
                                        </h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-outline-dark btn-lg mt-3 btn-color text-uppercase">
                            View All Blogs
                        </button>
                    </div>
                </div>
            </section> */}


        </>
    )
}

export default Home