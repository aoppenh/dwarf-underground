import React, { Component } from 'react'
import './App.css';
import './Comments.css';

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
            comments: [],
        }

        this.updateComment = this.updateComment.bind(this)
        this.addComment = this.addComment.bind(this)
    }

    updateComment(ev) {
        ev.preventDefault()

        this.setState({
            comment: ev.target.value,
        })
    }

    addComment(ev) {
        ev.preventDefault()

        const state = {...this.state}
        const comment = {
            time: new Date(),
            text: state.comment,
        }

        state.comments.push(comment)
        this.setState(state)
    }

    render() {
        return (
            <div className="article-links">
                <textarea
                    placeholder="Leave a Comment"
                    value={this.state.comment}
                    onChange={this.updateComment}
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