import React, { Component } from 'react'

export default class SignupForm extends Component {

    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            passwordErrorMessage: "",
            confrimPassword: "",
            confrimPasswordErrorMessage: "",
            disabled: "disabled",
            message: ""
        }
    }

    handleSubmit = (event) => {
        console.log("submit button pressed")

        let confErr = ""
        let passErr = ""

        let str = this.state.password
        let str1 = this.state.confrimPassword
        let len = str.length
        let numUpper = len - str.replace(/[A-Z]/g, '').length
        let numLower = len - str.replace(/[a-z]/g, '').length

        if (len < 8) passErr += "Pasword Must Contain at least 8 characters.\n"
        if (numUpper < 1) passErr += "Pasword Must Contain at least one capital letter.\n"
        if (numLower < 1) passErr += "Pasword Must Contain at least one small letter.\n"

        if (str !== str1) confErr += "Pasword should match.\n"

        this.setState({
            passwordErrorMessage: passErr,
            confrimPasswordErrorMessage: confErr
        }, () => {
            if (passErr !== "" || confErr !== "") event.preventDefault()
        })
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        }, this.buttonFuct)
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        }, this.buttonFuct)
    }

    handleConfirmPasswordChange = (event) => {
        this.setState({
            confrimPassword: event.target.value
        }, this.buttonFuct)
    }

    buttonFuct = () => {
        if (this.state.username !== "" && this.state.password !== "" && this.state.confrimPassword !== "") {
            this.setState({
                disabled: ""
            })
        }
    }

    render() {
        const { disabled } = this.state
        return (
            <div className='container'>
                <div className="question">
                    <p><b>
                        Q1.  Create a class component that renders a sign-up form. Username input, Password input, Confirm
                        Password input and a Submit button. The submit button is disabled if the fields are empty. On
                        submit, the password must contain at least 8 characters, at least one capital letter and at least one
                        small letter and the passwords must match. Any invalid entry of password should be shown as error
                        with user-readable message.
                    </b></p>
                </div>
                <div className="answer">
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <h1>Signup form</h1>
                        <div className="row justify-content-center">
                            <div className="col-6 mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" autoFocus className="form-control" id="username" onChange={(event) => this.handleUsernameChange(event)} aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6 mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" onChange={(event) => this.handlePasswordChange(event)} />
                                <div id="passwordErrorMessage" className="form-text text-danger">{this.state.passwordErrorMessage}</div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6 mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" onChange={(event) => this.handleConfirmPasswordChange(event)} />
                                <div id="confrimPasswordErrorMessage" className="form-text text-danger">{this.state.confrimPasswordErrorMessage}</div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
