// 1. API - თამაშების წამოღება
async function fetchGames() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const container = document.getElementById('gamesContainer');
        const images = [
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
            "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400",
            "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400"
        ];
        
        container.innerHTML = response.data.map((item, index) => `
            <div class="game-card animate__animated animate__fadeInUp">
                <img src="${images[index]}" alt="Game">
                <h3>პროდუქტი ${index + 1}</h3>
                <p>აღწერა API-დან</p>
            </div>
        `).join('');
    } catch (error) {
        console.error("API Error");
    }
}
fetchGames();

// 2. ფორმის ვალიდაცია
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.onsubmit = function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const errorDisplay = document.getElementById('formError');
        
        // რეგულარული გამოსახულება ელ-ფოსტისთვის
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            errorDisplay.innerText = "❌ გთხოვთ შეიყვანოთ ელ-ფოსტა!";
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
