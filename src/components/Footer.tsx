const Footer = () => {
  return (
    <footer
      style={{
        background: "#05030d",
        color: "white",
        padding: "80px 100px 30px",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <style>
        {`
        .footer-links p{
          color:#b0b3b8;
          cursor:pointer;
          margin:6px 0;
          transition:0.3s;
        }

        .footer-links p:hover{
          color:#ff6a00;
          transform:translateX(4px);
        }

        .footer-logo{
          color:#ff6a00;
          text-shadow:0 0 8px rgba(255,106,0,0.6);
        }

        .social{
          display:flex;
          gap:15px;
          margin-top:15px;
        }

        .social div{
          width:32px;
          height:32px;
          border:1px solid #ff6a00;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:6px;
          cursor:pointer;
          transition:0.3s;
        }

        .social div:hover{
          background:#ff6a00;
          color:black;
          box-shadow:0 0 10px #ff6a00;
        }
        `}
      </style>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {/* Logo */}
        <div>
          <h2 className="footer-logo">EventRadar</h2>

          <p style={{ color: "#b0b3b8", maxWidth: "320px" }}>
            A campus event platform where students discover,
            register and participate in technical, cultural
            and sports events.
          </p>

          {/* Social Icons */}
          <div className="social">
            <div>F</div>
            <div>I</div>
            <div>X</div>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-links">
          <h4>Explore</h4>
          <p>Technical</p>
          <p>Cultural</p>
          <p>Sports</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <p>About</p>
          <p>Contact</p>
          <p>Login</p>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: "1px solid #1a1a1a",
          paddingTop: "20px",
          textAlign: "center",
          color: "#777",
          fontSize: "14px",
        }}
      >
        © 2026 EventRadar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;