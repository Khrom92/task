import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },

});

function BigTableButton(props) {
    const { classes, handler } = props;
    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={()=>{handler('allUsers')}}
            >
                Show All Users
            </Button>
        </div>
    );
}

BigTableButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BigTableButton);