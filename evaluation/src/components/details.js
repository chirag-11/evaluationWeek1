import React from "react";
import { Link } from 'react-router-dom';
import Edit from './edit.js';
export default class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alldata: [],
            current: {},
            temp: {},
            showModal: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

            for (let i = 0; i < this.state.alldata.length; i++) {

                if (this.props.match.params.id == this.state.alldata[i].id) {
                    this.setState({ current: this.state.alldata[i] });
                    break;
                }
            }
        }).catch(function (err) {
            console.log("nothing" + err);
        });
    }
    handleClick(evt) {
        let temp1 = Object.assign({}, this.state.current);
        this.setState({
            showModal: true
        });
        this.setState({
            temp: temp1
        });

    }
    handleCloseModal(evt) {
        this.setState({
            showModal: false
        });
        let temp1 = Object.assign({}, this.state.current);
        this.setState({
            temp: temp1
        });
    }
    handleSaveClick(evt) {

        this.setState({
            showModal: false
        });
        let  temp1 = Object.assign({}, this.state.temp);

        this.setState({
            current: temp1
        });
        let  obj = this.state.temp;
        return new Promise(function (resolve, reject) {
            let  xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(xhttp.responseText);
                }
            };
            xhttp.open("POST", "http://localhost:3000/Post", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            let  data = Object.keys(obj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');

            xhttp.send(data);
        });



    }

    handleChange(evt) {
        let tt = evt.target.name;
        let val = evt.target.value;
        let temp1 = this.state.temp;
        console.log(tt + val + temp1);
        temp1[tt] = val;
        this.setState({
            temp: temp1
        });
    }

    render() {
        return (
            <div id="details">
                <div className="container">
                    <h2>Panels with Contextual Classes</h2>
                    <div className="panel-group">
                        <div className="panel panel-info">
                            <div className="panel-heading">Name Of Country</div>
                            <div className="panel-body">{this.state.current.name}</div>
                        </div>
                        <div className="panel panel-info">
                            <div className="panel-heading">Capital Of Country</div>
                            <div className="panel-body">{this.state.current.capital}</div>
                        </div>

                        <div className="panel panel-info">
                            <div className="panel-heading">Link</div>
                            <div className="panel-body">{this.state.current.imageUrl}</div>
                        </div>

                        <Edit item={this.state.temp} showModal={this.state.showModal} onSaveClick={this.handleSaveClick} onCloseModal={this.handleCloseModal} handleChange={this.handleChange} />
                        <button className="btn btn-primary" onClick={this.handleClick}>Edit</button>
                    </div>
                </div>


            </div>
        );
    }
}
