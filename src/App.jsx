import { Box, Toolbar, Typography, Button, AppBar, Card, Paper, CardContent } from '@mui/material'
function App() {

  return (
    <>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'secondary.main'}}>Charlycarta</Typography>
          </Toolbar>
        </AppBar>

      <Box>
          <Card sx={{ backgroundColor: 'primary.main', margin: 2  }}>
            <CardContent>
              <Typography variant='h4' sx={{color: 'sub.main'}}>Para: Charly</Typography>
              <Typography variant='h4' sx={{color: 'sub.main'}}>De: Mikelin</Typography>

            </CardContent>
          </Card>
        <Typography marginX={'5%'}>
          <Typography variant='h2'>¡Hola!</Typography>
            <Typography>
              Hola charly, hago esta carta para desearte una feliz navidad, y tambien para decirte que
              en los ultimos 2 meses del año,te volviste una parte muy importante de mi dia a dia, tambien
              quiero recalcarte que eres una amiga muyy linda, amo hablar contigo tanto de dia como de noche,
              tambien quiero decirte que tienes muchos atributos los cuales te hacen unica y hacen que yo te
              quiera a millones porque la verdad, en el dia brillas tanto como el sol, y de noche eres la
              estrella mas brillante
            </Typography>
            <Typography marginTop={2}>
              Tambien, quiero recordarte que aunque tu me digas que "tienes" defectos sinceramente yo desde
              el principio en el que te conoci, seras siempre para mi una niña muy linda, sinceramente hay
              muchos atributos tanto fisicos como no fisicos que te hacen linda, uno de ellos es tu cabello
              corto, que la verdad es lindo, tambien me gustan mucho tus lentes, aunque tu me digas que no
              pegan, sinceramente te ves muy linda con ellos, tambien quiero decirte que eres hermosa con
              o sin maquillaje &lt;3
            </Typography>
            <Typography>
              Amo tener a una amiga que toque el piano y que sea tan parecido a mi que la quiera como una 
              hermana
            </Typography>
            <Typography marginTop={3}>
              Sinceramente eres tan linda como un atardecer, tan unica como una flor amarilla en un campo de
              flores rojas. Eres todo lo que quiero en una amistad &lt;3
            </Typography>
            
            
            <Card sx={{ backgroundColor: 'primary.main', }}>
            <CardContent>
              <h1 style={{color: 'white'}}>Sabes, siento que me gane el mundo, siendo amigos &lt;3</h1>
            </CardContent>
          </Card>    
          <Typography variant='h4' marginTop={3}>Feliz navidad a la chica de pelo corto y lentes fan #1 del terror psicologico, mas linda del mundo</Typography>   
        </Typography>



      </Box>
    </>
  )
}

export default App