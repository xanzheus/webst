import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>Charliewave - About</title>
			</Head>
			<Navbar />
			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
			      	A fully customizable server moderation Discord bot for your Discord server that features a simple and minimalist design and configuration module for whatever you want to do. Server management just got a whole lot easier. Charliewave benefits with a simple and flexible economy feature that contains live and global values for most users and servers.
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;