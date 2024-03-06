import 
  { 
    Backdrop, 
    Box, 
    Card, 
    CardActionArea, 
    CardContent, 
    CardMedia, 
    Fade, 
    Grid, 
    Modal, 
    Typography } from '@mui/material'

import CustomChip from './CustomChip'
import { useState } from 'react'
import Slide from './CustomSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Keyboard, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import './styles.css';

function CustomCard({modal,src,alt,title,description,chips}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(214, 223, 241, 0.676)',
    backdropFilter: 'blur(10px)',
    borderRadius: '60px',
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Card sx={{ maxWidth: 345, borderRadius: '1rem', backgroundColor: 'unset'}} onClick={handleOpen}>
        <CardActionArea style={{backgroundColor: '#1E293B', color:'white'}}>
          <CardMedia
            component="img"
            height="140"
            image={src}
            alt={alt}
          />
          <CardContent >
            <Typography  gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">
              {description}
            </Typography>
          </CardContent>
          <CardContent >
          <Grid container margin='0.5rem' justifyContent="space-evenly" columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              chips.map(item=>(
                <Grid key={item.id} item color='sucess' xs='auto'>
                  <CustomChip  color={item.color} txt={item.txt}/>
                </Grid>
              ))}
          </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Swiper
              loop={true}
              keyboard={{
                enabled: true,
              }}
              grabCursor={true}
              effect={'creative'}
              creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-125%', 0, -800],
                rotate: [0, 0, -90],
              },
                next: {
                shadow: true,
                translate: ['125%', 0, -800],
                rotate: [0, 0, 90],
              },
              }}
              modules={[EffectCreative,Keyboard, Pagination]}
              className="mySwiper5"
              >
                {modal.map(item=>(
                  <SwiperSlide key={item.title}>
                          <Slide src={item.src} title={item.title} txt={item.txt} />
                  </SwiperSlide>
                ))}
          
              </Swiper>
            </Box>
          </Fade>
        </Modal>
    </>
  )
}

export default CustomCard
