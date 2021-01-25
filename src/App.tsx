import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { TEXT_LOADING } from './config/texts';
import { Header } from './features/header/Header';

function App() {

  const ListLazy = lazy(() =>
    import(/* webpackChunkName: 'list' */ './features/list/List')
      .then(({ List }) => ({ default: List })),
  );

  const DetailLazy = lazy(() =>
    import(/* webpackChunkName: 'detail' */ './features/detail/Detail')
      .then(({ Detail }) => ({ default: Detail })),
  );

  const NotFoundLazy = lazy(() =>
    import(/* webpackChunkName: 'not-found' */ './features/not-found/NotFound')
      .then(({ NotFound }) => ({ default: NotFound })),
  );

  const HeaderView = withRouter(Header);

  return (
    <section>
      <div className='max-w-6xl mx-auto md:px-5 pt-14 md:pb-14'>

        <Suspense fallback={

          <div className='flex h-screen justify-center items-center '>
            
            <span className='comic-box2 p-5 text-xl'>
              {TEXT_LOADING}
            </span>
            
            </div>

        }>
          <Router>

            <HeaderView />

            <Switch>

              <Route exact path='/:currentPage?' component={ListLazy} />

              <Route exact path='/detail/:id' component={DetailLazy} />

              <Route path='/' component={NotFoundLazy} />

              <Redirect to='/not-found' />

            </Switch>
 
          </Router>
        </Suspense>

      </div>
    </section>
  );
}

export default App;
