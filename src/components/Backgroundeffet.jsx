import styled from "styled-components";


const PainelImg = styled.div`
  position: relative;
  width: 100%;
  height: 60em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PainelImg1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/BackgroundHeader.png?raw=true");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  z-index: 1;
  opacity: 0.9;
`;

const PainelImg2 = styled.div`
  position: relative;
  background-image: url("https://github.com/Kapitour/Imgs-Padr-o/blob/main/home/KapitourMarica.png?raw=true");
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
  width: 50%;
  height: 70%;
`;

const Backgroundeffect = () => {
    return (
      <PainelImg>
        <PainelImg1 />
        <PainelImg2 />
      </PainelImg>
    );
  };

export default Backgroundeffect;