export default function LostItemCard({ item, location, reportedBy }) {
    return (
      <div className="bg-red-100 p-4 border rounded shadow">
        <h3 className="font-bold">{item}</h3>
        <p>Found at: {location}</p>
        <p>Reported by: {reportedBy}</p>
      </div>
    );
  }
  