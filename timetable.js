import React from 'react';

const days = ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const slots = [
    { time: '08:00 - 09:00', Monday: 'Math', Tuesday: 'Physics', Wednesday: 'Chemistry', Thursday: 'English', Friday: 'PE' },
    { time: '09:00 - 10:00', Monday: 'CS', Tuesday: 'Math', Wednesday: 'Biology', Thursday: 'CS Lab', Friday: 'History' },
    { time: '10:15 - 11:15', Monday: 'English', Tuesday: 'Chemistry', Wednesday: 'Math', Thursday: 'Physics', Friday: 'Art' },
    { time: '11:15 - 12:15', Monday: 'Break', Tuesday: 'Break', Wednesday: 'Break', Thursday: 'Break', Friday: 'Break' },
    { time: '12:15 - 13:15', Monday: 'History', Tuesday: 'CS', Wednesday: 'English', Thursday: 'Math', Friday: 'Music' },
    { time: '14:00 - 15:00', Monday: 'Lab', Tuesday: 'Project', Wednesday: 'Seminar', Thursday: 'Lab', Friday: 'Free' },
];

const cellColors = {
    Math: '#fbe7c6',
    Physics: '#d0e7ff',
    Chemistry: '#ffdce0',
    CS: '#e6ffd9',
    English: '#fff1b8',
    History: '#f0d9ff',
    PE: '#dff4ff',
    Art: '#ffe6f2',
    Break: '#f2f2f2',
    'CS Lab': '#cfeee7',
    Biology: '#e8ffe8',
    Music: '#fff0d9',
    Lab: '#e8f3ff',
    Project: '#f6f0ff',
    Seminar: '#f3ffe6',
    Free: '#fafafa'
};

export default function TimeTable() {
 return (
 <div style={{ overflowX: 'auto', border: '1px solid #e0e0e0', borderRadius: 6 }}>
<table style={{ borderCollapse: 'collapse', minWidth: 720, width: '100%' }}>
 <thead>
 <tr>
    {days.map((d) => (
  <th key={d} style={{
     textAlign: 'left',
     padding: '12px 10px',
     background: '#fafafa',
    borderBottom: '1px solid #e7e7e7',
        fontWeight: 600
 }}>{d}</th>
   ))}
  </tr>
  </thead>
 <tbody>
    {slots.map((slot) => (
     <tr key={slot.time}>
    <td style={{
  padding: '10px',
 borderBottom: '1px solid #f1f1f1',
 width: 140,
     fontWeight: 600,
 background: '#fff'
 }}>{slot.time}</td>

 {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => {
 const text = slot[day] || '';
 const bg = cellColors[text] || '#ffffff';
     return (
  <td key={day} style={{
  padding: '10px',
 borderBottom: '1px solid #f6f6f6',
 verticalAlign: 'top',
 background: bg,
  transition: 'background .15s ease'
             }}>
 <div style={{ fontWeight: 600 }}>{text}</div>
    <div style={{ marginTop: 6, color: '#555', fontSize: 13 }}>
   {text && text !== 'Break' && text !== 'Free' ? 'Room: 101' : ''}
</div> </td>
);
    })}
 </tr>
 ))}
 </tbody>
  </table>
    </div>
    );
}                              