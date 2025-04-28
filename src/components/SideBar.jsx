import Avatar from '../assets/messi.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default function SideBar() {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Samue Amorim" id='img-profile' />
            
            <p className='subtitle'>Software Developer</p>

            <div id='icons-area'>
                <button className='btn-social'>
                    <FaLinkedin className='icon-social' />
                </button>
                <button className='btn-social'>
                    <FaGithub className='icon-social' />
                </button>
                <button className='btn-social'>
                    <FaInstagram className='icon-social' />
                </button>
            </div>

            <div id='infouser-area'>
                <ul id='list-infouser'>
                    <li className='user-info'>
                        <button className="icon">
                            <FaPhone className='icon-phone' />
                        </button>
                        <div className='text-info'>
                            <h3 className='label-info'>Telefone</h3>
                            <h2 className='info'>(86)99999-9999</h2>
                        </div>
                    </li>
                    <li className='user-info'>
                    <button className="icon">
                            <MdEmail className='icon-email' />
                        </button>
                        <div className='text-info' >
                            <h3 className='label-info'>Email</h3>
                            <h2 className='info'>samuel@email.com</h2>
                        </div>
                    </li>
                    <li className='user-info'>
                    <button className="icon">
                            <FaLocationDot className='icon-loc' />
                        </button>
                        <div className='text-info'>
                            <h3 className='label-info'>Localização</h3>
                            <h2 className='info'>Teresina - PI</h2>
                        </div>
                    </li>
                </ul>
            </div>

            <button className='btn-download'>
                <h2>Download</h2>
            </button>
        </aside>
    )
}