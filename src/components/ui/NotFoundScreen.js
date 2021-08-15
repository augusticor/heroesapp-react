import React from 'react';

import './NotFound.css';

const NotFoundScreen = () => {
	return (
		<section className='notfound'>
			<h1 className='hero-text'>Maybe that hero is sleeping right now, try another one</h1>

			<img
				src='https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
				alt='The superhero is sleeping right now, search another'
			/>
		</section>
	);
};

export default NotFoundScreen;
