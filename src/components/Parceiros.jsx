import styled from "styled-components";

// Container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-weight: bold;
`;

// Título centralizado no topo
const Title = styled.h2`
  color: #fff;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
`;

// Subcontainer para AGM e Vassouras Tec lado a lado
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Estilo dos cards
const Card = styled.div`
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Logo da AGM e Vassouras Tec (ajustada para o card)
const AgmLogo = styled.div`
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/agm.png?raw=true");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

const VassourasLogo = styled.img`
  width: 80%;
  margin-bottom: 20px;
`;

// Texto nos cards
const CardText = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
  max-width: 400px;
`;

// Botão estilizado
const ContactBtn = styled.a`
  background-color: rgba(201, 52, 52, 0.884);
  color: #fff;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, letter-spacing 0.3s ease;

  &:hover {
    letter-spacing: 1px;
    transform: scale(1.05);
  }
`;

const Parceiros = () => {
  return (
    <Container>
      <Title>Parceiros</Title>

      <RowContainer>
        {/* Card AGM */}
        <Card>
          <AgmLogo />
          <CardText>
            Parceria com a AGM Associação dos Guias de Turismo de Maricá. Deseja
            fazer excursões, trilhas, escaladas, canoagem e muito mais com um
            profissional do ramo de forma segura? Entre em contato e não se
            esqueça de dizer que buscou por meio da Kapitour!
          </CardText>
          <ContactBtn href="https://wa.me/5521971292030?text=Ol%C3%A1%20vim%20pela%20Kapitour%20e%20gostaria%20de%20contratar%20um%20guia%20de%20turismo!">
            Guias de Turismo
          </ContactBtn>
        </Card>

        {/* Card Vassouras Tec */}
        <Card>
          <VassourasLogo
            src="https://github.com/Kapitour/Imgs-Padr-o/blob/main/VassourasT%C3%A9c.png?raw=true"
            alt="Vassouras Tec"
          />
          <CardText>
            Vassouras Tec, uma incubadora tecnológica da Univassouras. Nós temos
            contrato com eles e eles auxiliam nosso projeto com inovação e
            suporte técnico.
          </CardText>
        </Card>
      </RowContainer>
    </Container>
  );
};

export default Parceiros;
