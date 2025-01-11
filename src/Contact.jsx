import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Phone: +1234567890</p>
            <p>Address: 1234 News Street, Media City, Country</p>
            <ul>
                <li>
                    <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTelegram} /> Telegram
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} /> YouTube
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} /> Facebook
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} /> Instagram
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
