// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Preloader animation
    gsap.from("#preloader div div", {
        duration: 0.6,
        y: -20,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });
    
    // Hero section animations
    const heroTimeline = gsap.timeline();
    heroTimeline.from(".hero-title", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    })
    .from(".hero-subtitle", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.5")
    .from(".hero-section button", {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out"
    }, "-=0.4");
    
    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            gsap.to("nav", {
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                backgroundColor: "rgba(0, 0, 0, 0.95)",
                duration: 0.3
            });
        } else {
            gsap.to("nav", {
                paddingTop: "1rem",
                paddingBottom: "1rem",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                duration: 0.3
            });
        }
    });
    
    // Section title animations
    gsap.utils.toArray(".section-title").forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });
    
    // Showcase item animations
    gsap.utils.toArray(".showcase-item").forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "back.out"
        });
    });
    
    // About section animations
    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
    
    gsap.from(".about-image", {
        scrollTrigger: {
            trigger: ".about-image",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
    
    // Testimonial animations
    gsap.utils.toArray(".testimonial-item").forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.15,
            ease: "back.out"
        });
    });
    
    // Contact form animation
    gsap.from("#contact-form", {
        scrollTrigger: {
            trigger: "#contact-form",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
    
    // Footer animation
    gsap.from("footer", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
    
    // Scroll-triggered animations for all sections
    gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out"
        });
    });
});