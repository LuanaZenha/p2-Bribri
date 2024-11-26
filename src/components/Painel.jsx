import styled from "styled-components";

const ContainerPainel = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  
`;

const Card = styled.div`
  width: 320px;
  height: 500px;
  border-top-right-radius: 120px;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 30px;
  overflow: hidden;
  border: 8px solid #e94747;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: background-color 0.5s ease, transform 0.5s ease; /* Melhorando a transição */
  
  background: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)); /* Gradiente suave */
  
  &:hover {
    transform: scale(1.05); /* Pequeno efeito de zoom para chamar atenção */
  }

  &:hover ${() => Cover} {
    right: 0;
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  right: -100%;
  position: absolute;
  background-color: rgba(199, 30, 30, 0.418);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: right 0.5s ease;
`;

const ImgCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Titulo = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 500;
  padding: 30px;
`;

const Details = styled.p`
  text-transform: capitalize;
  font-size: 17px;
  font-weight: 300;
  padding: 0 30px;
`;

const Painel = () => {
  return (
    <ContainerPainel>
      <Card>
        <ImgCard
          src="https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Painel/belezas.jpeg?raw=true"
          alt="Belezas"
        />
        <Cover>
          <Titulo>Belezas</Titulo>
          <Details>
            Venha conhecer as belezas e a biodiversidade no município de Maricá. Dentre as diversas opções temos:
          </Details>
          <Details>- Praias</Details>
          <Details>- Cachoeiras</Details>
          <Details>- Trilhas</Details>
        </Cover>
      </Card>
      <Card>
        <ImgCard
          src="https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Painel/desenvolvimento.jpeg?raw=true"
          alt="Desenvolvimento"
        />
        <Cover>
          <Titulo>Desenvolvimento</Titulo>
          <Details>
            Venha ver o que Maricá tem oferecido de melhor para a sociedade. Dentre as diversas opções temos:
          </Details>
          <Details>- Centros de Esportes</Details>
          <Details>- Grandes Escolas</Details>
          <Details>- Galpão Tecnológico</Details>
        </Cover>
      </Card>
      <Card>
        <ImgCard
          src="https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/Painel/historia.png?raw=true"
          alt="História"
        />
        <Cover>
          <Titulo>História</Titulo>
          <Details>
            Venha conhecer a rica história do Município de Maricá. Dentre as diversas opções temos:
          </Details>
          <Details>- Museus</Details>
          <Details>- Igrejas</Details>
          <Details>- Centros Culturais</Details>
        </Cover>
      </Card>
    </ContainerPainel>
  );
};

export default Painel;
