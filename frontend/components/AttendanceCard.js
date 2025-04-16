export default function AttendanceCard({ student, status }) {
    return (
      <div className="bg-green-100 p-4 border rounded shadow">
        <h2 className="font-semibold">{student}</h2>
        <p>Status: <span className="font-bold">{status}</span></p>
      </div>
    );
  }
  