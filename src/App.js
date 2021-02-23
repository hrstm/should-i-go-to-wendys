import './App.css';
import Stars from './static/spaceFlight.mp4'
import Wendys from './components/Wendys'

import { makeStyles } from '@material-ui/core'

function App() {

const useStyles = makeStyles(theme => ({
	videoBackground: {
		position: 'absolute',
		objectFit: 'cover',
		top: 0,  
		left: 0,
		height: '225vh', 
		width: '100%',
		zIndex: -1000,

		[theme.breakpoints.down(415)]: {
			height: '380vh'
		},

		[theme.breakpoints.down(376)]: {
			height: '375vh'
		},
	}
}))

const classes = useStyles()


  return (
    <div className="App">
      {/* VIDEO */}
			<video 
				autoPlay
				loop
				muted
				className={classes.videoBackground}
			>
				<source src={Stars} type='video/mp4' />
			</video>

      {/* <Navbar/> */}
      <Wendys />
      
    </div>
  );
}

export default App;
