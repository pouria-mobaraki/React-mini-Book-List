import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <h1 className="display-4 text-center">
                <i className="fas fa-book-open text-primary">
                </i> Pouria Js
                <span className="text-primary">Book</span>List
            </h1>
        )
    }
}
