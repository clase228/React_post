import { Header } from "../../components/header";
import { Container } from "react-bootstrap";
import avatar from '../../img/avatar.jpeg'
export function AboutMe(params) {
   return(
      <Container>
         <Header></Header>
         <section>
            <h1>Обо мне</h1>
            <img src={avatar} alt="" />
            <h2>Роппель Никита Романович</h2>
            <p>Мужчина, 19 лет, родился 6 декабря 2003</p>
            <p>+996 (557) 501101 | polina.mumber@gmail.com</p>
            <h2>Web-разработчик</h2>
            <h4>КЛЮЧЕВЫЕ ПРОФЕССИОНАЛЬНЫЕ НАВЫКИ</h4>
            <ul>
               <li>- Знания процессов и инструментов web-разработки. </li>
               <li>- Продвинутые знания HTML и CSS, адаптивная верстка, практические навыки верстки. Вёрстка по БЭМ + Верстка по макетам из Figma и PSD.</li>
               <li>- Знания основ Javascript, практический опыт программирования на Javascript.</li>
               <li>- Webpack, npm умение работать со сборкой и модулями.</li>
               <li>- Работа в системе контроля версий - git.</li>
               <li>- Продвинутые знания бэкенд-разработки - Node.js, Express.js.</li>
               <li>- Основы работы с React.</li>
               <li>- Широкий кругозор в области IT и желание развиваться в данной сфере.</li>
            </ul>
         </section>
      </Container>
   )
}