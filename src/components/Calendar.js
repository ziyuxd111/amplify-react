import React, { useState, useEffect } from 'react';
import './Calendar.css';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [statsForDays, setStatsForDays] = useState({});
  
  useEffect(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const days = new Date(currentYear, currentMonth + 1, 0).getDate();
    const paddingDays = firstDayOfMonth;
    
    const daysArr = [];
    for(let i = 1; i <= paddingDays + days; i++) {
      if (i > paddingDays) {
        daysArr.push(i - paddingDays);
      } else {
        daysArr.push(null);
      }
    }
    
    setDaysInMonth(daysArr);
  }, [currentMonth, currentYear]);

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleDayClick = (day) => {
    if (!day) return;

    const steps = prompt("Enter your Reach Distance you managed to reach today");
    const heartRate = prompt("Enter your Pain Level that you feel today from 0-10");
    const weight = prompt("Enter your Range Of Motion of your knee today");

    setStatsForDays(prev => ({
      ...prev,
      [day]: { steps, heartRate, weight }
    }));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth}>Prev</button>
        <h1>{new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h1>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="weekdays">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(weekday => (
          <div key={weekday}>{weekday}</div>
        ))}
      </div>
      <div className="dates">
        {daysInMonth.map((day, index) => (
          <div key={index} className={`date ${day ? '' : 'padding'}`} onClick={() => handleDayClick(day)}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
