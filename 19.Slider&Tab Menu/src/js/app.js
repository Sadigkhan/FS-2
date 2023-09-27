window.addEventListener("DOMContentLoaded", function () {
        //     let prevBtn = document.getElementById("prevBtn");
        //     let nextBtn = document.getElementById("nextBtn");
        //     let sliderImg = document.getElementById("sliderImg");
        //     let sliderContainer=document.querySelector(".slider-container");


        //     let images = [
        //         "src/images/Draven_29.jpg", //0
        //         "src/images/draven.jpeg", //1
        //         "src/images/draven2.jpeg", //2
        //     ]

        //     let currentIndex = 0;

        //     function SlideImage() {
        //         if (currentIndex < 0) {
        //             currentIndex = images.length - 1;
        //         } else if (currentIndex >= images.length) {
        //             currentIndex = 0;
        //         }
        //         sliderImg.src = images[currentIndex];
        //     }


        //     prevBtn.addEventListener("click", function () {
        //         currentIndex--;
        //         SlideImage();
        //     })

        //     nextBtn.addEventListener("click", function () {
        //         currentIndex++;
        //         SlideImage();
        //     })

        //     let autoSlide = setInterval(function () {
        //         currentIndex++;
        //         SlideImage();
        //     }, 500);

        //     sliderContainer.addEventListener("mouseover", function () {
        //         clearInterval(autoSlide);
        //     })
        //     sliderContainer.addEventListener("mouseout", function () {
        //         autoSlide = setInterval(function () {
        //             currentIndex++;
        //             SlideImage();
        //         }, 500);
        //     })


        let tabs = document.querySelectorAll(".tabs div");
        let contents = document.querySelectorAll(".content div");

        for (let tab of tabs) {
            tab.addEventListener("click", function () {
                let activeElement = document.querySelector(".active");
                activeElement.classList.remove("active");
                this.classList.add("active");

                let index = this.getAttribute("data-index");
                console.log(index);
                for (let content of contents) {
                    if (content.getAttribute("data-index") == index) {
                        content.classList.add("show");
                    } else {
                        content.classList.remove("show");
                    }
                }

            });
        }

    }

)

