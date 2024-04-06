import React from 'react'

const EquipoMember = ({ member }) => {
    return (
      <div className="profile">
        <img src={member.imageUrl} alt={member.altText} />
        <h2>{member.name}</h2>
        <p>{member.role}</p>
        <p>{member.bio}</p>
      </div>
    );
  };
export default EquipoMember