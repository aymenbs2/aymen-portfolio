

const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const successMessage = document.getElementById("success-message");

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons()
  }

  // Initialize all functionality
  initNavigation()
  initContactForm()
  initScrollAnimations()
})

// Navigation functionality
function initNavigation() {
  const navbar = document.getElementById("navbar")
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Handle scroll effect on navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = navbar.contains(event.target)
    if (!isClickInsideNav && navMenu.classList.contains("active")) {
      navToggle.classList.remove("active")
      navMenu.classList.remove("active")
    }
  })

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit",async  (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const name = formData.get("name")
    const email = formData.get("_replayto")
    const message = formData.get("message")
    console.log(name,email,"now",message)
    // Basic validation
    if (!name || !email || !message) {
      showNotification("Please fill in all fields.", "error")
      return
    }

    if (!isValidEmail(email)) {
      showNotification("Please enter a valid email address.", "error")
      return
    }

    const data = {
      name: name,
      email: email,
      message: message
    };
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]')

    submitButton.textContent = "Sending Message..."
    submitButton.disabled = true

    try {
      const response = await fetch("https://api2.aydevs.com./send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (result.success) {
        form.reset();
        showNotification("Thank you for your message! I'll get back to you soon.", "success")
        contactForm.reset()
    
      } else {
        alert("Error sending message.");
      }
      submitButton.textContent = "Send Message."
      submitButton.disabled = false
    } catch (err) {
      submitButton.textContent = "Send Message."
      submitButton.disabled = false
      alert("Network error.");
      console.error(err);
    }
  })
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 10000;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `

  // Set background color based on type
  switch (type) {
    case "success":
      notification.style.backgroundColor = "#16a34a"
      break
    case "error":
      notification.style.backgroundColor = "#dc2626"
      break
    default:
      notification.style.backgroundColor = "#3b82f6"
  }

  // Add to DOM
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, 5000)
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".card, .hero-content, .section-title")
  animateElements.forEach((element) => {
    observer.observe(element)
  })
}

// Utility function to handle external links
function handleExternalLinks() {
  const externalLinks = document.querySelectorAll('a[href^="http"]')
  externalLinks.forEach((link) => {
    link.setAttribute("target", "_blank")
    link.setAttribute("rel", "noopener noreferrer")
  })
}

// Initialize external links handling
document.addEventListener("DOMContentLoaded", handleExternalLinks)

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  // ESC key closes mobile menu
  if (e.key === "Escape") {
    const navToggle = document.getElementById("nav-toggle")
    const navMenu = document.getElementById("nav-menu")

    if (navMenu.classList.contains("active")) {
      navToggle.classList.remove("active")
      navMenu.classList.remove("active")
    }
  }
})

// Performance optimization: Lazy load images if any are added later
function initLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    const lazyImages = document.querySelectorAll("img[data-src]")
    lazyImages.forEach((img) => imageObserver.observe(img))
  }
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", initLazyLoading)

// Reinitialize icons after any dynamic content changes
function reinitializeIcons() {
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons()
  }
}

// Call reinitialize icons after a short delay to ensure all content is loaded
setTimeout(reinitializeIcons, 100)
