const BASE_URL = "https://www.swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				let url = `${BASE_URL}people/`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json();
				} catch (error) {
					console.log(error);
				}
			},

			getPlanets: async () => {
				let url = `${BASE_URL}planets/`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json();
				} catch (error) {
					console.log(error);
				}
			},

			getVehicles: async () => {
				let url = `${BASE_URL}vehicles/`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json();
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
