/* 1. ძირითადი პარამეტრები და ცვლადები */
:root {
    --primary: #38bdf8;
    --dark: #0f172a;
    --card-bg: #1e293b;
    --text: #f1f5f9;
}

* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    font-family: 'Poppins', sans-serif; 
}

html { scroll-behavior: smooth; }

body { 
    background: var(--dark); 
    color: var(--text); 
    overflow-x: hidden; 
    line-height: 1.6;
}

/* 2. ნავიგაცია და ლოგო */
header { 
    position: fixed; 
    width: 100%; 
    top: 0; 
    z-index: 1000; 
    padding: 15px 5%; 
    transition: 0.4s; 
    background: rgba(15, 23, 42, 0.8); 
    backdrop-filter: blur(10px);
}

.navbar { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
}

#logoImg { width: 45px !important; height: auto; }

.logo { 
    display: flex; 
    align-items: center; 
    gap: 10px; 
    text-decoration: none; 
    color: var(--primary); 
    font-weight: 800; 
    font-size: 1.5rem; 
}

.nav-links { 
    display: flex; 
    list-style: none; 
    gap: 30px; 
}

.nav-links a { 
    text-decoration: none; 
    color: white; 
    transition: 0.3s; 
    font-weight: 400; 
}

.nav-links a:hover { color: var(--primary); }

/* 3. Hero სექცია და დიდი ღილაკი */
.hero { 
    height: 90vh; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    text-align: center; 
    background: linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), 
                url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200'); 
    background-size: cover; 
    background-position: center; 
}

.hero h1 { font-size: 4rem; margin-bottom: 15px; text-transform: uppercase; }
.hero p { font-size: 1.4rem; margin-bottom: 30px; opacity: 0.9; }

/* ღილაკის რეალური გაზრდა */
.btn-primary {
    display: inline-block;
    padding: 22px 60px !important; 
    font-size: 1.6rem !important; 
    font-weight: 800;
    background-color: var(--primary);
    color: white;
    border-radius: 50px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.4);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-primary:hover {
    transform: translateY(-5px) scale(1.05);
    background-color: #0ea5e9;
    box-shadow: 0 15px 30px rgba(56, 189, 248, 0.6);
}

/* 4. თამაშების სექცია (API) */
.games-section { padding: 80px 10%; }

.games-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin-top: 40px;
}

.game-card { 
    background: var(--card-bg); 
    padding: 25px; 
    border-radius: 20px; 
    text-align: center; 
    border: 1px solid #334155; 
    width: 320px; 
    transition: 0.4s; 
}

.game-card:hover { 
    transform: translateY(-15px); 
    border-color: var(--primary); 
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.game-card img { 
    width: 100%; 
    height: 200px;
    object-fit: cover;
    border-radius: 12px; 
    margin-bottom: 20px; 
}

/* 5. About სექცია და სურათის ფიქსაცია */
.about-section { background: #0b1120; padding: 100px 10%; }

.about-container { 
    display: flex; 
    align-items: center; 
    gap: 60px; 
    max-width: 1200px;
    margin: auto;
}

.about-text { flex: 1; }
.about-text h2 { font-size: 2.5rem; margin-bottom: 20px; color: var(--primary); }

.about-img { flex: 1; }
.about-img img {
    width: 100%;
    max-width: 550px;
    height: 450px; /* ფიქსირებული სიმაღლე */
    object-fit: cover; /* სურათის ფორმის შენარჩუნება */
    border-radius: 25px;
    display: block;
    box-shadow: 0 0 30px rgba(56, 189, 248, 0.2);
    border: 2px solid rgba(56, 189, 248, 0.3);
}

/* 6. ფორმა და რეგისტრაცია */
.contact-section { padding: 100px 10%; }

.form-container { 
    max-width: 480px; 
    margin: auto; 
    background: var(--card-bg); 
    padding: 50px; 
    border-radius: 24px; 
    border: 1px solid #334155; 
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.form-container h2 { text-align: center; margin-bottom: 30px; }

input { 
    width: 100%; 
    padding: 15px; 
    margin-bottom: 20px; 
    background: var(--dark); 
    border: 1px solid #334155; 
    color: white; 
    border-radius: 12px; 
    outline: none;
    transition: 0.3s;
}

input:focus { border-color: var(--primary); }

.btn-submit {
    width: 100%;
    padding: 15px;
    background: var(--primary);
    border: none;
    color: white;
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s;
}

.btn-submit:hover { background: #0ea5e9; }

/* 7. Cookies და ScrollTop */
.cookie-notification {
    position: fixed;
    bottom: 30px;
    left: 30px;
    background: var(--card-bg);
    padding: 20px 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    gap: 20px;
    z-index: 2000;
    border: 1px solid var(--primary);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

#scrollTop {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
    font-size: 1.2rem;
    font-weight: bold;
}

/* 8. მობილური ადაპტაცია */
@media (max-width: 968px) {
    .about-container { flex-direction: column; text-align: center; }
    .hero h1 { font-size: 2.8rem; }
    .nav-links { display: none; } /* ბურგერ მენიუსთვის */
}
