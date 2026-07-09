
const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");

bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault(); 
    console.log("form submitted");

    // Form data collect
    const formData = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    email: document.getElementById("email").value.trim(),
    service: document.getElementById("service").value,
    size: document.getElementById("size").value,
    fabric: document.getElementById("fabric").value,
    bookingDate: document.getElementById("bookingDate").value,
    deliveryDate: document.getElementById("deliveryDate").value,
    notes: document.getElementById("notes").value.trim()
};
    

    // Basic validation (optional)
   if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.phone ||
    !formData.service ||
    !formData.size ||
    !formData.bookingDate ||
    !formData.deliveryDate
    
) {
    message.style.color = "red";
    message.textContent = "Please fill all required fields!";
    return;
}

    try {
        const res = await fetch("http://localhost:5000/api/booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        if (res.ok) {
            message.style.color = "green";
            message.textContent = data.message; // "Booking successful!"
            bookingForm.reset(); // Form clear
        } else {
            message.style.color = "red";
            message.textContent = data.error || "Something went wrong!";
        }
    } catch (err) {
        console.error(err);
        message.style.color = "red";
        message.textContent = "Server error. Please try again later.";
    }
});





        /*------javascript for toggel menu----*/
  let navLinks = document.getElementById("nav-links");

  function ShowMenu() {
    navLinks.style.right = "0";
  }

  function hideMenu() {
    navLinks.style.right = "-200px";
  }

  const chatIcon = document.getElementById("chat-icon");
const chatMessage = document.getElementById("chat-message");

chatIcon.addEventListener("click", () => {
    if(chatMessage.style.display === "block") {
        chatMessage.style.display = "none";
    } else {
        chatMessage.style.display = "block";
    }
});
