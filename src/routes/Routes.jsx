import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../page/Home'
import Songs from '../page/Songs'
import Player from '../page/Player'
import Search from '../page/Search'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list-music" component={Songs} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/player" component={Player} />
        </Switch>
    )
}

export default Routes
