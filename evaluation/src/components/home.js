import React from "react";
import Details from './details.js';
import ImgThumb from './img.js';
import { Link } from 'react-router-dom';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alldata: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/bvc', {
            method: 'get'
        }).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                alldata: data
            });
        }).catch(function (err) {
            console.log("nothing" + err);
        });
    }
    render() {
        return (
            <div>
                <div className="container" id="gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Gallery</h1>
                        </div>
                        {this.state.alldata.map(item => <ImgThumb key={item.id} obj={item} />)}
                        <Link to="/details/{key}" />

                    </div>
                </div>
            </div>
        );
    }
}
