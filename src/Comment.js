import React, { Component } from 'react'
import './App.css';

class Comment extends Component {
    render() {
        return (
            <div className="article-links">
                <textarea placeholder="Leave a Comment"></textarea>
                <a className="article-link" href="#">
                    <i className="fa fa-comment-o"></i>
                    <span className="article-link-text">Submit</span>
                </a>
            </div>
        )
    }
}

export default Comment