import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const EditModal = ({ onSubmit, onClose, isOpen }) => (
  <Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Edit Blog Post</DialogTitle>
    <form onSubmit={onSubmit}>
      <DialogContent>
        <TextField autoFocus margin="dense" fullWidth name="text" />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Save
        </Button>
      </DialogActions>
    </form>
  </Dialog>
);

export default EditModal;