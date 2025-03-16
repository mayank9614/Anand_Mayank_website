document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    
    menuButton.addEventListener('click', function() {
        if (menu.style.display === 'none') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
    
    // Profile image hover effect
    const profileImage = document.getElementById('profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        profileImage.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
});
