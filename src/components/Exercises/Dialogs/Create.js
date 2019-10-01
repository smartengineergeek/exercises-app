import React, { Fragment, Component } from 'react';
import { TextField, Button, Dialog } from 'material-ui';
import {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from 'material-ui/Dialog';
import { Add } from 'material-ui-icons';

export default class extends Component {
    state = {
        open: false
    } 
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render(){
        const { open } = this.state;
        return(
            <Fragment>
                <Button variant="fab" color="primary" onClick={this.handleToggle} mini>
                    <Add />
                </Button>
                <Dialog open={open} onClose={this.handleClose} >
                    <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button 
                        // onClick={handleClose} 
                        color="primary">
                        Cancel
                    </Button>
                    <Button 
                        // onClick={handleClose} 
                        color="primary">
                        Subscribe
                    </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}