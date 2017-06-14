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
        state.comment = ''
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
                {this.state.comments.map((comment, i) => <CommentShow key={i} comment={comment} />)}
            </div>
        )
    }
}

function CommentShow (props) {
    return (
        <div className="comment">
            <div>{props.comment.time.toString().substring(0, props.comment.time.toString().split('').indexOf('G'))}</div>
            <div>{props.comment.text}</div>
        </div>
    )
}

export default Comment