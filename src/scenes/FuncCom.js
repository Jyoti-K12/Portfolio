import React, { useEffect, useState } from 'react'

const FuncCom = () => {

    /* Declaring state */

    // const [id, setId] = useState('123')
    // const [name, setName] = useState('test')
    // const [message, setMessage] = useState('msg')

    const [state, setState] = useState({
        id: '',
        name: '',
        message: ''
    })

    /* Updating State */

    function handleChange(e) {
        setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
        // setState(() => ({ [e.target.name]: e.target.value }))
    }

    /* Creating Handle Submit Function */

    const handleSubmit = (e) => {
        e.preventDefault();

        const { id, name, message } = state
        let payload = {
            id, name, message
            // id: state.id,
            // name: state.name,
            // message: state.message
        }
        console.log('payload', payload)
    }

    /* Using useEffect */

    useEffect(() => {
        //   works like componentDidMount

        // console.log('Called after return')
    }, [])

    useEffect(() => {
        // works like componentDidUpdate when you add value in dependency

        if (state.name) {
            console.log('works like componentDidUpdate', state)
        }

        // inside dependency write value on which useEffect is depended
    }, [state.name])

    useEffect(() => {

        return () => {
            // write code when page is unmounted [works like componentWillUnmount]

            console.log('Called on page unmount')
        }
    }, [])

    return (
        <div className="card-container bg-black" id="team">
            <div className="container-fluid px-3 py-3">
                <div className="row center mx-4 my-4 text-white">
                    <h2>Contact Us</h2>
                    <p>We Are Here Just For You</p>
                </div>
                <div className='form-box card'>
                    <form id="myForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>User ID </label>
                            <input
                                type="text"
                                name="id"
                                className="form-control"
                                // value={id}
                                value={state.id}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Title </label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={state.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                className="form-control"
                                value={state.message}
                                onChange={handleChange}
                            />
                        </div>
                        <br />
                        <button className='btn btn-info' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FuncCom
