///// Navigation

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

///// Job Filtering

const jobs = [
    {
        id: 1,
        title: 'Web Developer',
        company: 'ABC Inc.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: 'Web Developer',
        specialist_level: 'Junior',
        job_type: 'Part Time',
        location: 'Yerevan',
        applyLink: 'apply_link1'
    },
    {
        id: 2,
        title: 'Backend Developer',
        company: 'XYZ Inc.',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'Backend Developer',
        specialist_level: 'Beginner',
        job_type: 'Full Time',
        location: 'Gyumri',
        applyLink: 'apply_link2'
    }
];

document.addEventListener('DOMContentLoaded', function () {
    displayJobs(jobs);

    const categoryButtons = document.querySelectorAll('.fil-p');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const subcategories = this.nextElementSibling;
            toggleSubcategories(subcategories);
        });
    });

    const subcategoryButtons = document.querySelectorAll('.sub-fil-p');
    subcategoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterType = this.dataset.filterType;
            const filterValue = this.textContent;
            filterItems(filterType, filterValue);
        });
    });
});

function toggleSubcategories(subcategories) {
    subcategories.style.display = subcategories.style.display === 'none' ? 'block' : 'none';
}

function filterItems(filterType, filter) {
    let filteredJobs = jobs;
    switch (filterType) {
        case 'specialist_level':
            filteredJobs = filteredJobs.filter(job => job.specialist_level === filter);
            break;
        case 'category':
            if (filter !== 'All Jobs') {
                filteredJobs = filteredJobs.filter(job => job.category === filter);
            }
            break;
        case 'job_type':
            filteredJobs = filteredJobs.filter(job => job.job_type === filter);
            break;
        case 'location':
            filteredJobs = filteredJobs.filter(job => job.location === filter);
            break;
        default:
            break;
    }
    displayJobs(filteredJobs);
}

function displayJobs(jobs) {
    const jobList = document.querySelector('.job-listings ul');
    jobList.innerHTML = '';

    jobs.forEach(job => {
        const jobItem = document.createElement('li');
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <p>Description: ${job.description}</p>
            <p>Category: ${job.category}</p>
            <p>Specialist Level: ${job.specialist_level}</p>
            <p>Job Type: ${job.job_type}</p>
            <p>Location: ${job.location}</p>
            <a href="${job.applyLink}" target="_blank">Apply</a>
        `;
        jobList.appendChild(jobItem);
    });
}



///// Keyword Searching

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchBar").addEventListener("input", function() {
        var keyword = this.value.trim().toLowerCase();

        var jobListings = document.querySelectorAll(".job-listings ul li");

        jobListings.forEach(function(jobListing) {
            var category = jobListing.querySelector("p:nth-of-type(3)").textContent.toLowerCase(); // Adjust the index if the category position in your HTML structure is different
            if (category.includes(keyword)) {
                jobListing.style.display = "block";
            } else {
                jobListing.style.display = "none";
            }
        });
    });
});























