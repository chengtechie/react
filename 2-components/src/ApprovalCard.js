
import React from 'react'

const ApprovalCard = props => {
    // console.log(props.children)

    // props.children is used to display whatever you include
    // between the opening and closing tags when invoking a component
    // in this case <CommentDetail /> (in index.js)


    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard