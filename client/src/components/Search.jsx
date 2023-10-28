import { useState } from 'react';
import { useGetAllPublicationsQuery } from '../store/rtk-query';
// location
export const Search = () => {
	const [location, setLocation] = useState('');
	const { data, error, isLoading } = useGetAllPublicationsQuery({ location });

	// acá se debe usar un handleSubmit creo
	const handleSubmit = (e) => {
		e.preventDefault();
		setLocation(e.target.value);
	};
	console.log(location);

	return (
		<form onSubmit={handleSubmit} className="w-96 flex">
			<input onChange={handleSubmit} type="text" placeholder="Buscar alojamiento.." className="p-2 border-none rounded-l-full w-full" />
			<button onClick={handleSubmit} className="p-2 bg-red-500 text-white rounded-r-full">
				Buscar
			</button>
		</form>
	);
};
