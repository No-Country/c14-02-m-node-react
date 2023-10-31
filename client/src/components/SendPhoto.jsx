import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import style from "./SendPhoto.module.css";
import { AiOutlineCamera } from "react-icons/ai";
import Swal from "sweetalert2";

const VITE_IMGBB_KEY = import.meta.env.VITE_IMGBB_KEY;

const SendPhoto = props => {
	const [selectedFile, setSelectedFile] = useState(null);
	const fileInputRef = useRef(null);

	const handleFileChange = event => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	const handleUpload = async () => {
		if (selectedFile) {
			const formData = new FormData();
			formData.append("image", selectedFile);

			try {
				const response = await axios.post("https://api.imgbb.com/1/upload", formData, {
					params: {
						key: VITE_IMGBB_KEY,
					},
				});

				const imageUrl = response.data.data.url;

				if (props.onPhotoUpload) {
					props.onPhotoUpload(imageUrl);
				}

				Swal.fire({
					position: "top-center",
					icon: "success",
					width: 400,
					title: "Tu foto ha sido actualizada!",
					showConfirmButton: false,
					timer: 1500,
				});
			} catch (error) {
				console.error("Hubo un error al subir la imagen:", error);
			}
		}
	};

	useEffect(() => {
		if (selectedFile) {
			handleUpload();
		}
	}, [selectedFile]);

	return (
		<div className={style.contenedor}>
			<input
				type="file"
				ref={fileInputRef}
				onChange={handleFileChange}
				style={{ display: "none" }}
			/>
			<button
				onClick={() => fileInputRef.current.click()}
				className="absolute right-3 top-4 md:right-3 md:top-0 text-white p-2 bg-stone-950 rounded-full cursor-pointer"
			>
				<AiOutlineCamera />
			</button>
		</div>
	);
};

export default SendPhoto;
