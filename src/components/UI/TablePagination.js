import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';

const styles = () => ({
    toolbar: {
        minHeight: 120
        },

});

function Pagination(props) {
    return <TablePagination {...props}/>

}

Pagination.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pagination);