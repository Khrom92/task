import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';



import * as Action from '../rdx/actions';
import SortMenu from './UI/SortMenu';
import BigTableButton from './UI/BigTableButton';
import EnhancedTable from './UI/EnhancedTable';
import FormDialog from "./UI/FormDialog";
import Progress from "./UI/Progress";

const styles = () => ({
    root: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'space-between',
        flex: '1'
    },
    left: {
        // marginLeft: 20,
        width: '20%'
    },
    center: {
        width: '70%'
    },
    groupButton: {
        marginLeft: 410,
    }
});


class MyList extends Component {
    state = {
        table: 'allUsers'
    };

    handleClick = (e) => {
        this.setState({
            table: e
        })
    };

    componentWillMount() {
        this.props.Action.getList(1)

    }

    render() {
        const { classes } = this.props;
        const { users } = this.props.reducer;
        return (
            <div className={classes.root}>
                <div className={classes.left}>
                    <BigTableButton handler={this.handleClick}/>
                    <SortMenu className={classes.groupButton} handler={this.handleClick}/>
                </div>
                <div className={classes.center}>
                    {
                        users.length ?
                            ( this.state.table === 'allUsers' ?
                            <EnhancedTable users={users} label='allUsers'/> :
                            <EnhancedTable users={users.filter(elem => elem.group === this.state.table)} label={this.state.table}/>)
                            :
                            <Progress />
                    }
                    <FormDialog className={classes.dialog} handler={this.props.Action.addUser}/>
                </div>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        reducer: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Action: bindActionCreators(Action, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyList))