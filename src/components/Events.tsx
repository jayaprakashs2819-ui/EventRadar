const Events = () => {
  const events = [
    {
      title: "ReGen – Powering a Sustainable Future",
      category: "Ideathon",
      team: "Team of 2-4",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Matrix Mania",
      category: "Coding",
      team: "Team of 1-2",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
    {
      title: "One Day UN Committee",
      category: "Debate",
      team: "Individual",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    },
    {
      title: "Byte The Snake",
      category: "Gaming",
      team: "Individual",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    },
  ];

  return (
    <section
      style={{
        background: "#05030d",
        color: "white",
        padding: "100px",
      }}
    >
      {/* Legacy Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: "80px",
        }}
      >
        <div style={{ maxWidth: "450px" }}>
          <p style={{ color: "#4da3ff", fontSize: "14px" }}>14TH EDITION</p>

          <h2 style={{ fontSize: "40px", marginTop: "10px" }}>
            A Legacy of Excellence
          </h2>

          <p style={{ color: "#b0b3b8", marginTop: "20px" }}>
            EventRadar continues to bring together innovators, artists,
            thinkers and creators. It is a dynamic confluence of
            technology, culture and creativity.
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,200px)",
            gap: "20px",
          }}
        >
          {[
            { number: "1.3L+", label: "Participants" },
            { number: "900+", label: "Events" },
            { number: "470+", label: "Workshops" },
            { number: "25+", label: "Conclaves" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "#0f0c1a",
                padding: "30px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0px 0px 15px rgba(255,90,0,0.2)",
              }}
            >
              <h2 style={{ color: "#ff6a00" }}>{stat.number}</h2>
              <p style={{ color: "#b0b3b8" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Event Cards */}
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
        Explore Events
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              background: "#0f0c1a",
              boxShadow: "0px 0px 20px rgba(255,90,0,0.15)",
              transition: "transform 0.3s",
            }}
          >
            <img
              src={event.img}
              alt={event.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <span
                style={{
                  background: "#ff6a00",
                  padding: "4px 10px",
                  fontSize: "12px",
                  borderRadius: "4px",
                }}
              >
                {event.category}
              </span>

              <h3 style={{ marginTop: "10px" }}>{event.title}</h3>

              <p style={{ color: "#b0b3b8", fontSize: "14px" }}>
                {event.team}
              </p>

              <button
                style={{
                  marginTop: "15px",
                  padding: "8px 16px",
                  border: "1px solid #ff6a00",
                  background: "transparent",
                  color: "#ff6a00",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;