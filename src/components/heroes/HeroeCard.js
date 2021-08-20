import React from 'react';

import { Link } from 'react-router-dom';
import { assetsBaseUrl } from '../../data/heroes';

const HeroeCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
	return (
		<div className='card mb-4' style={{ maxWidth: 500 }}>
			<div className='row no-gutters'>
				<div className='col-md-6'>
					<img src={`${assetsBaseUrl}/${id}.jpg`} className='card-img' alt={`${superhero} from ${publisher}`} />
				</div>
				<div className='col-md-6'>
					<div className='card-body'>
						<h5 className='card-title'>{superhero}</h5>
						<p className='card-text'>{alter_ego}</p>

						{alter_ego !== characters && <p className='card-text'>{characters}</p>}
						<p className='card-text'>
							<small className='text-muted'>{first_appearance}</small>
						</p>

						<Link to={`/hero/${id}`}>More information ...</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroeCard;
