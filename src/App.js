import React from "react";
import "./styles.css";
import { Box } from "@material-ui/core/";
import { Header, Expenses, Footer } from "./components";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box display="flex" flexDirection="column" style={{ height: "100vh" }}>
        <Header />
        <Expenses />
        <Footer />
      </Box>
    );
  }
}
