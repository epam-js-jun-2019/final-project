import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
