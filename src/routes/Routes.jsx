import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../page/Home'
import Songs from '../page/Songs'
import Search from '../page/Search'

const Routes = (props) => {
    const { getSongDetail, loader, setLoader } = props
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list-songs" component={() => <Songs getSongDetail={getSongDetail} loader={loader} setLoader={setLoader} />} />
            <Route exact path="/search" component={Search} />
        </Switch>
    )
}

export default Routes
