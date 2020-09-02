import React from 'react'
import { Grid, Grow, Chip, Card, CardHeader, Typography, CardContent } from '@material-ui/core'
import NewsCard from '../NewsCard/NewsCard'
import useStyles from './styles.js'
import img1 from '../../images/marketing_.png'
import img2 from '../../images/basketball_monochromatic.png'
import img3 from '../../images/teacher_monochromatic.png'
import img4 from '../../images/_tv_presenter2.png' 



const infoCards = [
    { img: img1, color: 'linear-gradient(to right bottom, #320090, #1d087a, #090b65, #00094f, #010039)', title: 'Latest News', text: 'Give me the latest news' },
    { img: img2, color: 'linear-gradient(to right bottom, #320090, #1d087a, #090b65, #00094f, #010039)', title: 'News by Categories', info: ['Sports','Health','Science','Technology','Entertainment'], text: 'Give me the latest Sports news' },
    { img: img3, color: 'linear-gradient(to right bottom, #320090, #1d087a, #090b65, #00094f, #010039)', title: 'News by Terms', info: ['Coronavirus','Bitcoin','Smartphones','Donald Trump'], text: 'What\'s up with Coronavirus' },
    { img: img4, color: 'linear-gradient(to right bottom, #320090, #1d087a, #090b65, #00094f, #010039)', title: 'News by Sources', info: ['CNN','BBC News','Time','ABC News','Fox News'], text: 'Give me the news from CNN' },
  ];

const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles()

    if(!articles.length){
        return (
            <Grow in>
                <Grid className={classes.container} container alingItems="stretch" spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid className={classes.infoCard} item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardHeader
                                  title={infoCard.title}
                                  subheader="" 
                                />
                                <div>
                                  <img className={classes.imgNews} src={infoCard.img} alt=""/>  
                                </div>
                                <CardContent>
                                    <div className={classes.info}>
                                        {infoCard.info ? infoCard.info.map((cat) => (
                                            <Chip className={classes.infoChip} size="small" color="primary" label={cat}/>
                                        ))
                                        : <div><br/><br/><br/></div>}
                                    </div>
                                    <Typography className={classes.phrase} variant="body1" color="initial"><b>Try saying:</b> <br/> <i>{infoCard.text}</i></Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alingItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                        <NewsCard article={article} activeArticle={activeArticle} i={i}/>
                    </Grid>  
                ))}
            </Grid>
        </Grow>
    )
}

export default NewsCards
