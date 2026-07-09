    document.addEventListener("DOMContentLoaded", () => {
        // --- 1. Loading Screen ---
        const tlLoader = gsap.timeline({
            onComplete: () => {
                gsap.to("#loading-screen", {
                    opacity: 0, duration: 0.8, onComplete: () => {
                        document.getElementById("loading-screen").style.display = 'none';
                        document.body.classList.remove('overflow-hidden');
                        playHeroAnimations();
                    }
                });
            }
        });
        
        document.body.classList.add('overflow-hidden'); // Lock scroll during load

        tlLoader.to(".loader-letter", {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out"
        })
        .to("#loader-progress", {
            width: "100%",
            duration: 1,
            ease: "power2.inOut"
        }, "-=0.5");

        // --- 2. Navbar Blur ---
        const navbar = document.getElementById("navbar");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("backdrop-blur-[20px]", "bg-seona-primary/80", "border-b", "border-seona-gold/10");
                navbar.classList.remove("bg-transparent");
            } else {
                navbar.classList.remove("backdrop-blur-[20px]", "bg-seona-primary/80", "border-b", "border-seona-gold/10");
                navbar.classList.add("bg-transparent");
            }
        });

        // Mobile Menu
        const menuBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
        document.querySelectorAll(".mobile-link").forEach(link => {
            link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
        });

        // --- 3. Hero Animations ---
        function playHeroAnimations() {
            const tlHero = gsap.timeline();
            tlHero.from(".hero-elem", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out"
            })
            .from(".hero-img-wrap", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.6");
        }

        // --- 4. Hero Parallax ---
        const heroSection = document.getElementById("home");
        const heroImg = document.querySelector(".hero-img-inner");
        if(heroSection && heroImg) {
            heroSection.addEventListener("mousemove", (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;
                gsap.to(heroImg, {
                    x: -x,
                    y: -y,
                    duration: 1,
                    ease: "power1.out"
                });
            });
        }

        // --- 5. Stats Counters ---
        const counters = document.querySelectorAll(".stat-counter");
        counters.forEach(counter => {
            ScrollTrigger.create({
                trigger: counter,
                start: "top 85%",
                once: true,
                onEnter: () => {
                    const target = parseFloat(counter.getAttribute("data-target"));
                    const isFloat = target % 1 !== 0;
                    gsap.to(counter, {
                        innerHTML: target,
                        duration: 2,
                        snap: { innerHTML: isFloat ? 0.1 : 1 },
                        ease: "power2.out",
                        onUpdate: function() {
                            if(isFloat) {
                                counter.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
                            } else {
                                counter.innerHTML = Math.round(this.targets()[0].innerHTML).toLocaleString();
                            }
                        }
                    });
                }
            });
        });

        // --- 6. Scroll Reveals ---
        gsap.utils.toArray(".gs-reveal").forEach(elem => {
            gsap.from(elem, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%"
                }
            });
        });

        // Benefits cards stagger
        gsap.from(".benefit-card", {
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            scrollTrigger: {
                trigger: "#benefits-grid",
                start: "top 80%"
            }
        });

        // --- 7. 3D Card Tilt ---
        const tiltCards = document.querySelectorAll(".tilt-card");
        tiltCards.forEach(card => {
            card.addEventListener("mousemove", e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const cx = rect.width / 2;
                const cy = rect.height / 2;
                const dx = (x - cx) / cx;
                const dy = (y - cy) / cy;
                card.style.transform = `perspective(1000px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            card.addEventListener("mouseleave", () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });

        // --- 8. FAQ Accordion ---
        const faqBtns = document.querySelectorAll(".faq-btn");
        faqBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector(".faq-icon");
                const isOpen = content.style.maxHeight;
                
                // Close all
                document.querySelectorAll(".faq-content").forEach(c => c.style.maxHeight = null);
                document.querySelectorAll(".faq-icon").forEach(i => i.style.transform = "rotate(0deg)");

                if (!isOpen) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = "rotate(45deg)";
                }
            });
        });

        // --- 9. Button Ripple ---
        document.querySelectorAll(".ripple-btn").forEach(btn => {
            btn.addEventListener("click", function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const ripple = document.createElement("span");
                ripple.classList.add("ripple");
                ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
                ripple.style.left = `${x - rect.width/2}px`;
                ripple.style.top = `${y - rect.height/2}px`;
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // --- 10. Pricing & WhatsApp Logic ---
        const qtySpan = document.getElementById("qty");
        const priceDisplay = document.getElementById("total-price");
        let currentQty = 1;

        function calcPrice(qty) {
            if (qty === 1) return 1500;
            if (qty === 2) return 2800;
            return 2800 + (qty - 2) * 1200;
        }

        function updatePrice() {
            qtySpan.innerText = currentQty;
            const total = calcPrice(currentQty);
            priceDisplay.innerText = total.toLocaleString() + " Tk";
            
            // Animation pulse
            priceDisplay.classList.remove("price-pulse");
            void priceDisplay.offsetWidth; // Trigger reflow
            priceDisplay.classList.add("price-pulse");
        }

        document.getElementById("btn-minus").addEventListener("click", () => {
            if (currentQty > 1) {
                currentQty--;
                updatePrice();
            }
        });

        document.getElementById("btn-plus").addEventListener("click", () => {
            if (currentQty < 20) {
                currentQty++;
                updatePrice();
            }
        });

        document.getElementById("order-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const address = document.getElementById("address").value.trim();
            const errorMsg = document.getElementById("form-error");

            if (!name || !phone || !address) {
                errorMsg.classList.remove("hidden");
                return;
            }
            errorMsg.classList.add("hidden");

            const total = calcPrice(currentQty).toLocaleString();
            
            const message = `🛍️ *New Order from Seōna*

*Product:* Dr. Althea 345 Relief Cream
*Quantity:* ${currentQty}
*Total Price:* ${total} Tk

*Name:* ${name}
*Contact:* ${phone}
*Address:* ${address}

Please confirm my order.`;

            const encoded = encodeURIComponent(message);
            window.open(`https://wa.me/8801706392496?text=${encoded}`, "_blank");
        });
        
        // --- 11. Mobile Sticky Button ---
        const stickyBtn = document.getElementById("mobile-sticky-btn");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                stickyBtn.classList.remove("translate-y-full", "opacity-0");
            } else {
                stickyBtn.classList.add("translate-y-full", "opacity-0");
            }
        });
        
    });
