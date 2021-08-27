import { Title } from '../../Components/Title/styled';
import { Paragraph } from '../../Components/Paragraph/styled';
import * as S from './styled';
import pri from './pri.jpg';

export default function About() {
  return (
    <>
      <Title>Sobre</Title>
      <S.ImgCard>
        <S.Img src={pri}></S.Img>
      </S.ImgCard>
      <Paragraph>
        Olá me chamo Priscila Roza, tudo bem? <br /> 
        Seja bem vindo ao meu CRUD feito com ReactJS usando styled components.
      </Paragraph>

      <Paragraph>
        Comecei a estudar programação em 2021. Sou aluna da Blue edtech e também estudo Análise e desenvolvimento de sistemas.
        Em breve realizarei meu sonho de entrar para o mercado de trabalho na área de tecnologia.<hr />
        Se gostou do CRUD me siga nas redes sociais abaixo </Paragraph>


      <S.SocialBlock>
        <a
          href="https://github.com/PriscilaRoza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-github"></i>
        </a>
        <a
          href="mailto:priscilarozasilva@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-mail"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/priscilaroza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="im im-linkedin"></i>
        </a>
        
      </S.SocialBlock>
    </>
  );
}
