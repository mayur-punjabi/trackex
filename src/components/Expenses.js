import React from "react";
import { Box } from "@material-ui/core/";
import { red, green, grey, blue } from "@material-ui/core/colors/";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default class Expenses extends React.Component {
  render() {
    const expenses = this.props.expenses.length ? (
      <Box flexGrow={1} style={{ overflowY: "auto" }}>
        {this.props.expenses.map((expense, index) => {
          let amountColor = grey[900];
          if (expense.amount > 0) amountColor = green["A700"];
          else if (expense.amount < 0) amountColor = red["A700"];

          return (
            <Box
              borderColor="grey.300"
              display="flex"
              alignItems="center"
              data-index={index}
              mx={1}
              my={2}
              p={1}
              border={1}
              borderRadius={4}
            >
              <Box
                width="15%"
                maxWidth="17.5%"
                fontWeight="fontWeightBold"
                px={0.5}
                color={amountColor}
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
              <Box px={0.5} color={blue["A700"]}>
                <EditIcon />
              </Box>
              <Box px={0.5} color={red["A700"]}>
                <DeleteIcon />
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
