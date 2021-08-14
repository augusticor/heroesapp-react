import React from 'react';

import HeroesList from '../heroes/HeroesList';

const DCScreen = () => {
	return (
		<div>
			<h1>DC SuperHeroes</h1>
			<hr />
			<HeroesList publisher={'DC Comics'} />
		</div>
	);
};

export default DCScreen;
