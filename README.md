# iSystem.ai Platform

## Overview

iSystem.ai is an AI-powered integration platform designed for newcomers in the Netherlands, offering comprehensive integration resources and educational content.

## Project Structure

This monorepo contains two main applications:

1. **Main Website** (`/isystem-main-website`): 
   - Corporate and marketing website
   - Built with Next.js and TypeScript
   - Multi-language support (English, Dutch, Arabic, Ukrainian)
   - Deployed at the root domain (isystem.ai)

2. **Academy** (`/isystem-academy`):
   - Educational platform with course information and enrollment
   - Built with Next.js and TypeScript
   - Deployed as a subdirectory (/academy)
   - Shares design system with the main website

## Technology Stack

- **Frontend**: React/Next.js with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Internationalization**: i18next
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Vercel
- **Form Processing**: ActivePieces

## Getting Started

### Main Website

```bash
cd isystem-main-website
npm install
npm run dev
```
The main website will be available at: http://localhost:3000

### Academy

```bash
cd isystem-academy
npm install
npm run dev
```
The academy will be available at: http://localhost:3001

## Deployment

See [deployment.md](./deployment.md) for detailed information on how to deploy both applications using GitHub Actions and Vercel.

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

For more information, contact iSystem.ai at info@isystem.ai.