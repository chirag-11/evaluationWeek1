import React from 'react';

export default class Edit extends React.Component {

    render() {
        const Show = this.props.showModal;
        return (
            <div style={{ display: Show ? 'block' : 'none' }} className="modal">

                <div id="myModal">


                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={this.props.onCloseModal} >&times;</span>
                            <h2>Edit this country </h2>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Country Name:</label>
                                <input type="text" className="form-control" name="name" value={this.props.item.name} onChange={this.props.handleChange} id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="capital">Country's Capital</label>
                                <input type="text" value={this.props.item.capital} name="capital" onChange={this.props.handleChange} className="form-control" id="capital" />
                            </div>
                            <button className="btn btn-default" onClick={this.props.onSaveClick}>Save Changes</button>
                            <button className="btn btn-default" onClick={this.props.onCloseModal}>Cancel</button>
                        </div>
                        <div className="modal-footer" />
                    </div>

                </div>



            </div>
        );
    }
}
