import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import COLORS from 'utils/colors';
import CustomChip from 'styled/chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = ({ subject, setOpen }) => {
  return (
    <div style={{
      height: '90vh', justifyContent: 'space-between',
      flexDirection: 'column', display: 'flex'
    }}>
      <Grid container p={5}>
        <Grid item xs={12}>
          <h1>Welcome</h1><hr />
        </Grid>
        <Grid item xs={12} sm={12} md={6} p={1} >
          <Card sx={{ minHeight: "310px" }}>
            <CardContent>
              <h3>What is this web about?</h3>
              <p>You will find a lot of things here, nothing that is not in the books. But, that is not certainly the most important. I wanted to expose some math concepts which are sometimes difficult to understand (like it was for me).</p>
              <p>I will try to cover topics that are great to study with a visual reference. Also, I know that all has to have mathematical strictness, so I will quote references from the book I used to create this website because I'm am not either a mathematician nor a "nerd". I am just a normal human being who wants to learn by myself, things that I couldn't learn in the university.</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} p={1} >
          <Card sx={{ minHeight: "310px" }}>
            <CardContent>
              <h3>Why is this important?</h3>
              <p>Nowadays, artificial intelligence is growing up quickly. Even a lot of people (like me) are getting worry because we are near to lose our jobs because it is so posible that we can be replaced by an algorithm. I know that some artificial intelligence can compute 1000X faster than me. Even IA can understand better all math topics than any human.</p>
              <p>It sounds bad. We can assume that it is not important to learn something new, and it makes kind of sense. But, with the time I realized that learning math goes beyond computing something in your head or approving your test. For me, learning math is a <b>rebellion</b> tool because it forces you to question yourself all the time.</p>
              <p></p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} textAlign={"center"} sx={{ backgroundColor: COLORS.lightGray, padding: "20px" }}>
          <b><cite>"Nullius in verba"</cite></b>
          <p>The Royal Society website says that the motto is "an expression of the determination of Fellows to withstand the domination of authority and to verify all statements by an appeal to facts determined by experiment.</p>
        </Grid>
        <Grid item xs={12} textAlign={"center"} mt={5}>
          <CustomChip
            label="I encourage you to explore this website!"
            sx={{ fontSize: "15pt", cursor: "pointer" }}
            color="primary"
            onClick={() => setOpen(true)}
            subject={subject}
          />
        </Grid>
      </Grid>
      <div style={{ textAlign: "center" }}>
        <IconButton aria-label="delete" onClick={() => window.open('https://www.linkedin.com/in/jhon-sanz-147593166/')}>
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => window.open('https://github.com/JhonSanz')}>
          <GitHubIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Home;