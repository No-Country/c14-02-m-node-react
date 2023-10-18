import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>¡Oops! Parece que un unicornio travieso tropezó con nuestra página web. Estamos trabajando arduamente para domesticarlo y poner todo en orden. Mientras tanto, si tienes alguna pregunta urgente o necesitas ayuda, no dudes en contactarnos. ¡Gracias por tu compernsión! 🦄😅</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}