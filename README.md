# Shipping Container Decision Tool

# Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<img width="1551" alt="Screenshot 2024-02-22 at 3 36 11 PM" src="https://github.com/xeniyandkn/shipping-container-decision-tool/assets/93728505/868cff19-afb5-41c3-b477-a0eb4a097bfe">

# Problem
- In the midst of the pandemic, ports worldwide face overwhelming volumes of shipments
- Shortage of truckers exacerbates delays in handling shipments.
- Categorization of the code and sometimes the arrival time are unreliable. 

# Proposed solution
- Developing an AI tool to identify containers likely to contain medical supplies.
- Use visualization tool to emphasing the importance of these shipments to shipping companies.
- Collaborate with shipping companies to ensure swift pickup and delivery of prioritized medical supply containers, despite shortages of truckers and logistical challenges.
- Status and Priority of each item to categorize the data and highlight those that require actions on

# Goal
- Prioritize the ships containing medical equipment and food
- Highlight the containers with importat cargo
- Knowing the contents of the container and thei importance the user is able to download / export them and alerts interested parties.

# Using

- [Next.js](https://nextjs.org/) React web development framework with server side rendering. Make sure that Node minimum version is 18.17 installed
- [MUI Material UI](https://mui.com/)
- [MUI-X Data Grid](https://mui.com/x/react-data-grid/layout/)
- [TanStack Query](https://tanstack.com/query/latest) fetching, caching, synchronizing and updating server state
- [Styled Components](https://styled-components.com/)

# Evolving tools
- [i18n](https://www.i18next.com/) for internationalization
- Data Grid table row editiing


# Evolving architecture using

- State management tool - React-redux, Mobx or React Context API to manage application state in a predictable manner.
- Implementing authentication and authorization mechanisms (e.g., JWT, OAuth) ensures secure access to the application's features and data. This includes login/logout functionality, user registration, and role-based access control.
- The front-end communicates with the backend server via RESTful APIs to fetch data, submit requests, and perform CRUD operations. Axios or Fetch API can be used for making HTTP requests.
- Implement unit tests, integration tests, and end-to-end tests to ensure the reliability and stability of the application. Tools like Jest, React Testing Library, and Cypress can be used for testing.
- Set up CI/CD pipelines to automate the build, test, and deployment processes.
- Integrate monitoring and analytics tools (e.g., Google Analytics, Sentry) to track application performance, detect errors, and gather insights into user behavior.
- As well as component-based architecture, responsiveness, single page application, etc.
