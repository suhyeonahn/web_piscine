import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';

function MyDatePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <DatePicker
      value={selectedDate}
      onChange={handleDateChange}
      format="dd/MM/yyyy"
      label="Select a date"
      inputVariant="outlined"
    />
  );
}

export default MyDatePicker;