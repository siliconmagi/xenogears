// import createHistory from 'history/createHashHistory';
import Inferno from 'inferno';
// import { Provider } from 'inferno-mobx';
// import { observable } from 'mobx';
// import { Router } from 'inferno-router';
// import views from './views';
// import { dataEmail } from './stores/Api';

// We render our react app into this element
const app = document.getElementById('app');
// const history = createHistory();
// const stores = { dataEmail };

const App = () => (
  // <Provider {...stores}>
  // <Router history={history}>
  // {views}
  // </Router>
  // </Provider>
  <div>Hi live DEV</div>
)

const hmr: any = module;
if(hmr.hot) {
  hmr.hot.accept();
}

// if ('production' === process.env.ENV) {} else
// {
// const hmr: any = module;
// if (hmr.hot) {
// hmr.hot.accept();
// require('inferno-devtools');
// }
// }

Inferno.render(<App/>, app);
