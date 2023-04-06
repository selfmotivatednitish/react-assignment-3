import React, { Component } from 'react'

export default class AgeCalculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: "",
            disabled: "disabled",
            age: null
        }
    }

    handleSubmit = (event) => {
        const dob = new Date(this.state.date)
        let d1 = dob.getDay()
        let m1 = 1 + dob.getMonth()
        let y1 = dob.getFullYear()

        const dot = new Date();
        let d2 = dot.getDay()
        let m2 = 1 + dot.getMonth()
        let y2 = dot.getFullYear()

        var dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        console.log(dob)
        console.log(dot)

        if (d1 > d2) {
            d2 += dayInMonth[m2 - 1]
            m2--;
        }
        if (m1 > m2) {
            m2 += 12;
            y2--;
        }

        let day = d2 - d1
        let month = m2 - m1
        let year = y2 - y1

        let str = year + " years, " + month + " months, and " + day + " days old"

        if (dot)
            this.setState({
                age: year >= 0 ? str : "Enter the correct DOB"
            })
        if (this.state.age !== "") {
            event.preventDefault()
        }
    }

    handleDateChange = (event) => {
        this.setState({
            date: event.target.value
        }, this.buttonFuct)
    }

    buttonFuct = () => {
        if (this.state.date !== "") {
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
                    <hr />
                    <p><b>
                        Q2. Create a class component that renders a date input and a submit button. If you input date of birth
                        in this input and submit, it should display the calculated age.
                    </b></p>
                </div>
                <div className="answer">
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <h1>Age Calculator</h1>
                        <div className="row justify-content-center">
                            <div className="col-6 mb-3">
                                <label htmlFor="date" className="form-label">Enter the valid Date of Birth: </label>
                                <input type="date" autoFocus className="form-control" id="date" onChange={(event) => this.handleDateChange(event)} />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <button type="submit" disabled={disabled} className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6">
                                <p>{this.state.age}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
