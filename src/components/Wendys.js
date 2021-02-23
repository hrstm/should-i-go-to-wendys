import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import './Wendys.css'

import { makeStyles, Button, Grid, CircularProgress, Link } from '@material-ui/core'

import WendysLogo from '../static/wendysLogoWhite.png'
import QuestionMark from '../static/questionMark.png'
import Burger from '../static/burger.png'
import Carrot from '../static/carrot.png'


export default function Wendys() {

	// MATERIAL UI STYLES
	const useStyles = makeStyles(theme => ({

		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			margin: 20,
			marginTop: 10
		},

		titleText: {
			fontFamily: 'Amatic SC',
			fontSize: 100, 
			color: 'white',

			[theme.breakpoints.down('md')]: {
				fontSize: 80
			},

			[theme.breakpoints.down(376)]: {
        		fontSize:75
      		},
		},

		titleImage: {
			width: 295, 
			height: 'auto',

			[theme.breakpoints.down('md')]: {
				width: 260
			},		
			
			[theme.breakpoints.down('xs')]: {
				width: 200
			},
		},

		contentContainer: {
			padding: 10,
			maxWidth: 630,
			marginTop: 30,
			textAlign: 'center',
			border: '2px solid black',
			borderRadius: 5,
			color: 'white',
			background: 'rgba(46, 49, 49, 0.5)',
			minHeight: 420
		},

		fateScoreText: {
			fontSize: 50,
			fontFamily: 'Amatic SC',
			fontWeight: 'bold'
		},

		fateScoreDivider: {
			width: '95%', 
			height: 2, 
			background: 'white', 
			marginTop: 5, 
			marginBottom: 10
		},

		fateScoreContainer: {
			margin: 5,
			border: '2px solid white',
			borderRadius: 5,
			height: 40,
			width: 100,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'rgba(0,0,0,0.6)'
		},

		fateMessage: {
			marginTop: 25,
			marginBottom: 20,
			fontWeight: 'bold', 
			fontFamily: 'Amatic SC',
			fontSize: 65,

			[theme.breakpoints.down(415)]: {
				fontSize: 50
			},

			[theme.breakpoints.down(376)]: {
				fontSize: 55
			},
		},

		loading: {
			marginTop: 30,
			marginBottom: 20,
			color: '#7FE5F0', 
			fontWeight: 'bold', 
			fontFamily: 'Amatic SC',
			fontSize: 65,


			[theme.breakpoints.down(415)]: {
				fontSize: 55
			},

			[theme.breakpoints.down(376)]: {
				fontSize: 40
			},
		},

		submitButton: {
			border: '2px solid white',
			color: 'white', 
			fontWeight: 'bold', 
			fontFamily: 'Amatic SC',
			fontSize: 40,
			background: 'rgba(0,0,0,0.6)',
			padding: 15,
			marginTop: 10,
			marginBottom: 15,

			[theme.breakpoints.down(376)]: {
        		fontSize: 30
      		},
		},

		// aboutContainer : {
		// 	display: 'flex',
		// 	flexDirection: 'column',
		// 	justifyContent: 'center',
		// 	alignItems: 'center',
		// 	padding: 15,
		// 	marginBottom: 20,
		// 	marginTop: -15
		// },

		scrollerButton:{
			color: 'white', 
			fontWeight: 'bold', 
			fontFamily: 'Amatic SC',
			fontSize: 40,
			background: 'rgba(0,0,0,0.6)',
			marginTop: 5,
			marginBottom: 0,
		},

		scrollerButtonText: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: -30,
			fontSize: 40,
			color: 'white', 


			transition: 'color 100ms ease-in, font-size 100ms ease-in',

			'&:hover': {
				color: '#7FE5F0',
				fontSize: 42,
				transition: 'color 100ms ease-in, font-size 100ms ease-in',
			}
		},

		scrollerIcon: {
			color: 'white', 
			margin: 0, 
			padding: 0, 
			marginTop: -10
		},

		scrollerIconBottom: {
			color: 'white', 
			margin: 0, 
			padding: 0, 
			marginBottom: 0
		},

		aboutContainer: {
			color: 'white', 
			fontWeight: 'bold', 
			fontFamily: 'Amatic SC',
			fontSize: 40,
			background: 'rgba(0,0,0,0.6)',
			padding: 15,
			marginBottom: 20,
			marginTop: 5
		},

		aboutText:{
			textIndent: 50,
			textAlign: 'center',
			fontSize: 30,

			[theme.breakpoints.down('md')]: {
        fontSize: 25
      },

			[theme.breakpoints.down('xs')]: {
        fontSize: 25
      },
		},

		navBar: {
			marginTop: 15,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			height: 50, 
			fontFamily: 'Amatic SC',
			fontSize: 40,
			color: 'white'
		},

		navBarItem: {
			height: 50, 
			fontFamily: 'Amatic SC',
			fontSize: 40,
			color: 'white',
			transition: 'color 100ms ease-in, font-size 100ms ease-in',

			'&:hover': {
				color: '#7FE5F0',
				fontSize: 45,
				transition: 'color 100ms ease-in, font-size 100ms ease-in',
			}
		}


	}))

	const classes = useStyles()

	// INTERSECTION OBSERVER (About Section)
	useEffect(()=>{
		if(document.querySelector(".about")) {
			const myContent = document.querySelector(".about")
			const options = {
				root: null,
				threshold: 0.4
			}
			const textObserver = new IntersectionObserver( 
				function(entries, textObserver) {
				entries.forEach(entry => {
					if(!entry.isIntersecting){
						entry.target.classList.remove('appear')
					} else {
						entry.target.classList.add('appear')
					}
				})
			}, options)

			textObserver.observe(myContent)
	}}, [])

	// SCROLL FUNCTIONS
	const scrollToAbout = () => {
		var aboutSection = document.getElementById("aboutSection");
		aboutSection.scrollIntoView({ behavior: 'smooth' });
	}

	const scrollToTop = () => {
		var headerSection = document.getElementById("headerSection");
		headerSection.scrollIntoView({ behavior: 'smooth', alignToTop: true });
	}
	
	// FATE SCORES
	const fate1 = useRef('')
	const fate2 = useRef('')
	const fate3 = useRef('')


	// Indicates which fate we are currently loading
	const [fateLoading, setFateLoading ] = useState('')

	// Indicates executeQRNG() is currently running
	const [currentlyLoading, setCurrentlyLoading] = useState(false)

	// Final message that is displayed determining users fate
	const [finalFate, setFinalFate] = useState('')

	// Our six quantum numbers representing dice
	const currentDiceSides = useRef(null);

	// The number that dictates which our six numbers is our landed side
  	const currentDiceWeight = useRef(null);

	// Our landed number
  	const currentDiceResult = useRef(null);

	// Response statements
	const fateScoreDictionary = [
		{
			message: "You should DEFINTELY NOT go to Wendy's",
			color: "#df0f0f",
			score: 0
		},

		{
			message: "You should probably not go to Wendy's",
			color: 'orange',
			score: 1
		},

		{
			message: "You could probably eat at Wendy's and be fine",
			color: 'pink',
			score: 2
		},

		{
			message: "You NEED to go to Wendy's!",
			color: '#66CDAA',
			score: 3
		},
	]
 

	// FUNCTIONS
	// Retrieves our quantum generated numbers
	const getQRN = async () => {

		// This will clear out our past values
		setFinalFate('')
		currentDiceSides.current = null
    	currentDiceWeight.current = null
		currentDiceResult.current = null
		// console.log(currentDiceSides.current, currentDiceWeight.current, currentDiceResult.current);

		// Gets our 6 dice numbers
     await axios
      .get(`https://qrng.anu.edu.au/API/jsonI.php?length=6&type=uint16`)
      .then(async (res) => {
        currentDiceSides.current = (res.data.data);
		// console.log(res.data.data);
		// console.log(currentDiceSides);

        // This allows us to wait between getting our dice numbers and landing side
        await new Promise(resolve =>
          setTimeout(
						// removes this below line in production
            () => resolve(console.log("Keep thinking of your choice")),
            3333
          )
        );
      });

	// Gets our landing side number
    return axios
      .get(`https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16`)
      .then(async res => {
        currentDiceWeight.current = (res.data.data[0])
      });
	}

	
	// Rolls our dice
	const diceRoll = () => {
	// console.log(`New Roll`);
	// console.log(`diceSides are ${currentDiceSides.current}`);
	// console.log(`diceLand is ${currentDiceWeight.current}`);

    let currentLowScore = null; // Determines the distance from diceLand
    let answerIndex = null; // Index of the number that gave us the cLS
    let proxyDiceAnswer = null; // The diceSide that is closest to our target number

    currentDiceSides.current.map((diceSideValue, index) => {
      let diceSideScore = currentDiceWeight.current - diceSideValue; // Score of the current diceSide

      if (diceSideScore === 0) {
        proxyDiceAnswer = diceSideValue;
      } else {
        if (diceSideScore < 0) {
          diceSideScore = diceSideScore * -1;
        }

        // console.log(diceSideScore);
        if (currentLowScore) {
          if (diceSideScore < currentLowScore) {
            // console.log(
            //   ` ${diceSideValue}'s score ${diceSideScore} is lower than ${currentLowScore}`
            // );
            currentLowScore = diceSideScore;
            // console.log(`New low score is ${currentLowScore}`);
            answerIndex = index;
            // console.log(
            //   `New answer index is ${answerIndex}, whose value is ${diceSideValue}`
            // );
          }
        } else {
          currentLowScore = diceSideScore;
          answerIndex = index;
          // console.log(`${index} - set ${currentLowScore}`);
        }

        proxyDiceAnswer = currentDiceSides.current[answerIndex];
      }

	  return null
      // console.log(`CLS is ${currentLowScore}`);
    });

    // console.log("");
    // console.log(`Final number answer is ${proxyDiceAnswer}`);
    // console.log("");

    // if (diceAnswer % 2 != 0) {
    if (primeCheck(proxyDiceAnswer)) {
      // console.log(`Dice answer ${proxyDiceAnswer} is prime`);
      currentDiceResult.current = [proxyDiceAnswer, true, Burger];
    } else {
      // console.log(`Dice answer ${proxyDiceAnswer} is not prime`);
      currentDiceResult.current = [proxyDiceAnswer, false, Carrot];
    }
	}


	// Checks if inputted number is prime
	const primeCheck = (number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0){
        return false
      }
    }
    return number >= 1
  }


	// Runs our program
	const executeQRNG = async () => {
		fate1.current = ''
		fate2.current = ''
		fate3.current = ''

		setCurrentlyLoading(true)

		let fateList = [fate1, fate2, fate3]
		let finalFateScore = 0

		for (let index = 0; index < fateList.length; index++) {

			// Sets loading to our index
			setFateLoading(index)

			// Get our numbers
			await getQRN()

			// Rolls our dice
			diceRoll()

			// Updates our final score
			if (currentDiceResult.current[1]) {
				finalFateScore += 1
			}

			if (index === 0) {
				fate1.current = currentDiceResult.current
				// console.log(`${JSON.stringify(fate1)}`);
			} else if (index === 1) {
					fate2.current = currentDiceResult.current
					// console.log(`${JSON.stringify(fate2)}`);
			} else {
					fate3.current = currentDiceResult.current
					// console.log(`${JSON.stringify(fate3)}`);
			}
		}
	
		// Clears our last loading icon
		setFateLoading('')
		setCurrentlyLoading(false)

		// Displays our corresponding fate message in relation to the score
		setFinalFate(fateScoreDictionary[finalFateScore])
	
	} 

	// RETURN 
	return (
		<>
		{/* // Nav Bar */}
			<div 
				className={classes.navBar}
				id="headerSection"
			>
				<div 
						style={{
								padding: 10
						}}>
							<Button 
							href={'https://github.com/hrstm/Should-I-Go-To-Wendys'}
							className={classes.navBarItem}
							>
								GitHub
							</Button>
				</div>

					<div>|</div>
					
					<div style={{
					padding: 10}}> 
					<Button 
					onClick={()=>scrollToAbout()}
					className={classes.navBarItem}
					>
						About
					</Button>
				</div>
			</div>

		{/* // BODY */}
		<div
		className={classes.root}
		>
			
			{/* TITLE */}
			<Grid
				container
				direction='column'
				justify='flex-start'
				alignItems='center'
				className={classes.titleText}
			>
				SHOULD I GO TO
				<Grid 
					item
					container
					justify='center'
					alignItems='center'
				>
					<img src={WendysLogo} alt="" className={classes.titleImage}/>
					.HELP
				</Grid>
			</Grid>
			
			{/* CONTENT */}
			<Grid
				container
				item
				xs={12} sm={10} md={8}
				direction='column'
				justify='flex-start'
				alignItems='center'
				className={classes.contentContainer}
			>
				
				{/* FATES SCORES */}
				<Grid 
					item 
					container
					direction='column'
					justify='center'
					alignItems='center'
					style={{
						maxWidth: 345,
					}}
					>
						<div
							className={classes.fateScoreText}
						>
							- FATE SCORE -
						</div>
					<Grid item 
						className={classes.fateScoreDivider}
					/>
						
					<Grid
						item 
						container
						direction='row'
						justify='center'
						alignItems='center'
					>
						{/* FATE 1 */}
						<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						>
							<div
								className={classes.fateScoreContainer}
							>
								{/* Loading Circle / Fate Image */}
								{fateLoading === 0 ? 
								<CircularProgress style={{
									color: '#7FE5F0',
									height: 25,
									width: 25
								}}/>
								:
								<img 
									src={
									fate1["current"][2] ? 
									fate1["current"][2] : 
									QuestionMark
									} 
									alt="" 
									style={{
									height: 30,
									width: 30
									}}
								/>
								}
							</div>
							<div style={{fontWeight: 'bold'}}>
								{ fate1["current"][0] ? fate1["current"][0]  : `00000`}
							</div>
						</div>

						{/* FATE 2 */}
						<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						>
							<div
								className={classes.fateScoreContainer}
							>
								{/* Loading Circle / Fate Image */}
								{fateLoading === 1 ? 
								<CircularProgress style={{
									color: '#7FE5F0',
									height: 25,
									width: 25
								}}/>
								:
								<img 
									src={
										fate2["current"][2] ? 
										fate2["current"][2] : 
										QuestionMark
										} 
									alt="" 
									style={{
									height: 30,
									width: 30
									}}
								/>
								}
							</div>
							<div style={{fontWeight: 'bold'}}>
								{fate2["current"][0] ? fate2["current"][0]  : `00000`}
							</div>
						</div>

						{/* FATE 3 */}
						<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						>
							<div
								className={classes.fateScoreContainer}
							>
								{fateLoading === 2 ? 
								<CircularProgress style={{
									color: '#7FE5F0',
									height: 25,
									width: 25
								}}/>
								:
								<img 
									src={
										fate3["current"][2] ? 
										fate3["current"][2] : 
										QuestionMark
									} 
									alt="" 
									style={{
									height: 30,
									width: 30
								}}
							/>
								}
							</div>
							<div style={{fontWeight: 'bold'}}>
								{fate3["current"][0] ? fate3["current"][0]  : `00000`}
							</div>
						</div>
					
					</Grid>
				</Grid>

				{/* START QRNG */}
				<Grid
					container
					item
					direction='column'
					justify='center'
					alignItems='center'
				>
					{/* FATE STATEMENT */}
					{ currentlyLoading ? 
							<div 
								className={classes.loading}
							>
									Gathering quantum data; Continue thinking of Wendy's
							</div>
						:
						<div 
							className={classes.fateMessage}
							style={{color: finalFate ? finalFate['color'] : '#7FE5F0'}}
						>
							{ finalFate ? finalFate['message'] : 'Fate Undetermined'}
						</div>
					}

					{/* START/RESET BUTTON */}
					{currentlyLoading ? null :
					<Button 
					onClick={() => executeQRNG()}
					disabled={currentlyLoading}
					className={classes.submitButton}
					>
						{ finalFate ? 'Roll Again?' : 'Roll The Quantum Dice'}
					</Button>
				}
				</Grid>
				

			</Grid>
			
			{/* ABOUT BUTTON */}
			<div className={classes.aboutContainer}>
				<Button 
				onClick={()=>scrollToAbout()}
				className={classes.scrollerButton}
				>
					{/* Button Text */}
					<div className={classes.scrollerButtonText}>
					What the hell is this?
					<div style={{fontSize: 40, marginTop: -30}}>&#8964;</div>
					</div>
				</Button>
			</div>

			{/* ABOUT SECTION */}
			<Grid container 
			direction='column'
			justify='center'
			alignContent='center'
			className='about'
			id='aboutSection'
			>
				<Grid item
				xs={12} sm={12} md={7}
				style={{
					color: 'white', 
					fontWeight: 'bold', 
					fontFamily: 'Amatic SC',
					fontSize: 40,
					background: 'rgba(0,0,0,0.6)',
					padding: 15,
					marginBottom: 20,
					marginTop: 10,
					
				}}
				>
				<div style={{ fontSize: 80, paddingTop: 20,}}
					// id='aboutSection'
				>
					ABOUT
				</div>
				<div style={{marginTop: 50}}
				className={classes.aboutText}
				>
					<p>
						Eating at a Wendy’s fast food restaurant can either be the best or worst choice of your entire life.
						But when you're hungry at 2AM and all respectable restaurants are closed, rash and detrimental decisions are prone to be made.
						What if there was a way for the universe to answer the question of whether or not you should eat at a Wendy's?
						Well now there is.
					</p>

					<p>
						ShouldIGoToWendys.help was created for the very purpose of solving this conundrum. 
						Based off of the theory that
						<Link 
							style={{marginLeft: 5, color: '#7FE5F0'}}
							href='https://noosphere.princeton.edu/papers/pdf/GCP.Explore.pdf'
						>
						human consciousness is able to affect the outcome of random number generators
						</Link>,
						this web app connects to the Quantum Random Number Generator at
						Australian National University’s campus and gathers an array of data which we convert into
						sets of dice. During the time we are gathering data, you should to close your eyes and
						begin thinking of going to Wendy's.
					</p>

					<p>
						We will then perform 3 dice rolls, with each roll giving you a fate score for going to Wendy's. A positive
						fate score is represented by a 🍔, while a negative fate score is represented by a 🥕.
						These collective scores are then calculated to determine your final fate for 
						going to Wendy's.
					</p>
				</div>
			</Grid>
				
				{/* RETURN TO TOP BUTTON */}
				<Button 
					onClick={()=>scrollToTop()}
					className={classes.scrollerButton} 
					style={{marginTop: 10}}
				>
					<div className={classes.scrollerButtonText}>
							<div style={{fontSize: 25, marginBottom: -20}}>&#8963;</div>
							<div>
							Return to top
							</div>

						</div>
				</Button>

			</Grid>
		</div>
		</>
	)
}
