import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';



const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`;


const styles = {
    root: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        marginBottom: 20
    }
};


class Hello extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant="display2" gutterBottom>
                    Hello page
                </Typography>

                    <StyledLink to = '/MyList'>
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Go to users table
                        </Button>
                    </StyledLink>
            </div>
        )
    }
}

Hello.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hello);