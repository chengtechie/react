
import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// use <COMPONENT /> syntax to nest a component

// props -> pass data from parent component to child component

// when nest a component, the component -> props.children

// lifecycle (functional component)
// render (return JSX)
// -> componentDidMount (initial data loading)
// -> componentDidUpdate -> render
// -> componentWillUnmount (clean up non-React stuff)

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Cheng" time="5 minutes ago"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Kim" time="10 minutes ago"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Lim" time="22 minutes ago"/>
            </ApprovalCard>
            <ApprovalCard>
                <h4>Are you sure?</h4>
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))