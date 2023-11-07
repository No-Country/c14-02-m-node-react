import React, { useState } from 'react';
import { BiSolidChevronLeft } from "react-icons/bi";
import { Link } from 'react-router-dom';

const TeamMembers = [
  {
    id: 1,
    name: 'Cecilia Alsina',
    title: 'Project Manager',
    image: 'https://i.ibb.co/gw2vm8D/Ceci.jpg',
    stack: 'Project Manager | Programmer | Open Innvation | FullStack | Java | Html | React | JavaScript',
  },
  {
    id: 2,
    name: 'Vanessa Sánchez',
    title: 'Frontend',
    image: 'https://i.ibb.co/bm3RXPP/Vane.jpg',
    stack: 'HTML | CSS | Java | JavaScript | React',
  },
  {
    id: 3,
    name: 'Ivana Carmona',
    title: 'FullStack',
    image: 'https://i.ibb.co/vZH0s5f/Iva.jpg',
    stack: 'Full Stack Developer | NodeJs | Javascript | React-Redux | Express | PostgreSQL | MongoBD| TypeScript| Bootstrap | Css | Html ♥️ Siempre aprendiendo | En busca de nuevos desafíos.',
  },
  {
    id: 4,
    name: 'Emiliano Brizuela',
    title: 'FullStack',
    image: 'https://i.ibb.co/b21Lm62/Emi.png',
    stack: 'Desarrollador Full Stack | HTML | CSS | JavaScript | React | MongoDB | NodeJS',
  },
  {
    id: 5,
    name: 'Jorge Lozano',
    title: 'FullStack',
    image: 'https://i.ibb.co/TPtNtvw/Yo.jpg',
    stack: 'Full-Stack Developer en SoyHenry | Testing/QA en Codo a Codo | React.js | JavaScript | Node.js | Postgres | Firebase | MongoDB | Tailwind | Redux | Express.js',
  },
  {
    id: 6,
    name: 'Tiziano Mina',
    title: 'Frontend',
    image: 'https://i.ibb.co/C7Z6pb0/Tizi.png',
    stack: 'Desarrollador Web FrontEnd | React | Redux | JavaScript | Tailwind',
  },
  {
    id: 7,
    name: 'Mateo Corsi',
    title: 'Frontend',
    image: 'https://i.ibb.co/dccqpRK/Mateo.jpg',
    stack: 'Desarrollador Web FrontEnd React.js | JavaScript | HTML5 | css3 | Figma',
  },
  {
    id: 8,
    name: 'Victor Araya',
    title: 'Backend',
    image: 'https://i.ibb.co/9hmsLx9/Victor.jpg',
    stack: 'FullStack | JavaScript | Express.js | Desarrollo de aplicaciones web | API RESTful | Análisis de sistemas',
  },
];

const TeamMemberPopup = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 max-w-md mx-auto rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          X
        </button>
        <div className="flex flex-col items-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-64 h-64 rounded-full border-4 border-gray-500 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
          <p className="text-gray-600">{member.title}</p>
          <p className="mt-4 text-blue-600">{member.stack}</p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleClosePopup = () => {
    setSelectedMember(null);
  };

  return <div>
<div className="flex items-center">
  <Link to="/" className="text-4xl text-white bg-red-500 w-8 h-8 flex items-center justify-center rounded-lg m-4">
    <BiSolidChevronLeft />
  </Link>
  <h2 className="w-full text-3xl font-bold text-center mb-4 font-['Oxygen'] text-blue-900">Nuestro Equipo de Desarrollo</h2>
</div>



  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" style={{ margin: '2rem' }}>
    {TeamMembers.map((member) => (
      <div
        key={member.id}
        className="bg-gray-100 p-4 shadow-xl rounded-xl transition transform hover:scale-105 cursor-pointer m-4"
        onClick={() => handleMemberClick(member)}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-500 mx-auto my-auto"
        />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="text-gray-600">{member.title}</p>
        </div>
      </div>
    ))}
  </div>
  {selectedMember && (
    <TeamMemberPopup member={selectedMember} onClose={handleClosePopup} />
  )}
</div>

};

export default Team;

