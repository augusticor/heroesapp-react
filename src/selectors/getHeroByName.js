import { heroes } from '../data/heroes';

export const getHeroByName = (name) => {
	return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name.toLowerCase()));
};
