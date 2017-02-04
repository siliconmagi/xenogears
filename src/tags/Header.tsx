import Inferno from 'inferno';
import { Link } from 'inferno-router';
import Icon from '../tags/Icon';

export default function () {
  return (
    <header>
    <Link to="/">Nightshell</Link>
    <nav>
    <Link to="/blog">Blog</Link>
    <Link to="/about">About</Link>
    </nav>
    </header>
  )
}
