# Website Redesign Summary

## What Changed?

Your website has been completely redesigned from the ground up to be **much simpler and easier to maintain**.

### Before: Complex Jekyll Setup
- Multiple directories (`_data/`, `_includes/`, `_layouts/`, `_sass/`, etc.)
- Required Ruby, Jekyll, and gem dependencies
- Complex build process
- Hard to update content (scattered across many YAML files)
- Difficult to understand for non-Jekyll users

### After: Simple Static Site
- Just 3 main files: `index.html`, `style.css`, `data.js`
- No build process or dependencies
- Easy to update: just edit `data.js`
- Clean, modern design inspired by Michael Bernstein's site
- MIT colors (cardinal red #A31F34 and gray)

## Key Features

✅ **Super easy updates** - Edit one file (`data.js`) to update publications, students, and teaching  
✅ **No build process** - Just edit and push to GitHub  
✅ **Still uses GitHub Pages** - Your site stays at mgordon.me  
✅ **Mobile responsive** - Works great on all devices  
✅ **MIT branding** - Uses official MIT colors  
✅ **Student section** - Shows current PhD students like MSB's site  
✅ **Clean design** - Professional, academic look

## File Structure

```
mgordon.me/
├── index.html          # Main page (bio, awards, structure)
├── style.css           # All styling (MIT colors)
├── data.js             # Easy-to-update data (publications, students, teaching)
├── images/             # Your photos
│   ├── face_3.png      # Your profile photo
│   └── students/       # Student photos (optional)
├── assets/
│   └── cv.pdf          # Your CV
├── CNAME               # Domain config (mgordon.me)
├── README.md           # Full documentation
├── HOWTO.md            # Quick update guide
└── .gitignore          # Git configuration
```

## How to Update Content

See `HOWTO.md` for quick instructions, or `README.md` for full documentation.

**Most common update** - Adding a publication:
1. Open `data.js`
2. Add your paper to the top of the `publications` array
3. Commit and push
4. Done!

## Design Inspiration

Heavily inspired by [Michael Bernstein's website](https://hci.stanford.edu/msb/):
- Clean, minimal layout
- Prominent bio section
- Student/mentee section with photos
- Publication list with awards highlighted
- Professional but approachable

## Colors

Using MIT's official brand colors:
- **Cardinal Red**: `#A31F34` (links, accents, section borders)
- **Gray**: `#8A8B8C` (secondary text)
- **Dark Gray**: `#2C2C2C` (headings)

## What Was Removed

All the complex Jekyll infrastructure:
- `_config.yml`, `Gemfile`, `Gemfile.lock`
- `_data/`, `_includes/`, `_layouts/`, `_sass/`, `_publications/`
- `_site/` (generated files)
- `index.md` (replaced with `index.html`)
- Complex SCSS files

## Testing

To test locally before pushing:
1. Open `index.html` in a web browser
2. Check that publications, students, and teaching load correctly
3. Verify links work
4. Test on mobile by resizing the browser

## Questions?

- **How do I add a publication?** → See `HOWTO.md`
- **How do I add a student?** → See `HOWTO.md`
- **How do I change colors?** → Edit the `:root` section in `style.css`
- **How do I change the layout?** → Edit `index.html` and `style.css`
- **Need help?** → All files are simple and well-commented!

---

**Last updated:** October 2025

