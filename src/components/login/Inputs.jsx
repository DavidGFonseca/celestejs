import "./Inputs.css";

function Inputs({ tipo, legenda, icon }) {
  return (
    <div className="input-login">
      <input type={tipo} placeholder={legenda} required />
      {icon}
    </div>
  );
}

export default Inputs;
