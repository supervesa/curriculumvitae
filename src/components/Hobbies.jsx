export default function Hobbies({ hobbies }) {
  return (
    <section className="hobbies-section">
      <h1>Harrastukset</h1>
      <p>{(hobbies || []).join(', ') || 'Ei harrastustietoja'}</p>
    </section>
  );
}