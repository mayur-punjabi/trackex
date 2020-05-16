import React from "react";
import { Box, Typography, AppBar, Toolbar } from "@material-ui/core/";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

export default class Header extends React.Component {
  render() {
    return (
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            width="100%"
            p={1}
          >
            <Typography
              variant="h5"
              style={{
                fontFamily: "Patrick Hand SC",
                letterSpacing: "0.25rem"
              }}
            >
              TrackEx
            </Typography>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                variant="dialog"
                format="DD/MM/YYYY"
                size="small"
                disableToolbar
                autoOk
                disableFuture
                disabled
                InputProps={{
                  disableUnderline: true,
                  style: {
                    fontWeight: "900",
                    width: "10ch",
                    color: "black"
                  }
                }}
                open={this.props.isCalendarOpen}
                onOpen={() => this.props.setCalendarOpen(true)}
                onClose={() => this.props.setCalendarOpen(false)}
                value={this.props.selectedDate}
                onChange={this.props.handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}
