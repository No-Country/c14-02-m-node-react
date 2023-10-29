import React from "react";

function Security({ data }) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-3">Sobre la seguridad y la propiedad</h3>
      <ul className="list-none pl-0">
        <li className="mb-3">
          <strong className="font-semibold">Seguridad:</strong>
          <ul>
            {data.security.map((securityItem, index) => (
              <li key={index}>{securityItem}</li>
            ))}
          </ul>
        </li>
        <li className="mb-3">
          <strong  className="font-semibold">Seguridad Extra:</strong>
          <ul>
            {data.extra_Security.map((extraSecurityItem, index) => (
              <li key={index}>{extraSecurityItem}</li>
            ))}
          </ul>
        </li>
      </ul>
      <span className="text-lg font-semibold underline">Mostrar más</span>
    </div>
  );
}

export default Security;
