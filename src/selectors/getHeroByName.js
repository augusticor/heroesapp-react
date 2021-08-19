import { heroes } from '../data/heroes';

export const getHeroByName = (name) => {
	if (name.length < 1) {
		return [];
	}

	name = name.toLowerCase();

	return heroes.filter((hero) => {
		return hero.superhero.toLowerCase().includes(name) || hero.alter_ego.toLowerCase().includes(name) || hero.characters.toLowerCase().includes(name);
	});
};
