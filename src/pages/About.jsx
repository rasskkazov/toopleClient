import "../stylesheets/About.scss";

import black_woman from "../img/p/about_black_woman.png";
import black_woman2x from "../img/p/about_black_woman@2x.png";
import red_woman from "../img/p/about_red_woman.png";
import red_woman2x from "../img/p/about_red_woman@2x.png";
function About() {
    return (
        <div className="about">
            <div className="about__first">
                <p>
                    <span className="empty_red">Toople</span> – ваш надежный
                    партнер в мире образования! Наш сайт предоставляет{" "}
                    <span className="blue">уникальную</span> возможность{" "}
                    <span className="red">легко</span> и{" "}
                    <span className="red">быстро</span> приобрести готовые
                    домашние работы для тех, кто ценит свое{" "}
                    <span className="blue">время и комфорт</span>.
                </p>
                <picture className="about__blue-photo">
                    <img
                        src={black_woman}
                        srcSet={`${black_woman2x} 2x`}
                        alt="black_woman"
                    />
                </picture>
            </div>
            <div className="about__second">
                <p>
                    Мы предлагаем не только
                    <span className="red"> уникальные решения</span> для вашего
                    образовательного процесса, но и гарантированное{" "}
                    <span className="blue">качество</span> каждой предложенной
                    работы.
                </p>
                <picture className="about__red-photo">
                    <img
                        src={red_woman}
                        srcSet={`${red_woman2x} 2x`}
                        alt="red_woman"
                    />
                </picture>
            </div>
            <div className="about__third">
                <p>
                    <span className="red">Не тратьте время</span> на бесконечные
                    поиски информации и написание домашних заданий. У нас вы
                    получаете именно то, за что заплатили, и это качество,
                    которое <span className="blue">вы заслуживаете</span>. Наш
                    слоган говорит сам за себя: "
                    <span className="empty_blue">Плати, если ты -</span>
                    <span className="empty_red">Toople</span>!". Доверьтесь нам,
                    и учеба станет гораздо <span className="red">проще</span> и{" "}
                    <span className="red">увлекательнее</span>.
                </p>
            </div>
        </div>
    );
}
export default About;
