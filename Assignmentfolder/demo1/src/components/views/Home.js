import React, { Component } from 'react'


class Home extends Component {


    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid mt-6">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="card-deck">
                        <div className="card">
                            <img src="https://images.pexels.com/photos/2378540/pexels-photo-2378540.jpeg?cs=srgb&dl=art-artist-arts-and-crafts-2378540.jpg&fm=jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/2420231/pexels-photo-2420231.jpeg?cs=srgb&dl=camera-fashion-man-2420231.jpg&fm=jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/2422557/pexels-photo-2422557.jpeg?cs=srgb&dl=adventure-beach-beautiful-2422557.jpg&fm=jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default Home