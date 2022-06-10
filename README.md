## concept

This is a SaaS application that generates AI branding snippets and keywords for the customer's brand.

## Tech Stack

## Tech Stack

### Backend Stack

| Type      | Tech                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------- |
| Language  | [Python](https://www.python.org/)                                                                        |
| Framework | [FastAPI](https://fastapi.tiangolo.com/)                                                                 |
| Hosting   | [AWS](https://aws.amazon.com/) (Lambda + API Gateway)                                                    |
| Other     | [OpenAI](https://openai.com/), [AWS CDK](https://aws.amazon.com/cdk/), [Docker](https://www.docker.com/) |

### Frontend Stack

| Type      | Tech                                                          |
| --------- | ------------------------------------------------------------- |
| Language  | [Typescript](https://www.typescriptlang.org/)                 |
| Framework | [NextJS](https://nextjs.org/) / [React](https://reactjs.org/) |
| Styling   | [TailwindCSS](https://tailwindcss.com/)                       |
| Hosting   | [Vercel](https://vercel.com)                                  |

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
