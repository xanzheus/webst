import Link from 'next/link';
import { withRouter } from 'next/router';

function Navbar() {

  return (
		<nav className='navbar'>
			<div className='container'>
				<Link href='/'>
					<a className='logo'>Charliewave.</a>
				</Link>

				<ul className='nav-links'>
					<li>
						<Link href='/'>
							<a className='nav-item'>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a className='nav-item'>About</a>
						</Link>
					</li>
					<li>
						<a
							className='nav-item'
							target='_blank'
							href='https://github.com/charliewave-me'>
							GitHub
						</a>
					</li>
					<li>
						<a
							className='nav-item'
							target='_blank'
							href='https://discord.gg/u4RRQxxhkM'>
							Support
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default withRouter(Navbar);