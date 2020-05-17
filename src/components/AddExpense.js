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
    this.state = { expense: { amount: 1, description: "", moneyFlow: "out" } };

  }

  Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


  updateExpense = event => {
    const currentInput = event.target;
    const inputName = currentInput.name;
    const expense = this.state.expense;
    expense[inputName] = currentInput.value;
    this.setState({ expense });
  };

  addExpenses = event => {
    event.preventDefault();
    this.props.addNewExpense(this.state.expense);
    this.clearFields();
  };

  clearFields = () => {
    this.setState({
      expense: { amount: 1, description: "", moneyFlow: "out" }
    });
    this.props.setAddExpenseOpen(false);
  };


  render() {
    return (
      <Dialog
        fullScreen
        open={this.props.isAddExpenseOpen}

        onClose={this.clearFields}
        TransitionComponent={this.Transition}
      >
        <form style={{ height: "100%" }} onSubmit={this.addExpenses}>
          <Box display="flex" flexDirection="column" height="100%">
            <Box flexGrow={1}>
              <Box width="100%" p={2}>
                <FormLabel>Money Flow : </FormLabel>
                <RadioGroup
                  row
                  required
                  aria-label="money flow"
                  name="moneyFlow"
                  defaultValue={this.state.expense.moneyFlow}
                  onChange={this.updateExpense}
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
                  required
                  name="amount"
                  type="number"
                  label="Amount"
                  variant="outlined"
                  defaultValue={this.state.expense.amount}
                  onChange={this.updateExpense}
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
                  required
                  name="description"
                  label="Description"
                  variant="outlined"
                  rows={4}
                  defaultValue={this.state.expense.description}
                  onChange={this.updateExpense}
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
                  style={{ fontWeight: "bold" }}
                  onClick={this.clearFields}
                >
                  Discard
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  style={{ fontWeight: "bold" }}
                >
                  Save
                </Button>
              </Box>
            </DialogActions>
          </Box>
        </form>

      </Dialog>
    );
  }
}
