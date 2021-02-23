import { makeStyles } from '@material-ui/core'

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

export default useStyles