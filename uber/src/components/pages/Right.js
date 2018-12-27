import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';



const styles = theme => ({
  card: {
    widht:'40px',
    heigt:'40px',
    margin:'20px'
  },
  media: {
    height: 0,
    paddingTop: '60.25%', // 16:9
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://www.uber-assets.com/image/upload/f_auto,q_auto,c_fill,w_620,h_740/v1535676554/assets/a8/550611-9637-413a-bf19-e192491a2427/original/D_Homepage_Header2x.png"
          title="Paella dish"
        />
        </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);