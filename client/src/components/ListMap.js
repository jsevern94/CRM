import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { logoutUser } from "../actions/authActions";
import icons from '../permissions'

class ListMap extends Component {

    state = {
        permissions: parseInt(this.props.permissions)

    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        return (
            <div>
                {icons.map(permission => (
                    this.state.permissions & permission.bitmask
                        ?
                        <Link
                            to={`${permission.href}`}
                            key={`${permission.href}`}
                        >
                            <ListItem button>
                                <ListItemIcon>
                                    {permission.icon}
                                </ListItemIcon>
                                <ListItemText primary={`${permission.title}`} />
                            </ListItem>
                        </Link>
                        :
                        null
                ))}

                {/* <button
                    style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                    Logout
                </button> */}

                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.onLogoutClick}
                >
                    Logout
                </Button>


            </div>
        )
    }
}

ListMap.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(ListMap);