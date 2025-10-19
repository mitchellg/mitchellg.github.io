# Quick Update Guide

## Most Common Updates

### 1. Add a New Publication
Open `data.js` and add to the top of the `publications` array:

```javascript
{
    title: "Your Paper Title Here",
    authors: ["Co-author 1", "Mitchell Gordon", "Co-author 2"],
    venue: "CHI 2025",
    award: "Best Paper", // Optional - remove this line if no award
    year: 2025
},
```

### 2. Add a New Student
Open `data.js` and add to the `students` array:

```javascript
{
    name: "Student Name",
    type: "phd",
    website: "https://studentwebsite.com", // Optional
    image: "images/students/studentname.jpg" // Optional - add photo first
},
```

### 3. Add a Student Photo
1. Save the photo as `images/students/studentname.jpg`
2. Update the student's entry in `data.js` with the image path

### 4. Update Your Bio
Edit `index.html` - find the `<section class="bio">` and update the paragraphs.

### 5. Add a Course You're Teaching
Open `data.js` and add to the `teaching` array:

```javascript
{
    term: "Spring 2026",
    course: "6.UAT: Oral Communication",
    institution: "MIT EECS",
    role: "Instructor" // or "Course Assistant", "TA", etc.
},
```

### 6. Update Your CV
Replace `assets/cv.pdf` with your updated CV.

### 7. Update Contact Info
Edit `index.html` - find the email link in the header section.

## Publishing Changes

After making changes:

```bash
git add .
git commit -m "Update [what you changed]"
git push
```

Your changes will appear at https://mgordon.me within a minute.

## Tips

- The site uses MIT's cardinal red (#A31F34) for links and accents
- All content loads from `data.js` except bio and awards
- No build process needed - just edit and push!
- Test locally by opening `index.html` in a browser before pushing

