import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 25),
    paddingTop: '20px',
  },
  paper: {
    maxWidth: 'auto',
    padding: theme.spacing(2),
    padding: '30px',
  },
}));

export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography style ={{fontWeight: 'bold', fontSize: '25px', color: '#4c4c4e', padding: '30px', textAlign: 'center'}} wrap>FREQUENTLY ASKED QUESTIONS</Typography>
      <Paper className={classes.paper}>
        <Grid>
          <Grid item xs zeroMinWidth>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e'}} wrap>What is the GamesOverflow Store?</Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>The GamesOverflow Store is a curated digital storefront for PC and Mac, designed with both players and creators in mind. It’s focused on providing great games for gamers, and a fair deal for game developers. When you buy a game on the GamesOverflow Store, 88% of the price goes directly to developers, versus only 70% on many other stores. This helps developers invest into building bigger and better games.</Typography>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e', paddingTop: '14px'}} wrap>Where can I download the GamesOverflow Store?</Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>Visit the GamesOverflow Store page at gamesoverflow.com, go to the upper right corner, and click “Get GamesOverflow.”  This is the only place to safely download the installer for the GamesOverflow Store. Do not trust other sources, as they are likely unsafe.</Typography>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e', paddingTop: '14px'}} wrap>Which platforms does the GamesOverflow Store support?</Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>The GamesOverflow Store currently offers PC and Mac support. You can check platform compatibility for individual titles by referring to the “About Game” section of any product page.</Typography>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e', paddingTop: '14px'}} wrap>What are the future plans for the GamesOverflow Store?</Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>You can find upcoming features, developer updates, and major known issues on our GamesOverflow Store Roadmap on Trello. We’ll also share significant updates with you on our news feed and social media pages such as Facebook, Twitter, Instagram, and YouTube. 
            </Typography>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e', paddingTop: '14px'}} wrap>Why does the GamesOverflow Store make exclusivity deals? </Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>Exclusives are a part of the growth of many successful platforms for games and for other forms of digital entertainment, such as streaming video and music.
            GamesOverflow works in partnership with developers and publishers to offer games exclusively on the store. In exchange for exclusivity, GamesOverflow provides them with financial support for development and marketing, which enables them to build more polished games with significantly less uncertainty for the creators.
            In addition, creators will earn 88% of all the revenue from their game, while most stores only offer 70%.
            </Typography>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e', paddingTop: '14px'}} wrap>What is the Support-A-Creator program? </Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>The Support-A-Creator program enables content Creators to earn money from games in the GamesOverflow Store by using Creator Links and Creator Tags. Learn more about the Support-A-Creator program here. 
            </Typography>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e', paddingTop: '14px'}} wrap>What’s this about free games?</Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>GamesOverflow will be offering a new free game available each week throughout 2020. When you claim a free game, it’s yours to keep - even after the game is no longer available to new customers for free.
            </Typography>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e', paddingTop: '14px'}} wrap>I claimed a free game but don’t see it on my account now, why?</Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>Once you claim a free game, it’s yours to keep. If you come back later and don’t see it your account, please check to see if you have multiple accounts. If you created an GamesOverflow account using an @gmail.com email address, log in to it directly using your Gmail password; using the Google login button will create a distinct account even if it’s tied to the same @gmail.com email address. And check to see if you have both a console-linked account (logging in via PlayStation, Xbox, or Nintendo account) and a separate GamesOverflow account. If you still encounter issues, please contact player support here.
            </Typography>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e', paddingTop: '14px'}} wrap>Can I try a game before I buy it?</Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>Some publishers occasionally offer demos or free trial periods for certain non-free games from time to time (for example, a Free Weekend trial). During a free trial period, you can download and play a trial version of the game before you decide to purchase, but you can no longer access the game when the trial period ends.
            </Typography>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e', paddingTop: '14px'}} wrap>How do refunds work on the GamesOverflow Store?</Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>All games are eligible for refund within 14 days of purchase for any reason, as long as you’ve had the game running for less than 2 hours. You will not be eligible for refunds for games from which you have been banned or for which you have otherwise violated the Terms of Service. Learn more about our refund policy here. 
            </Typography>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e', paddingTop: '14px'}} wrap>How do I contact support?</Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>You can contact our support team here. We also recommend browsing our support center articles, which may help answer questions or resolve issues. 
            </Typography>
            <Typography style ={{fontWeight: 'bold', fontSize: '15px', color: '#4c4c4e', paddingTop: '14px'}} wrap>What languages does the GamesOverflow Store support?</Typography>
            <Typography style ={{fontWeight: '200px', fontSize: '14px', color: '#4c4c4e'}} wrap>The GamesOverflow Store currently supports English, Arabic, German, Spanish (Spain), Spanish (Latin America), French, Italian, Japanese, Korean, Polish, Portugeuse, Russian, Thai, Turkish, Simplified Chinese, and Traditional Chinese. In-game language support varies per game, as provided by the developer; check each game’s store page for language availability.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
