import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
import Game from './components/game/Game';

export default function App() {
  const [isStarted, setStarted] = useState(false);
  return (
    <>
      <div className="bar-wrapper">
        <AppBar position="relative">
          <Toolbar disableGutters>
            {isStarted &&
              <IconButton color='inherit'
              onClick={() => setStarted(false)}
              sx={{ marginLeft: '1.25rem' }}
              >
                <HomeIcon
                  fontSize='large'>
                </HomeIcon>
              </IconButton>
            }
            <Typography
              sx={{ justifyContent: 'center', flexGrow: 1, ml: isStarted ? '-4.4375rem' : '' }}
              variant="h5"
              align="center">
              Battleship
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      {isStarted ? <Game></Game> : <div className="content">
        <Button variant="contained" onClick={() => setStarted(true)}>Start</Button>
      </div>}

    </>
  )
}