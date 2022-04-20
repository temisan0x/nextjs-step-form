import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

// time-picker component. using showTimeSelect as a main props and works with basic functionality on react-datepicker that explained above
const DateSection = () => {
  const [startDate, setStartDate] = useState(new Date(2000, 1, 1));
  const [endDate, setEndDate] = useState(new Date().setMonth(startDate.getMonth() + 1))

  return (
    <div className="w-64 overflow-hidden">
      <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectStart
          startDate={startDate}
          endDate={endDate}
          nextMonthButtonLabel=">"
          previousMonthButtonLabel="<"
          popperClassName="react-datepicker-left"
        />
    </div>
  );
};


export default DateSection;