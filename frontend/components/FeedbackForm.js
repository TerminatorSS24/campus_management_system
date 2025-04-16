'use client';
import { useState } from 'react';

export default function FeedbackForm({ onSubmit }) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback) onSubmit(feedback);
    setFeedback('');
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <textarea
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Your feedback..."
      />
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
}
