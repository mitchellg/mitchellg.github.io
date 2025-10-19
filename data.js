// Recent highlights - blog post
const publications = [
    {
        title: "Collective alignment: public input on our Model Spec",
        authors: ["Tyna Eloundou", "Mitchell Gordon", "Eddie Zhang", "Sandhini Agarwal"],
        venue: "OpenAI blog post",
        year: 2025,
        url: "https://openai.com/index/collective-alignment-aug-2025-updates/"
    }
];

// Students data - easy to update!
const students = [
    {
        name: "Hyemin (Helen) Bang",
        type: "phd",
        website: "https://www.hyeminbang.com/",
        image: "images/students/helen.webp"
    },
    {
        name: "Andre Ye",
        type: "phd",
        website: "https://andre-ye.org/",
        image: "images/students/andre.jpg"
    }
];

// Teaching data
const teaching = [
    {
        term: "Fall 2025",
        course: "6.1040: Software Design",
        institution: "MIT EECS",
        role: "Instructor"
    }
];

// Render functions
function renderPublications() {
    const container = document.getElementById('publications-list');
    if (!container) return;
    
    container.innerHTML = publications.map(pub => {
        const authorsList = pub.authors.join(', ');
        
        const award = pub.award ? ` <span class="award">${pub.award}</span>` : '';
        const titleLink = pub.url ? `<a href="${pub.url}">${pub.title}</a>` : pub.title;
        
        return `
            <div class="publication">
                <p class="pub-title">${titleLink}</p>
                <p class="pub-authors">${authorsList}</p>
                <p class="pub-venue"><i>${pub.venue}</i>${award}</p>
            </div>
        `;
    }).join('');
}

function renderStudents() {
    const container = document.getElementById('students-list');
    if (!container) return;
    
    container.innerHTML = students.map(student => {
        const nameLink = student.website ? `<a href="${student.website}">${student.name}</a>` : student.name;
        
        let imageHtml;
        if (student.image) {
            const imageTag = `<img src="${student.image}" alt="${student.name}" class="student-photo">`;
            imageHtml = student.website ? `<a href="${student.website}">${imageTag}</a>` : imageTag;
        } else {
            imageHtml = `<div class="student-photo-placeholder"></div>`;
        }
        
        return `
            <div class="student-item">
                ${imageHtml}
                <p class="student-name">${nameLink}</p>
            </div>
        `;
    }).join('');
}

function renderTeaching() {
    const container = document.getElementById('teaching-list');
    if (!container) return;
    
    container.innerHTML = teaching.map(item => `
        <div class="teaching-item">
            <p><strong>${item.term}</strong> ${item.role}, ${item.course}, ${item.institution}</p>
        </div>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderPublications();
    renderStudents();
    renderTeaching();
});

