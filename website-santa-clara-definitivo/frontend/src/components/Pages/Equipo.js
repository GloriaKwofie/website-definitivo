import React from 'react'
import "./Equipo.css";
import EquipoMember from './EquipoMember';
/**import EquipoData from './Members.json'**/
import EquipoData from './EquipoData'


function Equipo() {
    return (
      <div className="equipo-container">
        <h1 className='equipo-title'>Team Members</h1>
        <div className="profiles">
          {EquipoData.map((member) => (
            <EquipoMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    );
  }

export default Equipo