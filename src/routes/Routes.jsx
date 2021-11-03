import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loader from '../components/Loader/Loader'

import Home from '../page/Home'
import Songs from '../page/Songs'
import Search from '../page/Search'

// const Home = lazy(() => import('../page/Home'))
// const Songs = lazy(() => import('../page/Songs'))
// const Search = lazy(() => import('../page/Search'))

const Routes = () => {
    return (
        // <Suspense fallback={<Loader />}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list-songs" component={Songs} />
            <Route exact path="/search" component={Search} />
        </Switch>
        // </Suspense>
    )
}

export default Routes
