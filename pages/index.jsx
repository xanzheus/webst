import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Home() {
  return (
		<>
			<Head>
				<title>Charliewave - Homepage</title>
			</Head>
			<Navbar />
			<section className='hero'>
				<div className='container'>
					<div className='text-wrapper'>
						<h1 className='title'>Increase your server's activity easily!</h1>
						<p className='description'>
							Charliewave is an experienced multipurpose bot that has a ton of
							features you will enjoy using.
						</p>

						<a
							target='_blank'
							href='https://discord.com/oauth2/authorize?client_id=772497789561208872&permissions=1916267615&scope=bot'
							className='cta'>
							Invite
						</a>
					</div>

					<div className='image-wrapper'>
						<img className='logo-opacity' src='/favicon.ico' alt='Logo' />
					</div>
				</div>
			</section>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#24e64e'
					fill-opacity='1'
					d='M0,224L48,208C96,192,192,160,288,133.3C384,107,480,85,576,96C672,107,768,149,864,138.7C960,128,1056,64,1152,48C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
			</svg>
		</>
	);
}

export default Home;