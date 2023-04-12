import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";
import PropTypes from "prop-types";

const RopoTimePicker = ({ onChange, format, value, name, className }) => {
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <KeyboardTimePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        placeholder="08:00 AM"
        mask="__:__ _M"
        value={value}
        onChange={onChange}
        className={`ropo-picker ${className}`}
      />
    </MuiPickersUtilsProvider>
  );
};

export default RopoTimePicker;

RopoTimePicker.defaultProps = {
  format: "hh:mm:ss",
};

RopoTimePicker.propTypes = {
  format: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
