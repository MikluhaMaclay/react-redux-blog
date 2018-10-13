import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <Link to={'/' + post.id}>
                        <div className="post card" key={ post.id }>
                            <div className="card-content">
                                <span className="card-title red-text">{ post.title }</span>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </Link>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        );
        return(
            <div className="container">
                <h4 className="center">Home page</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home);