import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";
import PropTypes from "prop-types";

const RopoDatePicker = ({ onChange, format, value, name, className }) => {
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        placeholder="DD-MM-YYYY"
        format={format}
        onChange={onChange}
        value={value}
        name={name}
        className={`ropo-picker ${className}`}
      />
    </MuiPickersUtilsProvider>
  );
};

export default RopoDatePicker;

RopoDatePicker.defaultProps = {
  format: "DD-MM-YYYY",
};

RopoDatePicker.propTypes = {
  format: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
