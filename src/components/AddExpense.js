import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Slide,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  TextField
} from "@material-ui/core/";

export default class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  render() {
    return (
      <Dialog
        fullScreen
        open={this.props.isAddExpenseOpen}
        onClose={() => this.props.setAddExpenseOpen(false)}
        TransitionComponent={this.Transition}
      >
        <Box display="flex" flexDirection="column" height="100%">
          <Box flexGrow={1}>
            <Box width="100%" p={2}>
              <FormLabel>Money Flow : </FormLabel>
              <RadioGroup
                row
                aria-label="money flow"
                name="money-flow"
                defaultValue="out"
              >
                <FormControlLabel
                  value="out"
                  control={<Radio color="default" />}
                  label="Out"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="in"
                  control={<Radio color="default" />}
                  label="In"
                  labelPlacement="end"
                />
              </RadioGroup>
            </Box>
            <Box width="100%" p={2}>
              <TextField
                fullWidth
                autoFocus
                type="number"
                color="default"
                label="Amount"
                variant="outlined"
                defaultValue="1"
                InputProps={{
                  inputProps: {
                    min: 1
                  }
                }}
              />
            </Box>
            <Box width="100%" p={2}>
              <TextField
                multiline
                fullWidth
                name="description"
                label="Description"
                rows={4}
                variant="outlined"
              />
            </Box>
          </Box>

          <DialogActions>
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              p={1}
            >
              <Button
                variant="outlined"
                style={{ fontWeight: "bold" }}
                onClick={() => this.props.setAddExpenseOpen(false)}
              >
                Discard
              </Button>
              <Button
                variant="outlined"
                style={{ fontWeight: "bold" }}
                onClick={() => this.props.setAddExpenseOpen(false)}
              >
                Save
              </Button>
            </Box>
          </DialogActions>
        </Box>
      </Dialog>
    );
  }
}
