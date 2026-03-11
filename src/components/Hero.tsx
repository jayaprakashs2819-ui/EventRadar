import { useState } from "react";

const Hero = () => {

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e:any) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      onMouseMove={handleMove}
      style={{
        background:"#05030d",
        color:"white",
        padding:"120px 100px",
        position:"relative",
        overflow:"hidden"
      }}
    >

<style>{`

/* SPOTLIGHT */
.spotlight{
position:absolute;
width:500px;
height:500px;
background:radial-gradient(circle, rgba(255,90,0,0.15), transparent 70%);
filter:blur(60px);
pointer-events:none;
transform:translate(-50%,-50%);
}

/* RADAR TEXT ANIMATION */
.radarText{
font-weight:bold;
background:linear-gradient(90deg,#ffffff,#ff6a00,#ffffff);
background-size:200%;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
animation:surgeMove 3s linear infinite;
}

@keyframes surgeMove{
0%{background-position:-200%;}
100%{background-position:200%;}
}

/* HERO IMAGE */
.heroImg{
width:620px;
border-radius:24px;
animation:cardSwing 6s ease-in-out infinite;
box-shadow:
0 0 25px rgba(255,106,0,0.4),
0 0 50px rgba(255,106,0,0.25);
transition:0.4s;
transform-origin:top center;
}

/* hover zoom */
.heroImg:hover{
transform:scale(1.05);
}

/* SWING ANIMATION (chain style) */
@keyframes cardSwing{

0%{
transform:rotateZ(-4deg) translateY(0px);
}

25%{
transform:rotateZ(4deg) translateY(-10px);
}

50%{
transform:rotateZ(-3deg) translateY(5px);
}

75%{
transform:rotateZ(3deg) translateY(-8px);
}

100%{
transform:rotateZ(-4deg) translateY(0px);
}

}

/* BUTTON */
.registerBtn{
margin-top:30px;
padding:12px 28px;
border:2px solid #ff6a00;
background:transparent;
color:#ff6a00;
font-weight:bold;
border-radius:6px;
cursor:pointer;
position:relative;
overflow:hidden;
}

.registerBtn::before{
content:"";
position:absolute;
left:0;
top:0;
width:0%;
height:100%;
background:#ff6a00;
transition:0.4s;
z-index:-1;
}

.registerBtn:hover::before{
width:100%;
}

.registerBtn:hover{
color:black;
}

`}</style>

{/* spotlight */}
<div
className="spotlight"
style={{
top:pos.y,
left:pos.x
}}
/>

{/* background text */}
<h1
style={{
position:"absolute",
top:"50%",
left:"50%",
transform:"translate(-50%, -50%)",
fontSize:"220px",
fontWeight:"bold",
color:"rgba(255,255,255,0.03)",
letterSpacing:"20px",
pointerEvents:"none"
}}
>
RADAR
</h1>

<div
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
flexWrap:"wrap",
position:"relative",
zIndex:2
}}
>

{/* LEFT CONTENT */}
<div style={{maxWidth:"520px"}}>

<p style={{fontWeight:"bold",letterSpacing:"2px"}}>
EVENTRADAR 2026
</p>

<h1
style={{
fontSize:"56px",
marginTop:"10px",
lineHeight:"1.2"
}}
>
THE <span className="radarText">RADAR</span> STARTS HERE
</h1>

<p style={{marginTop:"20px",color:"#b0b3b8"}}>
Discover. Register. Participate.
</p>

<button className="registerBtn">
REGISTER NOW
</button>

</div>

{/* RIGHT IMAGE */}
<div
style={{
position:"relative",
marginTop:"40px"
}}
>

<div
style={{
position:"absolute",
top:"-30px",
left:"-30px",
width:"650px",
height:"420px",
background:"radial-gradient(circle, rgba(255,90,0,0.35), transparent 70%)",
filter:"blur(60px)",
zIndex:0
}}
/>

<div
style={{
borderRadius:"26px",
overflow:"hidden",
position:"relative",
zIndex:2
}}
>
<img
src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
alt="event"
className="heroImg"
/>
</div>

</div>

</div>

</section>
  );
};

export default Hero;


// 11/03/2026
