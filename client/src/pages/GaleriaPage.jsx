import { Card } from '../components/Card';
import { dataCards } from '../data/data';
import { useGetAllPublicationsQuery, useGetAllFavoritesQuery } from '../store/rtk-query';
import { useAuth } from '../context/AuthContext';

export const GaleriaPage = () => {
	const { user } = useAuth();

	const { data: publications, error: publicationError, isLoading: isLoadingPublication } = useGetAllPublicationsQuery();
	const skipSq = !publications || isLoadingPublication || publicationError;
	const { data: dataFavorito, error: errorFavorito, isLoading: isLoadingFavorito } = useGetAllFavoritesQuery(user?.email, { skip: skipSq });

	return (
		<section className="conteinerCards flex flex-wrap w-ful p-4">
			{isLoadingPublication ? (
				<span>Cargando</span>
			) : publicationError ? (
				<span>Error</span>
			) : dataFavorito ? (
				publications.map((publications, index) => {
					// Verifica si la publicación está en dataFavorito
					const isFavorite = dataFavorito.some((userObj) => userObj.publicationId === publications._id);

					return <Card key={index} publication={publications} isFavorite={isFavorite} />;
				})
			) : (
				<span>No hay datos de publicación disponibles</span>
			)}
		</section>
	);
};
