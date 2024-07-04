import React from "react";

function SkillIcon({ icon, nameIcon, widSkill }) {
  return <img src={icon} width={widSkill} height={50} alt={nameIcon} />;
}

export default SkillIcon;
