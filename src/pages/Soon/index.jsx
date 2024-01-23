import "./style.css";
import OrangeLogo from "/icon.png";

function Soon() {
  return (
    <>
      <div>
        <a
          href="https://github.com/orgs/squad7-fcamara/repositories"
          target="_blank"
          rel="noreferrer"
        >
          <img src={OrangeLogo} className="logo" alt="Repositório Squad 7" />
        </a>
      </div>
      <h1>Orange Portfólio</h1>
      <p className="go-the-repositories">
        Em breve...
        <br />
        Click na logo para acessar o repositório
      </p>
    </>
  );
}

export default Soon;
