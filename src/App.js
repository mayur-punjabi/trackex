import React from "react";
import "./styles.css";
import { Box } from "@material-ui/core/";
import { Header, Expenses, Footer, AddExpense } from "./components";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendarOpen: false,
      isAddExpenseOpen: false,
      selectedDate: new Date(),
      expenses: [
        {
          amount: -50,
          description: "Burger"
        },
        {
          amount: 1000,
          description: "Ticket refund"
        }
      ]
    };
  }

  setCalendarOpen = stateToUpdate => {
    this.setState({
      isCalendarOpen: stateToUpdate
    });
  };

  handleDateChange = newDate => {
    this.setState({
      selectedDate: newDate
    });
  };

  setAddExpenseOpen = stateToUpdate => {
    this.setState({ isAddExpenseOpen: stateToUpdate });
  };

  render() {
    return (
      <Box display="flex" flexDirection="column" style={{ height: "100vh" }}>
        <Header
          isCalendarOpen={this.state.isCalendarOpen}
          selectedDate={this.state.selectedDate}
          setCalendarOpen={this.setCalendarOpen}
          handleDateChange={this.handleDateChange}
        />
        <Expenses expenses={this.state.expenses} />
        <Footer
          setCalendarOpen={this.setCalendarOpen}
          setAddExpenseOpen={this.setAddExpenseOpen}
        />
        <AddExpense
          setAddExpenseOpen={this.setAddExpenseOpen}
          isAddExpenseOpen={this.state.isAddExpenseOpen}
        />
      </Box>
    );
  }
}
