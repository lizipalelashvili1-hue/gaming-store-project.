// 1. API - თამაშების წამოღება და გამოჩენა
async function fetchGames() {
    try {
        // ვიყენებთ Axios-ს მონაცემების წამოსაღებად
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const container = document.getElementById('gamesContainer');
        
        // საიმედო სურათების ლინკები
        const images = [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
            "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400"
        ];
        
        // ვასუფთავებთ კონტეინერს და ვამატებთ ბარათებს
        container.innerHTML = response.data.map((item, index) => `
            <div class="game-card animate__animated animate__fadeInUp">
                <img src="${images[index]}" alt="Game Image">
                <h3>პროდუქტი ${index + 1}</h3>
                <p>${item.title.slice(0, 20)}...</p>
            </div>
        `).join('');
    } catch (error) {
        console.error("API Error:", error);
    }
}
fetchGames();

// 2. ბურგერ მენიუს ფუნქციონალი
const burger = document.getElementById('burgerMenu');
const nav = document.getElementById('navMenu');

if (burger) {
    burger.onclick = () => {
        nav.classList.toggle('active'); // ამატებს/აშორებს 'active' კლასს
    };
}

// 3. ფორმის ვალიდაცია (Regex & Empty fields)
const contactForm = document.getElementById('contactForm');
const passInput = document.getElementById('password');
const togglePass = document.getElementById('togglePass');

// პაროლის გამოჩენა/დამალვა
if (togglePass) {
    togglePass.onclick = () => {
        passInput.type = passInput.type === 'password' ? 'text' : 'password';
    };
}

if (contactForm) {
    contactForm.onsubmit = function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = passInput.value.trim();
        const errorDisplay = document.getElementById('formError');
        
        // Regex იმეილის ფორმატისთვის
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!username || !email || !password) {
            errorDisplay.innerText = "❌ შეავსეთ ყველა ველი!";
            errorDisplay.style.color = "#ef4444";
        } else if (!emailPattern.test(email)) {
            errorDisplay.innerText = "❌ ელ-ფოსტის ფორმატი არასწორია!";
            errorDisplay.style.color = "#ef4444";
        } else {
            errorDisplay.innerText = "✅ წარმატებით გაიგზავნა!";
            errorDisplay.style.color = "#38bdf8";
            contactForm.reset();
        }
    };
}

// 4. Cookies (LocalStorage)
const cookieBar = document.getElementById('cookieBar');
const acceptBtn = document.getElementById('acceptCookies');

// ვამოწმებთ, უკვე დაეთანხმა თუ არა მომხმარებელი
if (cookieBar && !localStorage.getItem('myCookies')) {
    cookieBar.style.display = 'block';
}

if (acceptBtn) {
    acceptBtn.onclick = () => {
        localStorage.setItem('myCookies', 'true'); // ვინახავთ ბრაუზერში
        cookieBar.style.display = 'none';
    };
}

// 5. დამატებითი ლოგიკა: Header-ის ფერის შეცვლა სქროლისას
window.onscroll = () => {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.style.background = "rgba(15, 23, 42, 0.95)";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    } else {
        header.style.background = "rgba(15, 23, 42, 0.8)";
        header.style.boxShadow = "none";
    }
};
