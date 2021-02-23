import './App.css';
import Stars from './static/spaceFlight.mp4'
import Wendys from './components/Wendys'

function App() {
  return (
    <div className="App">
      {/* VIDEO */}
			<video 
				autoPlay
				loop
				muted
				style={{
					position: 'absolute',
					objectFit: 'cover',
					top: 0,  
					left: 0,
					height: '225vh', 
					width: '100%',
					zIndex: -1000
				}}
			>
				<source src={Stars} type='video/mp4' />
			</video>

      {/* <Navbar/> */}
      <Wendys />
      
    </div>
  );
}

export default App;
