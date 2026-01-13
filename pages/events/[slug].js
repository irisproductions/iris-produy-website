// pages/events/[slug].js
import events from "../../data/events";

export default function Event({ event }) {
  return (
    <div className="bg-black text-white min-h-screen p-10">
      <img src={event.image} className="w-full max-h-[400px] object-cover mb-6" />
      <h1 className="text-4xl text-red-500">{event.title}</h1>
      <p className="mt-2">{event.description}</p>
      <p className="mt-4">📍 {event.venue}</p>
      <p>📅 {event.date}</p>

      <form action="/api/checkout" method="POST">
        <input type="hidden" name="price" value={event.price} />
        <h2 style={{ marginTop: "30px", fontSize: "22px", color: "red" }}>
  Select Ticket Type
</h2>

<form action="/api/checkout" method="POST">
  <input type="hidden" name="ticketType" value="Single Ticket" />
  <input type="hidden" name="price" value="649" />
  <button style={{ marginTop: "15px", padding: "10px", width: "100%" }}>
    🎟 Single Ticket — ₹649
  </button>
</form>

<form action="/api/checkout" method="POST">
  <input type="hidden" name="ticketType" value="Couple Ticket" />
  <input type="hidden" name="price" value="1199" />
  <button style={{ marginTop: "15px", padding: "10px", width: "100%" }}>
    👩‍❤️‍👨 Couple Ticket — ₹1199
  </button>
</form>

<form action="/api/checkout" method="POST">
  <input type="hidden" name="ticketType" value="Group Ticket (5 People)" />
  <input type="hidden" name="price" value="2999" />
  <button style={{ marginTop: "15px", padding: "10px", width: "100%" }}>
    👥 Group Ticket (5 People) — ₹2999
  </button>
</form>
      </form>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: events.map(e => ({ params: { slug: e.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const event = events.find(e => e.slug === params.slug);
  return { props: { event } };
}