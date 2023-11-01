import { useState, useEffect } from "react";

export function useFetch(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error("La solicitud ha fallado");
				}
				return response.json();
			})
			.then(data => setData(data))
			.catch(error => {
				console.error("Error al obtener datos:", error);
			});
	}, []);

	return { data };
}
