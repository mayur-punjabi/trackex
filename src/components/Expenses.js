import React from "react";
import { Box, IconButton } from "@material-ui/core/";
import { red, green, blue } from "@material-ui/core/colors/";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default class Expenses extends React.Component {
  render() {
    const expenses = this.props.expenses.length ? (
      <Box flexGrow={1} style={{ overflowY: "auto" }}>
        {this.props.expenses.map((expense, index) => {
          return (
            <Box
              borderColor="grey.300"
              display="flex"
              alignItems="center"
              data-index={index}
              m={2}
              p={1}
              border={1}
              borderRadius={4}
            >
              <Box
                width="15%"
                maxWidth="17.5%"
                fontWeight="fontWeightBold"
                px={0.5}
                color={
                  expense.moneyFlow === "out" ? red["A700"] : green["A700"]
                }
                style={{ wordBreak: "break-all" }}
              >
                {Math.abs(expense.amount)}
              </Box>
              <Box
                flexGrow={1}
                w="80%"
                fontWeight={700}
                px={0.5}
                style={{ wordBreak: "break-all" }}
              >
                {expense.description}
              </Box>
              <Box px={0.5}>
                <IconButton
                  disabled
                  aria-label="edit expense"
                  style={{ color: blue["A700"] }}
                >
                  <EditIcon />
                </IconButton>
              </Box>
              <Box px={0.5}>
                <IconButton
                  disabled
                  aria-label="delete expense"
                  style={{ color: red["A700"] }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          );
        })}
      </Box>
    ) : (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontWeight="fontWeightBold"
        flexGrow={1}
        style={{ textTransform: "uppercase" }}
      >
        No expenses for current date
      </Box>
    );

    return expenses;
  }
}
