import {expect} from 'chai';
import {List} from 'immutable';

describe('immutability', () => {
	describe('a tree', () => {

		// helper function to return new state after some change (adding movie)
		function addMovie(currentState, movie) {
			return currentState.update('movies', movies => movies.push(movie));
		}

		it('is immutable', () => {
			// variables scoped to this block using 'let'
			let state = Map({
				movies: List.of('Trainspotting', '28 Days Later')
			});
			let nextState = addMovie(state, 'Sunshine');

			expect(nextState).to.equal(Map({
				movies: List.of(
					'Trainspotting',
					'28 Days Later',
					'Sunshine'
				)
			}));
			expect(state).to.equal(Map({
				movies: List.of(
					'Trainspotting',
					'28 Days Later'
				)
			}));				
		});
	});
});
