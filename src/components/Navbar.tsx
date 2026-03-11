import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <style>
        {`
        /* Logo glow */
        .logo{
          font-size:22px;
          font-weight:bold;
          color:#ff6a00;
          animation:logoGlow 3s ease-in-out infinite;
        }

        @keyframes logoGlow{
          0%{
            text-shadow:0 0 5px rgba(255,106,0,0.4);
          }
          50%{
            text-shadow:
              0 0 10px #ff6a00,
              0 0 20px #ff6a00,
              0 0 40px rgba(255,106,0,0.6);
          }
          100%{
            text-shadow:0 0 5px rgba(255,106,0,0.4);
          }
        }

        /* Menu hover underline */
        .menu a{
          position:relative;
          color:white;
          text-decoration:none;
          font-size:15px;
        }

        .menu a::after{
          content:"";
          position:absolute;
          width:0%;
          height:2px;
          left:0;
          bottom:-4px;
          background:#ff6a00;
          transition:0.3s;
        }

        .menu a:hover::after{
          width:100%;
        }

        /* Login button animation */
        .loginBtn{
          padding:8px 20px;
          border:2px solid #ff6a00;
          background:transparent;
          color:#ff6a00;
          font-weight:bold;
          border-radius:6px;
          cursor:pointer;
          position:relative;
          overflow:hidden;
          transition:0.3s;
        }

        .loginBtn::before{
          content:"";
          position:absolute;
          left:0;
          top:0;
          width:0%;
          height:100%;
          background:#ff6a00;
          transition:0.35s;
          z-index:-1;
        }

        .loginBtn:hover::before{
          width:100%;
        }

        .loginBtn:hover{
          color:black;
          box-shadow:
            0 0 8px #ff6a00,
            0 0 18px #ff6a00,
            0 0 30px rgba(255,106,0,0.7);
        }
        `}
      </style>

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 60px",
          background: "rgba(5,3,13,0.9)",
          backdropFilter: "blur(10px)",
          color: "white",
        }}
      >
        {/* Logo */}
        <div className="logo">
          EventRadar
        </div>

        {/* Menu */}
        <div
          className="menu"
          style={{
            display: "flex",
            gap: "35px",
            alignItems: "center",
          }}
        >
          <a href="#">Explore</a>
          <a href="#">Accommodation</a>
          <a href="#">Ambassadors</a>
          <a href="#">Pro-Shows</a>
        </div>

        {/* Login Button */}
        <Link to="/login">
          <button className="loginBtn">LOGIN</button>
        </Link>
      </nav>
    </>
  );
}