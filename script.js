document.addEventListener("DOMContentLoaded", function() {
    // Hitung pengalaman kerja
    const startDate = new Date(2019, 5); // Juni 2019 (bulan dimulai dari 0, jadi 5 = Juni)
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    let experienceText = `A production engineer with over ${years} years`;
    if (months > 0) {
        experienceText += ` and ${months} months`;
    }
    experienceText += ` of experience in the electronics and automotive supplier industries. Proficient in creating work standards, part investigation reports, and standard time calculations. Experienced in managing new projects and developing office automation using Visual Basic Excel macros and Pullover's Macro Creator (PMC). Successfully led two process automation projects involving Janome 4-Axis Robots (Dispensing type) and 3-Axis Robots (Screw Tightening type) as a programmer.`;

    const summaryParagraph = document.getElementById('experience-text');
    if (summaryParagraph) {
        summaryParagraph.textContent = experienceText;
    }

    // Update last updated
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        const date = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        lastUpdated.textContent = date.toLocaleDateString('en-GB', options); // Format: 11 February 2025
    }

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Tutup navbar saat mengklik di luar area
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });

        // Tutup navbar saat mengklik menu
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Smooth scroll dengan offset untuk navbar
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80; // Sesuaikan dengan tinggi navbar
                const targetPosition = targetElement.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});