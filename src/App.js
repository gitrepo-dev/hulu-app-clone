import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
const Home = React.lazy(() => import('./pages/Home'))
const Genre = React.lazy(() => import('./pages/Genre'))
const DetailPage = React.lazy(() => import('./pages/DetailPage'))
const notFount = React.lazy(() => import('./pages/notFount'))

const loading = () => (
  <div className="absolute z-10 w-screen h-screen flex items-center justify-center text-3xl bg-black">
    <span>Loading ......</span>
  </div>
)

function App() {
  return (
    <Suspense fallback={loading()} >
      <Switch>
        <Route name="home" path="/" exact={true} component={Home} />
        <Route name="genre" path="/genre/:id" exact={true} component={Genre} />
        <Route name="details" path="/genre/:slug/:id" exact={true} component={DetailPage} />
        <Route name="not-found" path="**" exact={true} component={notFount} />
      </Switch>
    </Suspense>
  );
}

export default App;
