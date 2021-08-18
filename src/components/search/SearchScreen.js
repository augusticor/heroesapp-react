import React from 'react';

import HeroeCard from '../heroes/HeroeCard';

import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';

const SearchScreen = () => {
	const [{ superhero }, handleInputChange, resetForm] = useForm({ superhero: '' });

	let foundHeroes = [];

	const handleSearch = (e) => {
		e.preventDefault();

		if (superhero.length < 3) {
			return;
		}

		foundHeroes = getHeroByName(superhero);
		console.log(foundHeroes);

		resetForm();
	};

	return (
		<div>
			<h1>Search Screen</h1>
			<hr />
			<div className='row'>
				<div className='col-5'>
					<h4>Search form</h4>
					<hr />
					<form onSubmit={handleSearch}>
						<div className='form-group'>
							<label htmlFor='superhero'>Superhero name</label>
							<input
								value={superhero}
								onChange={handleInputChange}
								name='superhero'
								type='text'
								className='form-control'
								id='superhero'
								placeholder='Spider Man'
							/>
						</div>

						<button className='btn m-1 btn-block btn-outline-primary'>Search superhero</button>
					</form>
				</div>

				<div className='col-7'>
					<h4>Results</h4>
					<hr />
					{foundHeroes.map((hero) => {
						return (
							<>
								<HeroeCard key={hero.id} {...hero} />
								<hr />
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SearchScreen;
