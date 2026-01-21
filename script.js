// 1. ბურგერ მენიუს ფუნქციონალი
const burger = document.getElementById('burgerMenu');
const nav = document.getElementById('navMenu');

if (burger) {
    burger.onclick = () => {
        nav.classList.toggle('active');
    };
}

// 2. ჰედერის ფერის შეცვლა სქროლისას
window.onscroll = () => {
    const header = document.getElementById('mainHeader');
    const scrollBtn = document.getElementById('scrollTop');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        if (scrollBtn) scrollBtn.style.display = "block";
    } else {
        header.classList.remove('scrolled');
        if (scrollBtn) scrollBtn.style.display = "none";
    }
};

// 3. API-დან ინფორმაციის წამოღება (Axios)
async function getGames() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6');
        const container = document.getElementById('gamesContainer');
        if (!container) return;
        
        container.innerHTML = '';

        const images = [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
            "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400",
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400"
        ];

        res.data.forEach((item, i) => {
            container.innerHTML += `
                <div class="game-card">
                    <img src="${images[i]}" alt="Game">
                    <h3>${item.title.slice(0, 15)}</h3>
                    <p>Premium Content</p>
                </div>
            `;
        });
    } catch (err) {
        console.log("API error");
    }
}
getGames();

// 4. ფორმის ვალიდაცია (Regex)
const form = document.getElementById('contactForm');
const togglePass = document.getElementById('togglePass');
const passInput = document.getElementById('password');

if (togglePass) {
    togglePass.onclick = () => {
        passInput.type = passInput.type === 'password' ? 'text' : 'password';
    };
}

if (form) {
    form.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const pass = passInput.value;
        const error = document.getElementById('formError');
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !pass) {
            error.innerText = "შეავსეთ ყველა ველი!";
            error.style.color = "red";
        } else if (!emailRegex.test(email)) {
            error.innerText = "ელ-ფოსტის ფორმატი არასწორია!";
        } else {
            error.innerText = "წარმატებით გაიგზავნა!";
            error.style.color = "#38bdf8";
            form.reset();
        }
    };
}

// 5. Cookies (LocalStorage)
const cookieBar = document.getElementById('cookieBar');
const acceptBtn = document.getElementById('acceptCookies');

if (cookieBar && !localStorage.getItem('myCookies')) {
    setTimeout(() => {
        cookieBar.style.display = 'block';
    }, 2000);
}

if (acceptBtn) {
    acceptBtn.onclick = () => {
        localStorage.setItem('myCookies', 'true');
        cookieBar.style.display = 'none';
    };
}