document.getElementById('menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('dropdown-menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Simulated authentication check
document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = false; // change this to true if the user is logged in
  const profileLink = document.getElementById('profile-link');
  if (isLoggedIn) {
    profileLink.textContent = 'Profile';
    profileLink.href = 'profile.html';
  } else {
    profileLink.textContent = 'Sign In';
    profileLink.href = 'signin.html';
  }
});
