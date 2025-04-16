export default function FeeReceiptCard({ student, amount, date }) {
    return (
      <div className="bg-indigo-100 p-4 border rounded shadow">
        <h3>{student}</h3>
        <p>Amount: ₹{amount}</p>
        <p>Date: {date}</p>
      </div>
    );
  }
  