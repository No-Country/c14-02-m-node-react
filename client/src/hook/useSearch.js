import { useState } from "react";
import { useGetAllPublicationsQuery } from "../store/rtk-query";

export function useSearch() {
	const [searchQuery, setSearchQuery] = useState("");

	const { data: publications } = useGetAllPublicationsQuery();
	const locations = publications.map(publication => publication.location);

	const handleSearchChange = e => {
		setSearchQuery(e.target.value.toLowerCase());
	};

	const filteredLocations = locations.filter(location =>
		location.toLowerCase().includes(searchQuery)
	);

	return {
		searchQuery,
		handleSearchChange,
		filteredLocations,
	};
}
