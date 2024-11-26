import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(
    to top,
    rgba(201, 52, 52, 0) 0%,
    rgb(194, 38, 38) 8%,
    rgb(194, 38, 38) 92%,
    rgba(201, 52, 52, 0) 100%
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-weight: bold;
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
`;

const AgmLogo = styled.div`
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/agm.png?raw=true");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 40%;
  height: 60%;
  flex: 1;

  /* Garante que a área mascarada seja visível */
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover;
`;

const AgmTXT = styled.div`
  background-color: transparent;
  color: #fff;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  max-width: 400px;
  margin-bottom: 20px;
`;

const ContactBtn = styled.a`
  background-color: #fff;
  color: rgba(201, 52, 52, 0.884);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  line-height: 45px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, letter-spacing 0.3s ease,
    text-shadow 0.3s ease;

  &:hover {
    letter-spacing: 1px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }
`;

const Agm = () => {
  return (
    <Container>
      <AgmLogo />
      <SubContainer>
        <AgmTXT>
          Parceria com a AGM Associação dos Guias de Turismo de Maricá. Deseja
          fazer excursões, trilhas, escaladas, canoagem e muito mais com um
          profissional do ramo de forma segura? Entre em contato e não se
          esqueça de dizer que buscou por meio da Kapitour!
        </AgmTXT>
        <ContactBtn href="https://wa.me/5521971292030?text=Ol%C3%A1%20vim%20pela%20Kapitour%20e%20gostaria%20de%20contratar%20um%20guia%20de%20turismo!">
          Guias de Turismo
        </ContactBtn>
      </SubContainer>
    </Container>
  );
};

export default Agm;
