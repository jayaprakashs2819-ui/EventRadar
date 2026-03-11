const EventTicker = () => {
  return (
    <section
      style={{
        background: "#05030d",
        padding: "120px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          transform: "rotate(-4deg)",
          background: "#ff6a00",
          padding: "25px 0",
          overflow: "hidden",
        }}
      >
        <div
          className="ticker"
          style={{
            display: "flex",
            gap: "80px",
            fontSize: "28px",
            fontWeight: "800",
            color: "black",
            whiteSpace: "nowrap",
          }}
        >
          EVENTS • WORKSHOPS • PROSHOWS • HACKATHONS • EVENTRADAR 2026 • EVENTS • WORKSHOPS • PROSHOWS • HACKATHONS • EVENTRADAR 2026 •
        </div>
      </div>

      <style>
        {`
        .ticker{
          animation: tickerScroll 20s linear infinite;
        }

        @keyframes tickerScroll{
          0%{
            transform: translateX(0);
          }
          100%{
            transform: translateX(-50%);
          }
        }
        `}
      </style>
    </section>
  );
};

export default EventTicker;