 document.addEventListener('DOMContentLoaded', function() {
            const track = document.querySelector('.client-photo-carousel-track');
            const slides = document.querySelectorAll('.client-photo-carousel-slide');
            const dots = document.querySelectorAll('.client-photo-carousel-dot');
            const nextBtn = document.querySelector('.client-photo-carousel-next');
            const prevBtn = document.querySelector('.client-photo-carousel-prev');
            const slideCount = slides.length;
            let currentIndex = 0;
            let slidesPerView = 4;
            
            // Update slides per view based on screen size
            function updateSlidesPerView() {
                if (window.innerWidth <= 992) slidesPerView = 3;
                if (window.innerWidth <= 768) slidesPerView = 2;
                if (window.innerWidth <= 576) slidesPerView = 1;
            }
            
            // Function to update carousel position
            function updateCarousel() {
                updateSlidesPerView();
                const slideWidth = 100 / slidesPerView;
                track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
                
                // Update active dot
                const dotIndex = Math.floor(currentIndex / slidesPerView);
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === dotIndex);
                });
            }
            
            // Next button event
            nextBtn.addEventListener('click', function() {
                updateSlidesPerView();
                if (currentIndex < slideCount - slidesPerView) {
                    currentIndex += slidesPerView;
                } else {
                    currentIndex = 0;
                }
                updateCarousel();
            });
            
            // Previous button event
            prevBtn.addEventListener('click', function() {
                updateSlidesPerView();
                if (currentIndex > 0) {
                    currentIndex -= slidesPerView;
                } else {
                    currentIndex = slideCount - slidesPerView;
                }
                updateCarousel();
            });
            
            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    updateSlidesPerView();
                    currentIndex = index * slidesPerView;
                    updateCarousel();
                });
            });
            
            // Auto slide every 5 seconds
            setInterval(function() {
                updateSlidesPerView();
                if (currentIndex < slideCount - slidesPerView) {
                    currentIndex += slidesPerView;
                } else {
                    currentIndex = 0;
                }
                updateCarousel();
            }, 5000);
            
            // Update on window resize
            window.addEventListener('resize', updateCarousel);
            
            // Initialize
            updateCarousel();
        });