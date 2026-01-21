/* ძირითადი სტილები */
:root {
    --primary: #38bdf8;
    --dark: #0f172a;
    --card-bg: #1e293b;
    --text: #f1f5f9;
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
html { scroll-behavior: smooth; }
body { background: var(--dark); color: var(--text); overflow-x: hidden; }

/* ლოგოს ზომის კონტროლი */
#logoImg {
    width: 50px !important;
    height: auto;
    display: block;
}

/* ნავიგაცია */
header { position: fixed; width: 100%; top: 0; z-index: 1000; padding: 20px 5%; transition: 0.4s; }
header.scrolled { background: rgba(15, 23, 42, 0.95); padding: 10px 5%; border-bottom: 1px solid var(--primary); }
.navbar { display: flex; justify-content: space-between; align-items: center; }
.logo { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--primary); font-weight: 800; font-size: 1.5rem; }

.nav-links { display: flex; list-style: none; gap: 30px; }
.nav-links a { text-decoration: none; color: white; transition: 0.3s; font-weight: 500; }
.nav-links a:hover { color: var(--primary); }

/* Burger Menu */
.burger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
.burger span { width: 25px; height: 3px; background: white; transition: 0.3s; }

/* Hero Section */
.hero { height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1470'); background-size: cover; background-position: center; }
.hero h1 { font-size: 3.5rem; margin-bottom: 15px; }

/* Grid for API Games */
.games-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 40px; }
.game-card { background: var(--card-bg); padding: 20px; border-radius: 15px; text-align: center; transition: 0.3s; border: 1px solid #334155; }
.game-card:hover { transform: translateY(-10px); border-color: var(--primary); }
.game-card img { width: 100%; border-radius: 10px; margin-bottom: 15px; }

/* Sections */
section { padding: 80px 10%; }
.about-container { display: flex; align-items: center; gap: 40px; }

/* გასწორებული About Image სტილი */
.about-img {
    flex: 1;
    display: flex;
    justify-content: center;
}
.about-img img { 
    width: 100%; 
    max-width: 450px; 
    height: auto;
    object-fit: cover;
    filter: drop-shadow(0 0 15px var(--primary)); 
    border-radius: 12px;
}

/* Form Styles */
.form-container { max-width: 450px; margin: auto; background: var(--card-bg); padding: 40px; border-radius: 15px; }
input { width: 100%; padding: 12px; margin-bottom: 15px; background: var(--dark); border: 1px solid #334155; color: white; border-radius: 8px; outline: none; }
.pass-box { position: relative; }
#togglePass { position: absolute; right: 10px; top: 12px; cursor: pointer; }
.btn-submit, .btn-primary { padding: 12px 25px; background: var(--primary); border: none; font-weight: bold; cursor: pointer; border-radius: 8px; transition: 0.3s; color: #0f172a; }
.btn-submit:hover { transform: scale(1.03); background: #0ea5e9; }

/* Footer & Extras */
footer { text-align: center; padding: 40px; background: #020617; }
.cookie-notification { position: fixed; bottom: 20px; left: 20px; background: white; color: black; padding: 20px; border-radius: 10px; z-index: 2000; display: none; }
#scrollTop { position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; background: var(--primary); border: none; border-radius: 50%; color: white; cursor: pointer; display: none; }

/* Responsive */
@media (max-width: 768px) {
    .nav-links { position: fixed; right: -100%; top: 70px; background: var(--dark); width: 100%; height: 100vh; flex-direction: column; padding: 50px; transition: 0.5s; text-align: center; }
    .nav-links.active { right: 0; }
    .burger { display: flex; }
    .about-container { flex-direction: column; }
    .hero h1 { font-size: 2.2rem; }
}
  
