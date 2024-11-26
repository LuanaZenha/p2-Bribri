import styled from "styled-components";

const HeaderMenu = styled.header`
  background-color: rgba(
    201,
    52,
    52,
    0.733
  ); /* Cor do fundo do menu com opacidade */
  color: white;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  display: flex;
  letter-spacing: 0;
  position: fixed; /* Fixa o menu no topo */
  top: 0;
  left: 0;
  width: 100%; /* O menu ocupa toda a largura da tela */
  z-index: 10; /* Garante que o menu fique acima da imagem */
  padding: 1em 0; /* Espaçamento vertical para o menu */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  font-weight: bold;
`;

const Logo = styled.div`
  background-image: url("./src/assets/KapitourHeader.png");
  background-size: cover;
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 50px;
  font-weight: bold;
`;

const HeaderBtn = styled.a`
  background-color: transparent;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  align-items: center;
  vertical-align: center;
  border-radius: 5px;
  margin: 0 10px;
  font-weight: bold;

  &:hover {
    letter-spacing: 3px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

const LoginBtn = styled.a`
  background-color:rgba(201, 52, 52, 0.884);
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  align-items: center;
  vertical-align: center;
  border-radius: 10px;
  margin: 0 10px;
  font-weight: bold;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, letter-spacing 0.3s ease, text-shadow 0.3s ease;

  &:hover {
    letter-spacing: 3px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.1)
  }
`;


const PainelImg = styled.div`
  position: relative;
  width: 100%;
  height: 500px; /* Garante que a imagem ocupe toda a altura da tela */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0; /* Remove o margin-top para começar do topo */
`;

const PainelImg1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("./src/assets/BackgroundHeader.png");
  background-size: cover;
  background-position: center;
  z-index: 1;
  opacity: 0.9;
`;

const PainelImg2 = styled.div`
  position: relative;
  background-image: url("./src/assets/KapitourMarica.png");
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 2;
  width: 50%;
  height: 70%;
`;

const Header = () => {
  return (
    <>
      <HeaderMenu>
        <Logo />
        <HeaderBtn>Rotas</HeaderBtn>
        <HeaderBtn>Contato</HeaderBtn>
        <HeaderBtn>Loja</HeaderBtn>
        <LoginBtn>Login</LoginBtn>
      </HeaderMenu>
      <PainelImg>
        <PainelImg1 />
        <PainelImg2 />
      </PainelImg>
    </>
  );
};

export default Header;
