import '../css/bannerCategorias.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Paper } from '@mui/material';
import img1 from '../img/img-categorias/banner1.png';
import img2 from '../img/img-categorias/banner2.png';
import img3 from '../img/img-categorias/banner3.png';
import img4 from '../img/img-categorias/banner4.png';
import img5 from '../img/img-categorias/banner5.png';
import img6 from '../img/img-categorias/banner6.png';
import img7 from '../img/img-categorias/banner7.png';
import img8 from '../img/img-categorias/banner8.png';
import img9 from '../img/img-categorias/banner9.png';
import img10 from '../img/img-categorias/banner10.png';
import img11 from '../img/img-categorias/banner11.png';
import img12 from '../img/img-categorias/banner12.png';
import img13 from '../img/img-categorias/banner13.png';


const bannerCategorias = () => {
    return (

        <ThemeProvider
        theme={createTheme({
          breakpoints: {
            values: {
                xs:0,
                sm: 600,
                custom: 700, 
                md: 746,
                g:1000,
                lg: 1280,
                xl: 1920
            },
          },
        })}
      >

        <div >
            <Container className='feature-categoria'>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} custom={12} md={6} lg={6} order={{ xs: 1, sm: 1,  md: 1, lg: 1 }}>
                        <Paper><img src={img1} alt="" id='img-categoria' className=" img-fluid" /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} custom={12} md={6} lg={6} order={{ xs: 4, sm: 4, custom: 4, md: 2, lg: 2 }}>
                        <Paper><img src={img2} alt="" id='img-categoria' className=" img-fluid" /></Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} custom={6} md={3} lg={3} order={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
                        <Paper><img src={img3} alt="" id='img-categoria' className=" img-fluid" /></Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} custom={6} md={3} lg={3} order={{ xs: 3, sm: 2, custom: 2, md: 4, lg: 4 }}>
                        <Paper><img src={img4} alt="" id='img-categoria' className=" img-fluid" /></Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} custom={6} md={3} lg={3} order={{ xs: 5, sm: 5, md: 5, lg: 5 }}>
                        <Paper><img src={img5} alt="" id='img-categoria' className=" img-fluid" /></Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} custom={6} md={3} lg={3} order={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                        <Paper><img src={img6} alt="" id='img-categoria' className=" img-fluid" /></Paper>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={12} g={6} lg={6} order={{ xs: 1, sm: 1,  md: 1, lg: 1 }}>
                        <Paper><img src={img7} alt="" id='img-categoria' className=" img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover', cursor:'pointer' }}/></Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} custom={6} md={6} g={3} lg={3} order={{ xs: 2, sm: 2,  md: 2, lg: 2 }}>
                        <Paper><img src={img8} alt=""  id='img-categoria' className=" img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} custom={6}  md={6} g={3} lg={3} order={{ xs: 3, sm: 3,  md: 3, lg: 3 }}>
                        <Paper><img src={img9} alt="" id='img-categoria' className=" img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} custom={6}  md={6} g={3} lg={3} order={{ xs: 4, sm: 4,  md: 4, lg: 4 }}>
                        <Paper><img src={img10} alt="" id='img-categoria' className=" img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} custom={6}  md={6} g={3} lg={3} order={{ xs: 5, sm: 5,  md: 5, lg: 5 }}>
                        <Paper><img src={img11} alt="" id='img-categoria' className=" img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} custom={6}  md={6} g={3} lg={3} order={{ xs: 6, sm: 6,  md: 6, lg: 6 }}>
                        <Paper><img src={img12} alt="" id='img-categoria' className=" img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} custom={6}  md={6} g={3} lg={3} order={{ xs: 7, sm: 7,  md: 7, lg: 7 }}>
                        <Paper><img src={img13} alt="" id='img-categoria' className=" img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></Paper>
                    </Grid>

                </Grid>
            </Container>
        </div>
        </ThemeProvider>
    );
}
export default bannerCategorias;

