/* Validaciones de campos de entrada de Booking*/

const validationBooking = (data) => {
    const {publicationID, email, dateIn, dateOut} = data;
    let errors = {
        publicationID: "",
        email: "",
        dateIn: "",
        dateOut: "",
        noErrors: true,
        mensaje: ""
    }
    

    /* Validación de campo publicationID */
    if (!publicationID) {
        errors.noErrors = false;
        errors.mensaje += errors.publicationID = "ID de publicaciones es requerido";
    } 
    /* Validación de campo email */
    if (!email) {
        errors.noErrors = false;
        errors.mensaje += errors.email = "Email es requerido";
    } else if (!isValidEmail(email)) {
        errors.noErrors = false;
        errors.mensaje += errors.email = "El formato de Email no es valido";
    }
    /* Validación de campo dateIn */
    if (!dateIn) {
        errors.noErrors = false;
        errors.mensaje += errors.dateIn = "La fecha de inicial es requerida";
    }
    /* Validación de campo dateOut */
    if (!dateOut) {
        errors.noErrors = false;
        errors.mensaje += errors.dateOut = "La fecha de salida es requerida";
    }
    return errors;
}

const isValidObjectId = (str) => {
    const objectIdRegex = /^[0-9a-fA-F]{24}$/;
    return objectIdRegex.test(str);
  };

const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

module.exports = {validationBooking,isValidObjectId, isValidEmail};