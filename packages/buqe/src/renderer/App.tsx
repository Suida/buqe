import { useState } from 'react';

export default function App() {
  const [title, setTitle] = useState('');

  return (
    <div>
      Title:
      <input
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button
        id="btn"
        type="button"
        onClick={() => window.electron.setTitle(title)}
      >
        Set
      </button>
    </div>
  );
}

