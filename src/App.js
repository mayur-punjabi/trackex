import React from "react";
import "./styles.css";
import { Box } from "@material-ui/core/";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import moment from "moment";
import { Header, Expenses, Footer, AddExpense } from "./components";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendarOpen: false,
      isAddExpenseOpen: false,
      selectedDate: new Date(),
      expenses: []
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

  addNewExpense = expense => {
    const expenses = this.state.expenses;
    expenses.unshift(expense);
    this.setState({ expenses });

    if (!localStorage.getItem("trackex")) {
      localStorage.setItem("trackex", JSON.stringify({ expenses: {} }));
    }
    const currentDate = moment(this.state.selectedDate).format("DD/MM/yyyy");
    const currentStorageData = JSON.parse(
      localStorage.getItem("trackex")["expenses"]
    );
    currentStorageData[currentDate] = expenses;
    localStorage.setItem("trackex", JSON.stringify(currentStorageData));
  };

  compnentDidMount() {
    console.log("hi");
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
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
            addNewExpense={this.addNewExpense}
          />
        </Box>
      </ThemeProvider>
    );
  }
}
