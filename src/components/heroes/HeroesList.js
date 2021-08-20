import React, { useMemo } from 'react';

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

import HeroeCard from './HeroeCard';

import './heroes-list.css';

const HeroesList = ({ publisher }) => {
	//
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
	// const heroes = getHeroesByPublisher(publisher);

	return (
		<div className='heroes-grid animate__animated animate__fadeIn'>
			{heroes.map((hero) => (
				<HeroeCard key={hero.id} {...hero} />
			))}
		</div>
	);
};

export default HeroesList;
