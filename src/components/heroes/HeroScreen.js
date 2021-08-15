import React from 'react';

import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {
	const { heroId } = useParams();

	const hero = getHeroById(heroId);

	if (!hero) {
		return <Redirect to='/notfoundhero' />;
	}

	const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

	return (
		<div>
			<h1>Hero Screen</h1>
			<h3>Now showing {hero.superhero}</h3>
		</div>
	);
};

export default HeroScreen;
