import { makeStyles } from '@material-ui/core'

export default makeStyles({
    media: {
        height: 250,
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    activeCard: {
        borderBottom: '10px solid white'
    },
    grid: {
        display: 'flex'
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
    },
    title: {
        padding: '0 16px'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: 0
    },
    linearProgress: {
        height: 10,
        margin: 0
    },
    bottomArea: {
        alignItems: 'flex-end'
    }
})