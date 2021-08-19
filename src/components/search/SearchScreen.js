import React, { useMemo } from 'react';

import HeroeCard from '../heroes/HeroeCard';

import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';

import { getHeroByName } from '../../selectors/getHeroByName';

import { parse } from 'query-string';

const SearchScreen = ({ history }) => {
	const { search } = useLocation();
	const { hero: queryHero = '' } = parse(search);

	const [{ superhero }, handleInputChange] = useForm({ superhero: queryHero });

	const foundHeroes = useMemo(() => getHeroByName(queryHero), [queryHero]);

	const handleSearch = (e) => {
		e.preventDefault();

		if (superhero.length < 1) {
			return;
		}

		history.push(`?hero=${superhero}`);
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
							<label htmlFor='superhero'>Superhero name or alter ego or characters</label>
							<input
								autoComplete='off'
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
					<h4>Results {foundHeroes.length}</h4>
					<hr />

					{queryHero === '' && <div className='alert alert-info'>Search a hero !</div>}

					{queryHero !== '' && foundHeroes.length === 0 && <div className='alert alert-warning'>No heroes found :</div>}

					{foundHeroes.map((hero) => {
						return (
							<div key={hero.id} className='animate__animated animate__fadeIn'>
								<HeroeCard {...hero} />
								<hr />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SearchScreen;
