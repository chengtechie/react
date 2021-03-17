
import React from 'react'

// first argument of react component is props (JSON object)

const CommentDetail = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src="https://source.unsplash.com/random" style={{width: 100, height: 100}} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
            </div>
            <div className="text">Nice post</div>
        </div>
    )
}

export default CommentDetail