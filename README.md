# Roberto Ulloa — Portfolio

A portfolio for Roberto Ulloa, a London-based software developer and QA engineer. It presents selected full-stack, web, and mobile projects alongside professional experience and a downloadable CV.

## Live Website

You can view the portfolio at [robertoulloa.com](https://robertoulloa.com/).

## Repository

The source code for this portfolio is available on GitHub: [https://github.com/Robert-Ulloa/Robert-U](https://github.com/Robert-Ulloa/Robert-U)

## Features

- **Selected work**: A featured Nimble Chicago case study plus supporting projects.
- **Services, toolkit and experience**: Development, QA, release and data-analysis strengths.
- **Blog**: Short engineering write-ups at `/blog`, stored in `src/data/posts.js`.
- **Contact form**: Netlify Forms handling (no email address is published on the site). Requires **Form detection** to be enabled in Netlify (Site configuration → Forms), followed by a redeploy.
- **CV**: A web version at `/cv` with a matching PDF download.
- **Dark theme with motion**: Ambient background, scroll reveals and cursor-follow card glow, all disabled for users who prefer reduced motion.

## Editing content

All page copy lives in `src/data/site.js` (projects, services, skills, experience) and `src/data/posts.js` (blog posts).
To add a post, add an object to the `posts` array and a matching `<url>` entry in `public/sitemap.xml`.

## Updating the CV

The CV lives in one place: `src/data/cv.js`. The `/cv` page renders it, and the downloadable
`public/Roberto-Ulloa-CV.pdf` is printed from that same page, so the two always match.

1. Edit `src/data/cv.js`.
2. Run `npm run dev` and open `http://localhost:5173/cv`.
3. Print the page (Cmd+P) → **Save as PDF**, paper size **A4**, **Background graphics** on.
4. Save it over `public/Roberto-Ulloa-CV.pdf`.

The phone number and email are intentionally left off the public CV.

## Technologies Used

- **React** + **React Router**: Component-based UI with client-side routes for the blog.
- **Vite**: Used as the build tool for fast development and optimized production builds.
- **CSS**: Custom responsive styling and accessible interactions.
- **Netlify Forms**: Contact form capture when deployed through Netlify.

## How to Run Locally

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Robert-Ulloa/Robert-U.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Robert-U
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the project locally:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` to view the portfolio.

## Contact

Feel free to reach out for roles, projects, or collaboration:

- **LinkedIn**: [Roberto Ulloa on LinkedIn](https://www.linkedin.com/in/roberto-antonio-ulloa-cruz-30135b317/)
- **GitHub**: [Robert-Ulloa](https://github.com/Robert-Ulloa)

