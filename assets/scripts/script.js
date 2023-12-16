function openResume() {
    window.open('assets/resume.pdf', '_blank');
}

function showContent(section) {
    // Hide all content sections
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show selected content section
    const selectedSection = document.getElementById(section);
    selectedSection.style.display = 'block';

    selectedSection.scrollIntoView({
        behavior: 'smooth',
    });
}

function openProject(projectName, projectUrl) {
    window.open(projectUrl, '_blank');
}

// Default is 'About' section
showContent('about');
