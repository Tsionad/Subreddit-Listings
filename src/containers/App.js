import React, { Component } from 'react'
import { connect } from 'react-redux'

// Import actions
import {
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../actions'

// Import components
import Navbar from '../components/Navbar'
import Posts from './Posts'

import { Dimmer, Loader } from 'semantic-ui-react'


class App extends Component {
    constructor(props) {
        super(props)

        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    handleRefreshClick() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        const { selectedSubreddit, posts, isFetching } = this.props

        return (
            <div>
            <Navbar
                    selectedSub={selectedSubreddit} 
                    handleRefreshClick={this.handleRefreshClick}
                />
                <Dimmer blurring active={isFetching}>
                    <Loader>Loading</Loader>
                </Dimmer>
                
                {posts.length > 0 &&
                    <Posts posts={posts} />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state
    const { isFetching, items: posts } = postsBySubreddit[selectedSubreddit] || { isFetching: true, items: [] }

    return {
        selectedSubreddit,
        posts,
        isFetching
    }
}

export default connect(mapStateToProps)(App)