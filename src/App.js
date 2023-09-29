import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BookIcon from '@mui/icons-material/Book';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { BrowserRouter as Router, Link, Routes, Route, Outlet} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="social" element={<Social/>}/>

        <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

function Layout(){
  return(
    <div>
      <AppBar>
        <Toolbar position="fixed">
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/social" color="inherit">Social</Button>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton href="https://blog.shootinginto.space/" color="inherit" aria-label="menu">
            <BookIcon />
          </IconButton>
          <IconButton href="https://twitter.com/AxelSparkster" color="inherit" aria-label="menu">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://github.com/AxelSparkster" color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://trello.com/b/CtYfAAPA/shootingintospace" color="inherit" aria-label="menu">
            <ViewKanbanIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: '100vh' }}>
        <Box style={{ backgroundImage: "url(/img/bg1.jpg)", backgroundSize: "cover"}} 
        sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'stretch',
        alignContent: 'center', justifyContent: 'center'}}>
          <Outlet/>
        </Box>
      </Box>
    </div>
  );
}

function Home(){
  return (
    <Card sx={{ m: 1, minWidth: 500, maxWidth: 'sm' }}>
      <CardContent>
        home
      </CardContent>
    </Card>
  );
}
function About(){
  return (
    <Card sx={{ m: 1, minWidth: 500, maxWidth: 'sm' }}>
      <CardContent>
        about
      </CardContent>
    </Card>
  );
}
function Social(){
  return (
    <Card sx={{ m: 1, minWidth: 500, maxWidth: 'sm' }}>
      <CardContent>
        social
      </CardContent>
    </Card>
  );
}
function NoMatch(){
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}