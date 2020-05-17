import React from "react";
import { Button, Box } from "@material-ui/core/";

export default class Footer extends React.Component {
  render() {
    return (
      <Box display="flex" justifyContent="space-between" p={1}>
        <Button
          variant="outlined"
          style={{ fontWeight: "bold" }}
          onClick={() => this.props.setCalendarOpen(true)}
        >
          change date
        </Button>
        <Button
          disableElevation
          variant="contained"
          color="primary"
          style={{ fontWeight: "bold" }}
          onClick={() => this.props.setAddExpenseOpen(true)}
        >
          add expense
        </Button>
      </Box>
    );
  }
}
