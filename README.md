# Mitchell Gordon's Personal Website

A simple, clean academic website inspired by [Michael Bernstein's site](https://hci.stanford.edu/msb/), using MIT colors.

## How to Update Your Site

This site is designed to be **super easy to update**! No complex build process, no Jekyll, just simple files.

### Adding/Updating Publications

Edit `data.js` and add your publication to the `publications` array:

```javascript
{
    title: "Your Paper Title",
    authors: ["Author 1", "Mitchell Gordon", "Author 3"],
    venue: "Conference Name Year",
    award: "Best Paper", // Optional
    year: 2024
}
```

### Adding/Updating Students

Edit `data.js` and add students to the `students` array:

```javascript
{
    name: "Student Name",
    type: "phd",
    website: "https://studentsite.com", // Optional
    image: "images/student.jpg" // Optional
}
```

### Adding/Updating Teaching

Edit `data.js` and add courses to the `teaching` array:

```javascript
{
    term: "Fall 2025",
    course: "Course Number: Course Name",
    institution: "Institution Name",
    role: "Instructor" // or "Course Assistant", "TA", etc.
}
```

### Updating Bio or Other Content

Edit `index.html` directly - it's just plain HTML, easy to read and modify.

### Adding Student Photos

1. Add the photo to the `images/students/` directory
2. Update the student's entry in `data.js` with the image path

## File Structure

```
├── index.html       # Main page (edit bio, awards, etc.)
├── style.css        # Styling (MIT colors, layout)
├── data.js          # Easy-to-update data (publications, students, teaching)
├── images/          # Photos and images
├── assets/          # PDF CV and other assets
└── README.md        # This file
```

## Deployment

This site is hosted on **GitHub Pages**. Just commit and push your changes:

```bash
git add .
git commit -m "Update publications"
git push
```

Your site will automatically update at `https://mgordon.me`

## Colors

The site uses MIT's official colors:
- **MIT Red**: `#A31F34` (cardinal red)
- **MIT Gray**: `#8A8B8C`
- **Dark Gray**: `#2C2C2C`

## Design Philosophy

This site is intentionally simple:
- No build process required
- No complex dependencies
- Easy to update content
- Clean, professional design
- Mobile responsive

To update content, you only need to edit `data.js` - no need to touch HTML or CSS unless you want to change the design.
