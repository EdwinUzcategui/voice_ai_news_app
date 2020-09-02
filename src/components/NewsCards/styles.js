import { makeStyles } from '@material-ui/core'

export default makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: '0 0 20 0',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alingItems: 'center',
        width: '100%',
        height: '45vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white'
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    imgNews: {
        objectFit: 'cover',
        height: 140,
    },
    info: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    infoChip: {
        margin: 1
    },
    phrase: {
        marginTop: 20,
    }
})

