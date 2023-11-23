import {Component} from "react";

class Comment extends Component {
    render() {
        const {id, postId, name, email, body} = this.props.comment

        return (
            <div>
                <div>id: {id}</div>
                <div>postId: {postId}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
                <hr/>
            </div>
        )
    }
}

export {
    Comment
}