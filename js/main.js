// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fetch and display GitHub repository stats
document.addEventListener('DOMContentLoaded', () => {
    const repoOwner = 'tparst'; // Replace with the actual repository owner
    const repoName = 'Data-Analysis-Portfolio'; // Replace with the actual repository name
    const repoStatsContainer = document.getElementById('repo-stats');

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`)
        .then(response => response.json())
        .then(data => {
            const stars = data.stargazers_count;
            const forks = data.forks_count;
            repoStatsContainer.innerHTML = `
                <span>⭐ ${stars} Stars</span>
                <span></span>
                <span>${forks} Forks</span>
            `;
        })
        .catch(error => {
            console.error('Error fetching repo stats:', error);
            repoStatsContainer.innerHTML = '<span>Could not load repo stats</span>';
        });
});
