import React from 'react';
import Header from './Header';
import TimeTable from './TimeTable';
import Footer from './Footer';

export default function App() {
    return (
        <div style={{ fontFamily: 'Segoe UI, Roboto, sans-serif', padding: 16 }}>
            <Header />
            <main style={{ marginTop: 16 }}>
                <TimeTable />
            </main>
            <Footer />
        </div>
    );
}