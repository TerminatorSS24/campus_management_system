export default function BookingCard({ room, time, bookedBy }) {
    return (
      <div className="bg-blue-100 p-4 border rounded shadow">
        <h3 className="font-bold">{room}</h3>
        <p>Time: {time}</p>
        <p>Booked by: {bookedBy}</p>
      </div>
    );
  }
  