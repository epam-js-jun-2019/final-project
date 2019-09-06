import React from 'react';

export default function ({ pagination }) {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pagination}
      </ul>
    </nav>
  );
}