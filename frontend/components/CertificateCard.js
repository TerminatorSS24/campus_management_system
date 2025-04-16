export default function CertificateCard({ name, issuedFor, date }) {
    return (
      <div className="bg-yellow-100 p-4 border rounded shadow">
        <h3 className="font-semibold">{name}</h3>
        <p>Issued For: {issuedFor}</p>
        <p>Date: {date}</p>
      </div>
    );
  }
  