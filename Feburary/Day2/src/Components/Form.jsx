import React from 'react'
import './Formstyle.css'

class From extends React.Component {
    state = {
        Name: "",
        Email: "",
        Phone: "",
        Address: "",
        Password: "",
    };

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        this.setState({
            Name: "",
            Email: "",
            Phone: "",
            Address: "",
            Password: "",
        })
        this.props.onChange({
            Name: "",
            Email: "",
            Phone: "",
            Address: "",
            Password: "",
        })
    }
    render() {
        return (
            <div className="container">
                <from>
                    <input
                        className="input"
                        name="Name"
                        placeholder='Name'
                        value={this.state.Name}
                        onChange={e => this.change(e)}></input>
                    <br />
                    <input
                        className="input"
                        name="Email"
                        placeholder='Email'
                        value={this.state.Email}
                        onChange={e => this.change(e)}></input>
                    <br />
                    <input
                        className="input"
                        name="Phone"
                        placeholder='Phone'
                        value={this.state.Phone}
                        onChange={e => this.change(e)}></input>
                    <br />
                    <input
                        className="input"
                        name="Address"
                        placeholder='Address'
                        value={this.state.Address}
                        onChange={e => this.change(e)}></input>
                    <br />
                    <input
                        className="input"
                        name="Password"
                        placeholder='Password'
                        value={this.state.Password}
                        onChange={e => this.change(e)}></input>
                    <br />
                    <button className="btn" onClick={e => this.onSubmit(e)}>Submit</button>
                </from>
            </div>
        )
    }
}

export default From;