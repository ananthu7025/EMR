import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './Calendar.css'; // Create this CSS file for custom styling

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Sample Event',
    start: new Date(),
    end: new Date(),
  },
  // Add more events here
];

const Calendar = () => {
  return (
    <div class="container-fluid">
    <div class="layout-specing">
        <div>
            <h5 class="mb-0">Calendar</h5>
<div className='calendar-container'>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh" }}
      />
      </div>
      </div>
      </div>
    </div>
  );
};

export default Calendar;
