import React from 'react';

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

import HeroeCard from './HeroeCard';

const HeroesList = ({ publisher }) => {
	const heroes = getHeroesByPublisher(publisher);

	return (
		<div className='card-columns'>
			{heroes.map((hero) => (
				<HeroeCard key={hero.id} {...hero} />
			))}
		</div>
	);
};

export default HeroesList;
