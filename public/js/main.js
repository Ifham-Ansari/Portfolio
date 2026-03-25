// import packages code
import { raf } from "./feature_module/packkages/lenis.js";
raf();




// export tech_stack_box name
export const tech_stack_box = document.querySelector("[tech_stack_box]");
// import svg code
import add_svg_in_html from "./feature_module/svg.js";
add_svg_in_html();





// export project_box name
export let project_box = document.getElementById("project_box");
// import project section execute code
import {default as projectSectionsExecute} from "./feature_module/script.js";
projectSectionsExecute();






// import Tilt.js Raw Package
import {default as tilt_js} from "./feature_module/packkages/tilt.js";
tilt_js();










// Contact form simulation (No backend)
import {user_passed_contact_info} from "./feature_module/contact.js";

const successModal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModal");
const closeModalIcon = document.getElementById("closeModalIcon");
const modalOverlay = document.getElementById("modalOverlay");
const successUserName = document.getElementById("successUserName");

function showSuccessModal() {
    successModal.classList.remove("hidden");
    successModal.classList.add("flex");
    setTimeout(() => {
        successModal.classList.add("modal-show");
    }, 10);
}

function hideSuccessModal() {
    successModal.classList.remove("modal-show");
    setTimeout(() => {
        successModal.classList.add("hidden");
        successModal.classList.remove("flex");
    }, 300);
}

closeModalBtn.addEventListener("click", hideSuccessModal);
closeModalIcon.addEventListener("click", hideSuccessModal);
modalOverlay.addEventListener("click", hideSuccessModal);

user_passed_contact_info((userPassedDetail) => {
    const FORMSPREE_URL = "https://formspree.io/f/mqegzjep"; 
    
    const sendBtn = document.getElementById("sendMail");
    const originalText = sendBtn.querySelector(".primary-button-text").innerText;
    
    sendBtn.style.pointerEvents = "none";
    sendBtn.querySelector(".primary-button-text").innerText = "Sending...";
    
    // Real Formspree submission
    fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            _subject: "New Portfolio Submission",
            Project: "MY FIRST PROJECT",
            Form: "Portfolio Form",
            Name: `${userPassedDetail.firstName} ${userPassedDetail.lastName}`,
            Email: userPassedDetail.email,
            Message: userPassedDetail.message
        })
    })
    .then(() => finalizeSubmission(sendBtn, originalText, userPassedDetail))
    .catch(err => {
        console.error("Formspree Error:", err);
        sendBtn.style.pointerEvents = "all";
        sendBtn.querySelector(".primary-button-text").innerText = "Error! Try Again";
        setTimeout(() => {
            sendBtn.querySelector(".primary-button-text").innerText = originalText;
        }, 3000);
    });
});

function finalizeSubmission(sendBtn, originalText, userPassedDetail) {
    sendBtn.style.pointerEvents = "all";
    sendBtn.querySelector(".primary-button-text").innerText = originalText;
    
    // Reset form
    let inpField = document.querySelectorAll("#contactform input, #contactform textarea");
    inpField.forEach(e => e.value = "");
    
    // Personalize and Show Success Modal
    if (successUserName) successUserName.innerText = userPassedDetail.firstName;
    showSuccessModal();
}















function openLinkNextBrowser(){
    const instagram = document.querySelectorAll("[instagram_link]");
    const discord = document.querySelectorAll("[discord_link]");
    const gitHub = document.querySelectorAll("[github_link]");
    const replit = document.querySelectorAll("[replit_link]");
    const leetcode = document.querySelectorAll("[leetcode_link]");

    instagram.forEach(e => e.addEventListener("click", ()=>{ window.open("https://www.instagram.com/sync_coder", "_blank") }));
    discord.forEach(e => e.addEventListener("click", ()=>{ window.open("https://discord.gg/TkAMqfSN", "_blank") }));
    gitHub.forEach(e => e.addEventListener("click", ()=>{ window.open("https://github.com/DakshDev", "_blank") }));
    replit.forEach(e => e.addEventListener("click", ()=>{ window.open("https://replit.com/@DakshDeveloper", "_blank") }));
    leetcode.forEach(e => e.addEventListener("click", ()=>{ window.open("https://leetcode.com/u/SyncCoder/", "_blank") }));

};
openLinkNextBrowser();