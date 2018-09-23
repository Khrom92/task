import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Modal from "./Modal";


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        marginTop: 50,
    },
    input: {
        marginRight: 7
    },


});

const inputData = {
    name: {
        name: 'name',
        id: 'name',
    },
    lastName: {
        name: 'lastName',
        id: 'lastName',
    },
    group: {
        name: 'group',
        id: 'group',
    }
}

class FormDialog extends React.Component {
    state = {
        open: false,
        data: {}
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        });
    };

    addUser = () => {
        this.props.handler(this.state.data);
        this.setState({ open: false });
    }

    render() {
        const { classes } = this.props;
        const { data, open } = this.state;
        return (
            <div className={classes.root}>
                <Button className={classes.button}
                        color="secondary"
                        onClick={this.handleClickOpen}
                        variant="outlined"
                >
                    Add New User
                </Button>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter user information
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            inputProps={inputData.name}
                            label="Name"
                            type="text"
                            fullWidth
                            onChange={this.handleChange}
                        />
                        <TextField
                            // autoFocus
                            margin="dense"
                            inputProps={inputData.lastName}
                            label="Last Name"
                            type="text"
                            fullWidth
                            onChange={this.handleChange}
                        />
                        <InputLabel htmlFor="Group" className={classes.input}>Group select</InputLabel>

                        <Select
                            // input={<InputLabel htmlFor="Group">Group</InputLabel>}
                            placeholder='Group'
                            value={data.group}
                            onChange={this.handleChange}
                            inputProps={inputData.group}
                        >

                            <MenuItem value={null}>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value='hr'>hr</MenuItem>
                            <MenuItem value='engineer'>engineer</MenuItem>
                            <MenuItem value='accountant'>accountant</MenuItem>
                            <MenuItem value='manager'>manager</MenuItem>
                        </Select>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Modal handler={this.addUser}/>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

FormDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormDialog);