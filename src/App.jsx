
import project1 from "./assets/RickandMorty.png";
import project2 from "./assets/Principal.png";
import project3 from "./assets/Login.png";
import slide6 from "./assets/Signup.png";
import slide7 from "./assets/Dashboard.png";
import slide1 from "./assets/Formulario.png";
import slide2 from "./assets/Cartas.png";
import slide3 from "./assets/formulario2.png";
import slide4 from "./assets/platos.png";
import slide5 from "./assets/reserva.png";
import dev from "./assets/dev.json";
import Lottie from "lottie-react";
import "./App.css";
import { Box, Grid, Typography, Stack, Fab } from "@mui/material";
import CustomCard from "./components/CustomCard";
import { brown } from '@mui/material/colors';
import Photoshop from './assets/Photoshop.svg'
import React from './assets/react.svg'
import Selenium from './assets/Selenium.svg'
import Jira from './assets/Jira.svg'
import Notion from './assets/Notion.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

function App() {
  
  const index_card = [
    {
      id: 0,
      src: project1,
      alt: "RickandMorty",
      title: "RickandMorty",
      description:
        "Visualización y manejo de base de datos basada en api de Rick and morty",
      chip: [
        {
          id: 0,
          color: "info",
          txt: "React.js",
        },
        {
          id: 1,
          color: "error",
          txt: "Nest.js",
        },
        {
          id: 2,
          color: "warning",
          txt: "Mysql",
        },
      ],
      modal: [
        {
          src: slide1,
          title: "formulario general",
          txt: "Permite agregar un nuevo personaje a la base de datos",
        },
        {
          src: slide2,
          title: "Cartas",
          txt: "Muestra los personajes existentes",
        },
        {
          src: slide3,
          title: "formulario individual",
          txt: "Permite obtener, cambiar y/o borrar un personaje en específico",
        },
      ],
    },
    {
      id: 2,
      src: project2,
      alt: "Menu",
      title: "Restaurante",
      description:
        "Prototipo de programa para reservar, pedir y ver reservaciones",
      chip: [
        {
          id: 0,
          color: "primary",
          txt: "Java",
        },
      ],
      modal: [
        {
          src: project2,
          title: "Menú principal",
          txt: "Pantalla principal",
        },
        {
          src: slide4,
          title: "Platos",
          txt: "Permite tomar una orden",
        },
        {
          src: slide5,
          title: "Reservaciones",
          txt: "Permite hacer un guardado de reservación",
        },
      ],
    },
    {
      id: 3,
      src: project3,
      alt: "Dashboard",
      title: "InvoiceXpert",
      description:
        "Maquetación de un dashboard para una aplicación de facturación",
      chip: [
        {
          id: 0,
          color: "primary",
          txt: "Figma",
        },
      ],
      modal: [
        {
          src: project3,
          title: "Login",
          txt: "Pantalla de inicio de sesión",
        },
        {
          src: slide6,
          title: "Sign up",
          txt: "Permite crear una cuenta",
        },
        {
          src: slide7,
          title: "Dashboard",
          txt: "Pantalla principal",
        },
      ],
    },
  ];
  const media=[
    {
      link: 'https://github.com/Laloep19',
      icon: <GitHubIcon sx={{ mr: 1 }}/>,
      title: 'Github'
    },
    {
      link: 'mailto:eduardo.espinosa.perez.02@gmail.com',
      icon: <EmailIcon sx={{ mr: 1 }}/>,
      title: 'Correo'
    },
    {
      link: 'tel:+525548737929',
      icon: <SmartphoneIcon sx={{ mr: 1 }}/>,
      title: 'Telefono'
    }
  ];
  const skills=[
    {
      src: Photoshop,
      alt: "Photoshop Logo",
    },
    {
      src: Selenium,
      alt: "Selenium Logo",
    },
    {
      src: Notion,
      alt: "Notion Logo",
    },
    {
      src: React,
      alt: "React Logo",
    },
    {
      src: Jira,
      alt: "Jira Logo",
    }
  ]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        rowSpacing="2rem"
        margin="1rem 0"
        justifyContent="space-evenly"
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={6}>
          <Box margin={5}>
            <Lottie animationData={dev} loop={true} />
          </Box>
        </Grid>
        <Grid alignSelf="center" item xs={4} sm={4} md={4} marginRight={1}>
          {/* <img style={{width: '60%'}} src={img}/> */}
          <Typography style={{ color: "#daf9ff" }} variant="h3" component="h3">
            !Hola!
          </Typography>
          <Typography style={{ color: "#ffffff" }} variant="h3" component="h3">
            Soy Eduardo
          </Typography>
          <p style={{ textAlign: "justify", marginInline: "10px" }}>
            {" "}
            Me identifico como alguien que está constantemente buscando mejorar
            mis habilidades y conocimientos en el campo de la programación.
          </p>
          <p style={{ textAlign: "justify", marginInline: "10px" }}>
            {" "}
            Mi enfoque en el aprendizaje continuo me impulsa a explorar nuevas
            tecnologías y técnicas para mantenerme al tanto de las últimas
            tendencias en desarrollo de software.
          </p>
          <p style={{ textAlign: "justify", marginInline: "10px" }}>
            {" "}
            Además, mis habilidades creativas me permiten encontrar soluciones
            innovadoras y eficientes a los desafíos y problemas se van
            presentando.
          </p>
        </Grid>
      </Grid>
      <Typography
        style={{ color: "#ffffff", marginTop: "3rem" }}
        variant="h3"
        component="h4"
      >
        Proyectos
      </Typography>
      <Grid
        container
        rowSpacing="2rem"
        margin="3rem 0"
        justifyContent="space-evenly"
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {index_card.map((item) => (
          <Grid key={item.id} item xs="auto">
            <CustomCard
              modal={item.modal}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
              chips={item.chip}
            />
          </Grid>
        ))}
      </Grid>

        <Grid container rowSpacing='2rem' margin='3rem 0' justifyContent="space-evenly" columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={6}>
          <Stack alignItems='center' spacing={4}>
            <Typography style={{ color: "#ffffff" }} variant='h5' component='h5'>Habilidades</Typography>
            <Swiper
            style={{
            // backgroundColor: 'rgba(0,0,0,0.4)',
            // borderRadius: '100%',
            width: '6.5rem',
            height: '6.5rem'
            }}
            autoplay={{
              delay: 1600,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            >
              {skills.map(item=>(
                <SwiperSlide key={item.alt}>
                  <img style={{width: '6rem', filter: 'drop-shadow(0px 0px 1px #000000)'}} src={item.src} alt={item.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Stack>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Stack alignItems='center' spacing={6}>
            <Typography style={{color: "#ffffff" }} variant='h5' component='h5'>Contacto</Typography>
              <Stack  direction={{ xs: 'column', sm: 'row' }} justifyContent='center' spacing={2}>
                {
                  media.map(item=>(
                    <a key={item.title} target='_blank' href={item.link}>
                      <Fab  sx={{background: brown[500]}} variant='extended' >
                        {item.icon}
                        {item.title}
                      </Fab>
                    </a>
                  ))}
              </Stack>
          </Stack>
        </Grid>
      </Grid>
        {/* <Typography variant="body1" color="white">
          SKILLS
          <Skills />
        </Typography> */}
    </Box>
    
  )
}

export default App
