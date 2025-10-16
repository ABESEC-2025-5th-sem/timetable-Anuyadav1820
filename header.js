import React from 'react';

export default function Header() {
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12
        }}>
            <h1 style={{ margin: 0 }}>Class Time Table</h1>
            <div style={{ color: '#666' }}>Semester: Fall • Year: 2025</div>
        </header>
    );
}