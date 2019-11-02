import React, { Component } from 'react'
import Axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class ClientTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            dialogOpen: false
        }
    }

    componentDidMount() {
        Axios.get("/clients.json").then((response) => {
            this.setState({
                clients: response.data
            })
        })
    }

    toggleNewClientDialog() {
        this.setState({
            dialogOpen: !this.state.dialogOpen
        })
    }

    render() {
        let clientrows = this.state.clients.map((client) => {
            return (
                <TableRow key={client.id}>
                    <TableCell>{client.first_name} {client.Last_name}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.phone}</TableCell>
                    <TableCell>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            )
        })



        return (
            <div>
                <Paper>
                    <div>
                        <Dialog open={this.state.dialogOpen} onClose={this.toggleNewClientDialog.bind(this)} >
                            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    To subscribe to this website, please enter your email address here. We will send updates
                                    occasionally.
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
                                <Button onClick={this.toggleNewClientDialog.bind(this)} color="primary">
                                    Cancel
          </Button>
                                <Button onClick={this.toggleNewClientDialog.bind(this)} color="primary">
                                    Subscribe
          </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>
                                    <IconButton>
                                        <AddIcon onClick={this.toggleNewClientDialog.bind(this)} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {clientrows}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default ClientTable