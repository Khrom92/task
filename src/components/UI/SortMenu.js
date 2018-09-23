
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
            marginLeft: 8,
            marginTop: 8,
    },
    paper: {
        // marginRight: theme.spacing.unit * 2,
    },
});

const data =  ['engineer', 'accountant', 'hr', 'manager', null];

class MenuListComposition extends React.Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = (e) => {
        console.log(e);
        const { handler } = this.props;

        // if (this.anchorEl.contains(e.target)) {
        //     return ;
        // }
        console.log(this.anchorEl);
        this.setState({ open: false });

        handler(e);
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <div>
                    <Button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                    >
                        Group Menu
                    </Button>
                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={()=>{this.setState({open: false})}}>
                                        <MenuList>
                                            {data.map((elem,index) => (
                                                <MenuItem key={index} id={elem} onClick={()=>{
                                                    this.handleClose(elem)
                                                }}>
                                                    {elem === null ? 'No group users' : elem}
                                                    </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        );
    }
}

MenuListComposition.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);