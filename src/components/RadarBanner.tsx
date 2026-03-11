const RadarBanner = () => {
  return (
    <section
      style={{
        background: "#070414",
        padding: "120px 0",
        textAlign: "center",
        overflow: "hidden"
      }}
    >
      <style>
        {`
          @keyframes radarZoom {
            0% {
              transform: scale(1);
              text-shadow: 0 0 10px rgba(255,106,0,0.3);
            }
            50% {
              transform: scale(1.08);
              text-shadow:
                0 0 25px #ff6a00,
                0 0 50px rgba(255,106,0,0.6);
            }
            100% {
              transform: scale(1);
              text-shadow: 0 0 10px rgba(255,106,0,0.3);
            }
          }

          .radar-text {
            font-size: 200px;
            font-weight: 900;
            color: transparent;
            -webkit-text-stroke: 2px #ff6a00;
            letter-spacing: 20px;
            display: inline-block;
            animation: radarZoom 5s ease-in-out infinite;
          }

          @media (max-width: 900px) {
            .radar-text {
              font-size: 120px;
            }
          }
        `}
      </style>

      <h1 className="radar-text">RADAR</h1>
    </section>
  );
};

export default RadarBanner;