# iSystem.ai Deployment Documentation

## Project Overview

The iSystem.ai platform consists of two separate Next.js applications that together form a cohesive user experience:

1. **Main Website (`isystem-main-website`)**:
   - Corporate website with marketing content, contact forms, and legal pages
   - Multi-language support (English, Dutch, Arabic, Ukrainian)
   - Deployed to root domain (isystem.ai)

2. **Academy (`isystem-academy`)**:
   - Educational platform with course information and enrollment
   - Deployed as a subdirectory at `/academy`
   - Shares the same language support and design system

## Deployment Strategy

Given the project's structure, we'll use the following deployment approach:

1. **GitHub** for version control, CI/CD pipeline, and collaboration
2. **Vercel** for hosting both applications with proper configuration

## Step 1: GitHub Repository Setup

We're using the existing GitHub repository:
- Repository: https://github.com/AfifiNL/isystempublic
- Structure: Monorepo containing both main website and academy applications

## Step 2: Prepare Projects for Deployment

### Main Website Configuration

Create a `vercel.json` configuration file in the main website root:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "rewrites": [
    { 
      "source": "/academy/(.*)", 
      "destination": "https://academy.isystem.ai/$1" 
    }
  ],
  "env": {
    "NEXT_PUBLIC_BASE_URL": "https://isystem.ai",
    "NEXT_PUBLIC_ACADEMY_URL": "https://isystem.ai/academy"
  }
}
```

### Academy Configuration

Create a `vercel.json` configuration file in the academy root:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "basePath": "/academy",
  "env": {
    "NEXT_PUBLIC_BASE_URL": "https://isystem.ai",
    "NEXT_PUBLIC_ACADEMY_URL": "https://isystem.ai/academy"
  }
}
```

## Step 3: Deploy to Vercel

### Option 1: Direct Vercel Deployment

1. Connect Vercel to your GitHub repository
2. Configure the build settings according to the vercel.json files
3. Set up proper environment variables
4. Deploy both projects

### Option 2: GitHub Actions + Vercel

Create `.github/workflows/deploy.yml` files in the repository:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy-main-website:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./isystem-main-website
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run linting
        run: npm run lint
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID_MAIN }}
          working-directory: ./isystem-main-website
```

## Step 4: Custom Domain Configuration

After deployment:

1. Configure the primary domain (isystem.ai) to point to the main website deployment
2. Set up the academy.isystem.ai subdomain for the academy project
3. Configure the rewrite rules in Vercel to handle the /academy path appropriately

## Step 5: Post-Deployment Verification

1. Test all language routes (`/en`, `/nl`, `/ar`, `/uk`)
2. Verify legal pages are accessible without language prefixes
3. Test form submissions through ActivePieces
4. Check the Academy links and accessibility through both subdomains

## Security Considerations

1. Set up environment variables securely in Vercel
2. Store all API keys and webhooks as encrypted environment variables
3. Ensure proper CORS headers for API requests
4. Implement rate limiting for form submissions

## Development Workflow

1. Use feature branches for development
2. Create pull requests for code changes
3. Implement automatic preview deployments via Vercel
4. Merge to main only after code review and testing

## Rollback Strategy

1. Vercel provides automatic versioning of deployments
2. Use the Vercel dashboard to quickly roll back to previous versions if needed
3. Maintain deployment history for at least 30 days

This deployment strategy ensures that both applications will work together seamlessly while being maintained in the same repository, making development and maintenance more manageable.