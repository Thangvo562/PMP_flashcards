# 1. Build the Project

First, you need to create a production build of your app. Open your terminal in the project root and run:

```bash
npm install
npm run build
```

This will generate a `dist/` folder containing the static files for deployment.

# 2. Choose a Hosting Platform

You can deploy your static site to any static hosting provider. Popular options include:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

**Vercel** and **Netlify** are the easiest for Vite projects and have free tiers.

# 3. Deploy (Example: Vercel)

## Option A: Deploy with Vercel

1. Go to [Vercel](https://vercel.com/) and sign up/log in.
2. Click **"New Project"** and import your GitHub repository.
3. Vercel will auto-detect your Vite project:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **"Deploy"**.

## Option B: Deploy with Netlify

1. Go to [Netlify](https://www.netlify.com/) and sign up/log in.
2. Click **"Add new site"** → **"Import an existing project"**.
3. Connect your GitHub repo.
4. Set:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Click **"Deploy site"**.

# 4. (Optional) Manual Deployment

If you want to deploy manually (e.g., to your own server or S3):

1. Run:
   ```bash
   npm run build
   ```
2. Upload the contents of the `dist/` folder to your web server or S3 bucket.

# 5. Environment Variables

If your app uses environment variables, set them in your hosting provider's dashboard.

# 6. Test Your Deployment

After deployment, visit the provided URL to ensure your app works as expected.