import React, { useState, useEffect, createRef } from 'react'
import { Card, CardActions, CardActionArea, CardMedia, Button, Typography, CardContent, LinearProgress, Chip } from '@material-ui/core'
import useStyles from './styles'
import classNames from 'classnames'


const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
    
    const classes = useStyles()
    const [elRefs, setElRefs] = useState([])
    const scrollToRef = (ref) => window.scroll(0,ref.current.offsetTop - 50)

    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_,j) => refs[j] || createRef()))
    }, [])
    
    useEffect(() => {
        if(i === activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle])
        }
    }, [i, activeArticle, elRefs])

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle === i ? null : classes.activeCard) }>
            <CardActionArea href={url} target="_blank" >
                <CardMedia className={classes.media} image={urlToImage || 'https://wpcdn.us-east-1.vip.tn-cloud.net/www.kxly.com/content/uploads/2019/12/1-BREAKING-NEWS.png'} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Chip label={source.name} color="primary" size="small"/>
                </div>
                <Typography className={classes.title} gutterBotom variant="h5" color="initial">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <div className={classes.bottomArea}>
                <CardActions className={classes.cardActions}>
                    <Button variant="contained" size="small" color="primary">Learn more</Button>
                    <Typography variant="h5" color="textSecondary">{i + 1}</Typography>     
                </CardActions>  
                {activeArticle === i ? <LinearProgress className={classes.linearProgress} /> : null}
            </div>
        </Card>
    )
}

export default NewsCard
