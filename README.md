This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) for Köket.se


## The assignment
Build a component or simple site with React and Next.js and to use the JSON data provided for the assignment.

Focus is to create a component that can show the recipe cards and with responsiveness.
Every card should include an image, title/name of the dish, name of the profile if there is one connected to the recipe, if they're sponsored and if it is a recipe or article.

Responsive layout, desktop: 4 cards in a row, tablet: 2 cards, mobile: 1 card.

## My thoughts
I want to understand how the image proxy works and if there is a specific way to think about it when using it. I also treated the task of accessing the data in the RecipeList as if it would have been an api that I needed to make a fetch request to (although I know it was not needed to and had a function to actually access the data).


## What I've learnt
I've learnt how to set up and use Next.js as this was the first time using it. I've tried to follow their standard in setting up the project, although it seemed like I could have done it in an easier way for this specific task, but I wanted to follow how it should be if it would have been a bigger project. 


## If I had more time
I would have fixed the styling and responsiveness better. I saw late that the sponsor tag wasn't working so did a quick fix. No comment on the styling there :')



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
