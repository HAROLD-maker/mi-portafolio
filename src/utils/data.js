import React from "react";

import javascriptIcon from '../assets/javascript.svg';
import nodeIcon from '../assets/nodejs.svg';
import reactIcon from '../assets/react.svg';

import tailwindIcon from '../assets/tailwind.png';



import dbIcon from '../assets/db.svg';
import postgressqlIcon from '../assets/postgresql.svg';
import mysqlIcon from '../assets/mysql.svg';




import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import bootrstrap from '../assets/bootstrap.svg'


import portafolio from '../assets/projects/portafolio.png';
import DOM from '../assets/projects/DOM.png';


const data = {
    name: 'Harold Enrique',
    surname: 'Montoya Barrios',
    contact:[
        {
            id: 2,
            name: 'Github',
            url: 'https://github.com/HAROLD-maker',
            img: 'https://cdn.icon-icons.com/icons2/836/PNG/512/Github_icon-icons.com_66788.png'
        },
        {
            id: 2,
            name: 'Correo electronico',
            url: 'haroldmontoya523@gmail.com',
            img: 'https://cdn.icon-icons.com/icons2/72/PNG/256/email_14410.png'
        },
        {
            id: 3,
            name: 'Numero telefonico',
            url: '3112336546',
            img: 'https://cdn.icon-icons.com/icons2/72/PNG/256/mobile_phone_14388.png'
        }
    ],
    tools:[
        {
            name: 'HTML',
            picture: html5,
            tools: []
        },
        {
            name: 'CSS',
            picture: css3,
            tools: [
                {
                    name: 'Bootstrap',
                    picture: bootrstrap
                }
            ]
        },
        {
            name: 'JavaScript',
            picture: javascriptIcon,
            tools:[
                {
                    name: 'Node.js',
                    picture: nodeIcon
                },
                {
                    name: 'React.js',
                    picture: reactIcon,
                },
                {
                    name: 'Tailwind',
                    picture: tailwindIcon,
                },
            ]
        },
        {
            name: 'Bases de datos',
            picture: dbIcon,
            tools:[
                {
                    name: 'PostgreSQL',
                    picture: postgressqlIcon
                },
                {
                    name: 'MySQL',
                    picture: mysqlIcon
                },
            ]
        },


    ],
    projects:[
        {
            name: 'Actividad DOM',
            description: 'En esta actividad se realizó un botón funcional haciendo uso del DOM.',
            github: 'https://github.com/HAROLD-maker/DOM-haroldmontoya.git',

            picture: DOM,
            tecnologies:[
                {
                    name: 'JavaScript',
                    picture: javascriptIcon
                },
                {
                    name: 'CSS',
                    picture: css3
                },
                {
                    name: 'HTML',
                    picture: html5
                },
                
            ]
        },
        {
            name: 'Portafolio',
            description: 'Este proyecto es un portafolio.',
            github: 'https://github.com/HAROLD-maker/mi-portafolio.git',

            picture: portafolio,
            tecnologies:[
                {
                    name: 'JavaScript',
                    picture: javascriptIcon
                },
                {
                    name: 'React',
                    picture: reactIcon
                },
                {
                    name: 'Tailwind',
                    picture: tailwindIcon
                },
                {
                    name: 'CSS',
                    picture: css3
                },
                {
                    name: 'HTML',
                    picture: html5
                },

            ]
        },
        


    ]
}

export { data };
