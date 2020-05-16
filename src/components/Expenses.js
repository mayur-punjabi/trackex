import React from "react";
import { Box } from "@material-ui/core/";

export default class Expenses extends React.Component {
  render() {
    return (
      <Box flexGrow={1} style={{ overflowY: "auto" }}>
        <p>expenses</p>
      </Box>
    );
  }
}
