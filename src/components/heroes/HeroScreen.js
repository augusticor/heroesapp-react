import React, { useMemo } from 'react';

import { Redirect, useParams } from 'react-router-dom';

import { assetsBaseUrl } from '../../data/heroes';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = ({ history }) => {
	const { heroId } = useParams();

	const hero = useMemo(() => getHeroById(heroId), [heroId]);

	if (!hero) {
		return <Redirect to='/heronotfound' />;
	}

	const handleReturnBackToHeroes = () => {
		if (history.length <= 2) {
			history.push('/');
		} else {
			history.goBack();
		}
	};

	const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

	return (
		<div className='row mt-5'>
			<div className='col-5'>
				<img src={`${assetsBaseUrl}/${heroId}.jpg`} alt={superhero + ' from ' + publisher} className='img-thumbnail animate__animated animate__pulse' />
			</div>

			<div className='col-7'>
				<section className='border p-3'>
					<h1>{superhero}</h1>
					<ul className='list-group-flush'>
						<li className='list-group-item'>
							<b>Alter ego: {alter_ego}</b>
						</li>
						<li className='list-group-item'>
							<b>Publisher: {publisher}</b>
						</li>
						<li className='list-group-item'>First appearance on: {first_appearance} </li>
					</ul>

					<h4>Characters</h4>
					<p>{characters}</p>
				</section>

				<button className='btn btn-info mt-5' onClick={handleReturnBackToHeroes}>
					Go back
				</button>
			</div>
		</div>
	);
};

export default HeroScreen;
