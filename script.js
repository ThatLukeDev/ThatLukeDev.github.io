window.onload = () => {
    setTimeout(() => {
        document.getElementsByClassName("sections")[0].style.display = "block"
        document.getElementsByClassName("centerLoader")[0].style.display = "none"
        setTimeout(() => {
            const slideObserver = new IntersectionObserver((entries) => {
                entries.forEach((v) => {
                    if (v.isIntersecting) {
                        v.target.classList.add("slidLeft")
                    }
                    else {
                        v.target.classList.remove("slidLeft")
                    }
                })
            })
            const slideRightElements = document.querySelectorAll(".slideLeft")
            slideRightElements.forEach((element) => slideObserver.observe(element))
            const colourObserver = new IntersectionObserver((entries) => {
                entries.forEach((v) => {
                    if (v.isIntersecting) {
                        document.getElementById("root").classList.remove("cBack")
                    }
                    else {
                        document.getElementById("root").classList.add("cBack")
                    }
                })
            })
            const colourSwitchElements = document.querySelectorAll(".switchColour")
            colourSwitchElements.forEach((element) => colourObserver.observe(element))
        
            const titleText = "My Portfolio"
            let i = 0
        
            var timer = setInterval(function() {
                document.getElementById("title").innerHTML = document.getElementById("title").innerHTML.slice(0, -1) + titleText[i] + "_"
                if (i >= titleText.length - 1) {
                    clearInterval(timer)
                    setInterval(() => {
                        document.querySelectorAll(".typeFlash").forEach((v) => {
                            if (v.innerHTML.includes("_")) {
                                v.innerHTML = v.innerHTML.slice(0, v.innerHTML.length-1)
                            }
                            else {
                                v.innerHTML += "_"
                            }
                        })
                    }, 1000)
                }
                i++
            }, 150)
        }, 500)
    }, 1000)
}
