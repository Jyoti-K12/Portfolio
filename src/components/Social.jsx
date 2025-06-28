import React from 'react'

function Social() {
    return (
        <div className="icon px-5 align-items-center" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            <a href="#" className="text-decoration-none">
                <div className="skype px-1">
                    <i className="fa-brands fa-skype" style={{ fontSize: '20px' }}></i>
                </div>
            </a>
            <a href="#" className="text-decoration-none">
                <div className="snapchat px-1">
                    <i className="fa-brands fa-snapchat" style={{ fontSize: '20px' }}></i>
                </div>
            </a>
            <a href="#" className="text-decoration-none">
                <div className="telegram px-1">
                    <i className="fa-brands fa-telegram" style={{ fontSize: '20px' }}></i>
                </div>
            </a>
            <a href="#" className="text-decoration-none">
                <div className="tumblr px-1">
                    <i className="fa-brands fa-tumblr" style={{ fontSize: '20px' }}></i>
                </div>
            </a>
            <a href="#" className="text-decoration-none">
                <div className="twitter px-1">
                    <i className="fa-brands fa-twitter" style={{ fontSize: '20px' }}></i>
                </div>
            </a>
            <a href="#" className="text-decoration-none">
                <div className="whatsapp px-1">
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '20px' }}></i>
                </div>
            </a>
            <a href="#" className="text-decoration-none">
                <div className="github px-1">
                    <i className="fa-brands fa-github" style={{ fontSize: '20px' }}></i>
                </div>
            </a>
            <a href="#" className="text-decoration-none">
                <div className="facebook px-1">
                    <i className="fa-brands fa-facebook" style={{ fontSize: '20px' }}></i>
                </div>
            </a>
            <a href="#" className="text-decoration-none">
                <div className="behance px-1">
                    <i className="fa-brands fa-behance" style={{ fontSize: '20px' }}></i>
                </div>
            </a>
        </div>
    )
}

export default Social