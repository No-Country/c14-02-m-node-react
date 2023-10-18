const { ObjectId } = require('mongodb');

const isValidObjectId = (id) => ObjectId.isValid(id);

const isValidURL = (url) => {
	const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
	return urlPattern.test(url);
};

module.exports = {
	isValidObjectId,
	isValidURL,
};
