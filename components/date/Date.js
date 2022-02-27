import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'


// time-picker component. using showTimeSelect as a main props and works with basic functionality on react-datepicker that explained above
const DateSection = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      // selected={date}
      // onChange={handleDateChange}
      showTimeSelect
      dateFormat="Pp"
    />
  );
};

export default DateSection;