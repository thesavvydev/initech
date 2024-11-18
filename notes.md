After reading the scenario and requirements, using NextJs felt best for capturing the api and front end.

Went with REST API over GraphQL because thats where my experience lies, learning more and more about GraphQl by the day.

Following the a REST pattern

- GET /api/employees = `getList`
- GET /api/employees/:id = `get`
- PUT/PATCH /api/employees/:id = `update`

I've used Flowbite and Tailwind on recent projects, and it allowed me to move faster for styling pages and components.

Went with Vitest and Playwright to get a feel for these testing packages. In the past i've typically used jest and cypress. Besides expanding on coverage, with more time I would have tried out some visual regression testing on components.

I opted to use search params and take a more server driven approach to sorting and filtering instead of storing things in a react state, with more time this could be refined and more filters could be added.
