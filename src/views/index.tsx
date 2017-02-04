import Inferno from 'inferno'
import { Route } from 'inferno-router'
import Home from './Home';
import Layout from '../tags/Layout';
import Blog from './Blog';
import Article from './Article';
import Error404 from './Error404';
import About from './About';

export default (
	<Route component={ Layout }>
		<Route path="/" component={ Home } />
		<Route path="/about" component={ About } />
		<Route path="/blog" component={ Blog } />
		<Route path="/blog/:title" component={ Article } />
		<Route path="*" component={ Error404 } />
	</Route>
);
