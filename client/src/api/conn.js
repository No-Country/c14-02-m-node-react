const API_BASE = "https://localhost:3000/api";
const USER_DATA = `${API_BASE}/user`;
const PUBLICATION_DATA = `${API_BASE}/publication`;
// const PHOTO_DATA = `${API_BASE}/photo`

const fetchData = async entity => {
	try {
		const response = await fetch(entity);
		if (!response.ok)
			throw new Error(`La solicitud falló con el código de estado ${response.status}`);
		const data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		console.log(`Ocurrió un error: ${error.message}`);
	}
};

const userData = fetchData(USER_DATA);
const publicationData = fetchData(PUBLICATION_DATA);
// const photoData = fetchData(PHOTO_DATA)

export { userData, publicationData };
