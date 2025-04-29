import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export default function AboutArea() {

    const tecs = [
        {
            icon: <FaHtml5 color="#e44d26" className="icon-tec"/>,
            title: 'HTML 5',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: <FaCss3Alt color="#1572b6" className="icon-tec"/>,
            title: 'CSS 3',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: <SiJavascript color="#f0db4f" className="icon-tec"/>,
            title: 'JavaScript',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: <FaNodeJs color="#83cd29" className="icon-tec"/>,
            title: 'Node.js',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: <GrMysql color="#00618a" className="icon-tec"/>,
            title: 'MySQL',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            icon: <FaReact color="#61dafb" className="icon-tec"/>,
            title: 'React',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    ]

    const listTecs = tecs.map(tec => 
        <div id="tec">
            {tec.icon}
            <div id="tec-area-text">
                <h2 id="tec-title">{tec.title}</h2>
                <p id="tec-des">{tec.desc}</p>
            </div>
        </div>
    );


    return(
        <article id="about-area">
            <div id="area-label">
                <h1 id="text-label">Sobre</h1>
                <div id="hr"></div>
            </div>

            <p id="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo ipsam debitis perferendis accusamus atque incidunt expedita rerum soluta tempore, architecto laboriosam qui veritatis ut distinctio sunt ipsa? Voluptates, quasi.</p>

            <div id="area-label">
                <h1 id="text-label">Tecnologias</h1>
                <div id="hr"></div>
            </div>

            <div id="tec-area">
                {listTecs}
            </div>

            <div id="area-label">
                <h1 id="text-label">Projetos</h1>
                <div id="hr"></div>
            </div>

            <p id="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo ipsam debitis perferendis accusamus atque incidunt expedita rerum soluta tempore, architecto laboriosam qui veritatis ut distinctio sunt ipsa? Voluptates, quasi.</p>
        </article>
    )
}