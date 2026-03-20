/* ============================================================
   RHEMA CHAPEL ELEBU — FULL SCRIPT
   ============================================================ */

// ===== DEPARTMENT DATA =====
const departmentDetails = {
    choir: {
        icon: "🎵",
        title: "Choir Department",
        details: "The choir leads worship and praises God through music. Members meet every Sunday after service for rehearsals and practice. We perform at services and special events throughout the year."
    },
    ushers: {
        icon: "👥",
        title: "Ushers Department",
        details: "Ushers welcome members and guests, ensuring a warm and welcoming atmosphere for all who visit. They help with seating and assist in various church activities."
    },
    intercesory: {
        icon: "🙏",
        title: "Intercesory",
        details: "The Intercessory Department is the prayer unit of the church, committed to standing in the gap for others through consistent and fervent prayers, seeking God’s guidance, protection, and breakthroughs."
    },
    children: {
        icon: "🧑",
        title: "Children's Ministry",
        details: "We nurture children in God's word through fun, interactive classes every Sunday. We provide Bible stories, games, crafts, and activities to help children grow spiritually."
    },
    women: {
        icon: "👩‍🤝‍👩",
        title: "Women's Ministry",
        details: "Empowering women through Bible study, prayer meetings, and fellowship. Meets every Friday for prayer, intercession, and discussions on topics relevant to Christian women."
    },
    men: {
        icon: "👨‍🤝‍👨",
        title: "Men's Ministry",
        details: "Men gathering for accountability, spiritual growth, and service. We meet every Saturday morning for prayer, Bible study, and outreach activities in the community."
    },
    youth: {
        icon: "👦",
        title: "Youth's Ministry",
        details: "The Youth Fellowship unites young people for worship, growth, and active involvement in church and community."

    },
    evangelism: {
        icon: "📢",
        title: "Evangelism Department",
        details: "Taking the gospel to the community. We conduct monthly outreach programmes, street evangelism, hospital visits, and community service to spread God's message."
    },
    praise: {
        icon: "🎥",
        title: "Drama Ministry",
        details: "Using drama and creative arts to communicate the gospel message. We prepare skits, plays, and theatrical presentations for Sunday services and special programmes."
    },
    money: {
        icon: "👛",
        title: "Treasury Department",
        details: "Managing the financial affairs of the church with transparency and integrity. Responsible for collecting, recording, and disbursing church funds according to approved budgets."
    },
    media: {
        icon: "📱",
        title: "Media & Technology",
        details: "Managing church website, social media, sound system, and live streaming of services. We ensure quality audio-visual presentations during all church activities."
    },
    security: {
        icon: "🔐",
        title: "Security Department",
        details: "Ensuring the safety and security of members and church properties at all times. We monitor access and maintain a safe environment for worship and fellowship."
    },
    welfare: {
        icon: "❤️",
        title: "Welfare Department",
        details: "Caring for members in need through support, counselling, and community services. We provide assistance during times of loss, illness, and financial hardship."
    }
};

// ===== SHOW DEPARTMENT MODAL =====
function showDepartment(deptId) {
    const dept = departmentDetails[deptId];
    if (!dept) return;
    document.getElementById('deptModalIcon').textContent    = dept.icon;
    document.getElementById('deptModalTitle').textContent   = dept.title;
    document.getElementById('deptModalDetails').textContent = dept.details;
    document.getElementById('deptModal').style.display      = 'block';
}

function closeDepartment() {
    document.getElementById('deptModal').style.display = 'none';
}

window.addEventListener('click', function (event) {
    const modal = document.getElementById('deptModal');
    if (event.target === modal) modal.style.display = 'none';
});

// ===== COPY ACCOUNT NUMBER =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert('Account number copied to clipboard!'))
        .catch(err => console.error('Could not copy text:', err));
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== SCROLL-REVEAL ANIMATION (IntersectionObserver) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .pastor-card, .dept-card, .account-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== CONTACT CARDS SCROLL REVEAL =====
const contactCardObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.transition =
                'opacity 0.6s ease ' + (entry.target.dataset.delay || '0s') + ', ' +
                'transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ' + (entry.target.dataset.delay || '0s');
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0)';
            contactCardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.contact-info-card').forEach((card, i) => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(40px)';
    card.dataset.delay   = (i * 0.1) + 's';
    contactCardObserver.observe(card);
});

// ===== PARTICLE GENERATOR =====
(function createParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;

    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'];

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size     = Math.random() * 8 + 3;
        const color    = colors[Math.floor(Math.random() * colors.length)];
        const delay    = Math.random() * 20;
        const duration = Math.random() * 15 + 10;
        const x        = Math.random() * 100;
        const y        = Math.random() * 100;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${x}%;
            top: ${y}%;
            opacity: ${Math.random() * 0.4 + 0.1};
            animation: float ${duration}s ${delay}s infinite;
        `;

        container.appendChild(particle);
    }
})();

// ===== ANIMATED STAR CANVAS (Apostolic Section) =====
(function initStarCanvas() {
    const canvas = document.getElementById('starsCanvas');
    if (!canvas) return;

    const ctx     = canvas.getContext('2d');
    const section = canvas.parentElement;
    let stars     = [];

    function resize() {
        canvas.width  = section.offsetWidth;
        canvas.height = section.offsetHeight;
    }

    function initStars() {
        stars = [];
        for (let i = 0; i < 180; i++) {
            stars.push({
                x:     Math.random() * canvas.width,
                y:     Math.random() * canvas.height,
                r:     Math.random() * 1.4 + 0.2,
                speed: Math.random() * 0.008 + 0.003,
                phase: Math.random() * Math.PI * 2
            });
        }
    }

    function draw(t) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => {
            const opacity = 0.2 + 0.6 * Math.abs(Math.sin(s.phase + t * s.speed));
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(240, 208, 128, ${opacity})`;
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }

    resize();
    initStars();
    requestAnimationFrame(draw);

    window.addEventListener('resize', () => {
        resize();
        initStars();
    });
})();

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        navbar.style.padding   = '0.7rem 0';
    } else {
        navbar.style.boxShadow = '';
        navbar.style.padding   = '1rem 0';
    }
});

// ===== DESIGNER MODAL =====
function openDesigner() {
    const modal = document.getElementById('designerModal');
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDesignerBtn() {
    const modal = document.getElementById('designerModal');
    if (!modal) return;
    modal.style.animation = 'designerFadeIn 0.25s ease reverse forwards';
    setTimeout(() => {
        modal.classList.remove('open');
        modal.style.animation = '';
        document.body.style.overflow = '';
    }, 220);
}

function closeDesigner(e) {
    // Only close if clicking the backdrop, not the card itself
    if (e.target === document.getElementById('designerModal')) {
        closeDesignerBtn();
    }
}

// Close on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDesignerBtn();
});
(function initSlideshow() {
    const slides    = document.querySelectorAll('.slide');
    const dots      = document.querySelectorAll('.dot');
    const INTERVAL  = 3500;   // ms between auto-advances
    let current     = 0;
    let timer       = null;
    let progressRaf = null;
    let startTime   = null;

    if (slides.length === 0) return;

    // ---- Build a thin progress bar under the slideshow ----
    const container = document.querySelector('.slideshow-container');
    const bar = document.createElement('div');
    bar.style.cssText = `
        position: absolute;
        bottom: 0; left: 0;
        height: 4px;
        width: 0%;
        background: linear-gradient(90deg, #667eea, #f093fb);
        z-index: 20;
        border-radius: 0 2px 2px 0;
        transition: none;
    `;
    if (container) container.appendChild(bar);

    // ---- Animate the progress bar filling across INTERVAL ms ----
    function animateBar() {
        cancelAnimationFrame(progressRaf);
        bar.style.width = '0%';
        startTime = performance.now();

        function step(now) {
            const elapsed  = now - startTime;
            const pct      = Math.min((elapsed / INTERVAL) * 100, 100);
            bar.style.width = pct + '%';
            if (pct < 100) {
                progressRaf = requestAnimationFrame(step);
            }
        }
        progressRaf = requestAnimationFrame(step);
    }

    // ---- Core slide switcher ----
    window.goToSlide = function (n) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active-dot');
        current = ((n % slides.length) + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active-dot');
        scheduleNext();
    };

    window.changeSlide = function (dir) {
        window.goToSlide(current + dir);
    };

    // ---- Autonomous timer (always running) ----
    function scheduleNext() {
        clearTimeout(timer);
        animateBar();
        timer = setTimeout(function () {
            window.goToSlide(current + 1);
        }, INTERVAL);
    }

    // Start immediately
    scheduleNext();
})();
