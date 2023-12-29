
// Cookies Intro Message // 
// Function to set a cookie
function setCookie(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }
  
  // Function to get a cookie value
  function getCookie(cookieName) {
    const name = cookieName + "=";
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
  
  // Function to check if the user has accepted cookies
  function hasAcceptedCookies() {
    const cookieValue = getCookie("acceptedCookies");
    return cookieValue === "true";
  }
  
  // Function to show the cookie consent banner
  function showCookieBanner() {
    const banner = document.getElementById("cookie-consent");
    banner.classList.remove("hidden");
  }
  
  // Function to hide the cookie consent banner
  function hideCookieBanner() {
    const banner = document.getElementById("cookie-consent");
    banner.classList.add("hidden");
  }
    

    // Function to handle the user's cookie choice
    function handleCookieChoice(accepted) {
    if (accepted) {
    setCookie("acceptedCookies", "true", 365); // Set the cookie to expire after 365 days
    } else {
    setCookie("acceptedCookies", "false", 365); // Set the cookie to expire after 365 days
    }
    hideCookieBanner();
    }

    // Add event listeners to the buttons
    document.getElementById("save-cookies").addEventListener("click", function() {
    handleCookieChoice(true);
    });

