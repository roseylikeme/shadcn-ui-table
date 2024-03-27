# shadcn-ui-table
During my time working at Alameda County, I had the opportunity to observe the UI for the poll worker system used by recruiters. This project, shadcn-ui-table, is a TanStack React Table utilizing Shadcn/UI and the Next.js framework.

## Description + Goal
The Poll Worker System stores data of individuals interested in serving as poll workers for elections. The goal of this project was to enhance the UI/UX and implement new features for the Poll Worker System, providing a better experience for future recruiters. My objectives for this project were:

- Create a responsive table design
- Add better pagination
- Add a show/hide columns feature
- Add filtering option
- Add sorting

## Challenges
One challenge I encountered was with the export to Excel functionality. During deployment to Vercel, the application failed to deploy, pointing to this code block:

```js
label: "Date of Birth",
value: (row) => new Date(row.date_of_birth).toLocaleDateString()
```

The error message indicated sometihing like:
```
'string | null' is not assignable to type 'string'
```

To resolve this issue i referred to ChatGPT and Copilot without truly understanding what the message is trying to say and did this for about 25 minutes. 

After taking a break from the problem, I looked into the columns component to see how date_of_birth was being handled then solved this problem by adding `as string`

## Learnings + Growth
With this project I got to utilize new tools such as ShadcnUI, TypeScript, Next.JS, and TanStack Table.

## Screenshots

![image](https://github.com/roseylikeme/shadcn-ui-table/assets/52300630/62ba7f34-6a08-41ae-ba75-88614182659c)
