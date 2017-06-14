import React, { Component } from 'react'
import './App.css';
import './Comments.css';

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
        }

        this.addComment = this.addComment.bind(this)
    }

    addComment(ev) {
        ev.preventDefault()

        this.setState({
            comment: ev.target.value,
        })
    }

    render() {
        return (
            <div className="article-links">
                <textarea
                    placeholder="Leave a Comment"
                    value={this.state.comment}
                    onChange={this.addComment}
                >
                </textarea>
                <a className="article-link" href="#" onClick={this.addComment}>
                    <i className="fa fa-comment-o"></i>
                    <span className="article-link-text">Submit</span>
                </a>
                <ol id="comments"></ol>
            </div>
        )
    }
}

export default Comment