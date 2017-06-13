import React, { Component } from 'react'
import './App.css';

class Author extends Component {
    render() {
        return (
            <div className="avatar">
                <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
                <div className="author-info">
                    <p className="author-name">By Domri, son of Flug</p>
                    <p className="date">on 28 April, 3018 of the Third Age</p>
                </div>
            </div>
        )
    }
}

export default Author