import React from 'react';
import Details from './details.js';
import { Link } from 'react-router-dom';

export default class ImgThumb extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-xs-6 thumb" >
                <Link to={"/details/" + this.props.obj.id}>
                    <div className="thumbnail" href="#" >
                        <img className="img-responsive" src={this.props.obj.imageUrl} alt="" />
                        <figcaption className="figure-caption text-right">{this.props.obj.name}</figcaption>
                    </div></Link>
            </div>
        );
    }
}