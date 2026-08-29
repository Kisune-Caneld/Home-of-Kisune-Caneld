# Agent Guidelines for Home-of-Kisune-Caneld

The HOKC project is the homepage of the character Kisune Caneld. It features a design inspired by the Notion Homepage Layout combined with a blue nostalgia theme. It utilizes WebGL and WebGL2 for the frontend and REST architecture for the backend.

## Important Rules
1. Do not include comments in the code in any form unless I ask you to.
2. Always maintain a consistent coding style. Avoid switching between styles—using style A one day and style B the next.
3. Always run validation using the functions provided in Magefile (e.g. `app-quality-check`,`frontend-quality-check`, `backend-quality-check`) every time there is a change in the code.
4. Never ask me about accessing `.env`; you are only allowed to access `.env.example` at most.
5. If my instructions are too ambiguous, you must ask for clarification.
6. Always read the AGENTS.md file in both the web/ and backend/ directories when you work in those two folders.
7. Follow the three modes I specified: [PLAN], [CODE], [TEST].

## The three mode
1. [PLAN]: This is the default mode; you will plan the implementation based on my requirements but will not write any code unless [CODE] is included in the input.
2. [CODE]: You may only add, edit, or delete source code when [CODE] is present in the input. Even if I say there’s a bug and it needs to be fixed urgently, you must wait for [CODE] or [TEST]. 
3. [TEST]: This mode is intended for writing unit tests or fixing bugs. You are only permitted to work within the scope of "testing" and must not go beyond the limits of editing unrelated content. 

## Deployment Notes
The deployment process will involve two platforms: Vercel for the web and backend, and Supabase for the database. Therefore, during development, you should take steps to ensure a smooth deployment later on.
 