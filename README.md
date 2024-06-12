This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev




# App Description 
 
This is a simple web application built with Next.js that fetches data from a RESTful API and displays it in a user-friendly manner. The application implements server-side rendering (SSR) and includes responsive and interactive user interfaces.

## Features

- Server-Side Rendering (SSR)
- Fetch data from a public API
- Responsive UI
- Pagination
- Search functionality

## Setup Instructions

### Prerequisites

- Node.js (v14 or later) and npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/RinniVatsa/API_next.git
    cd nextjs-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open the application in your browser:

    Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure



## API Integration

- The application fetches a list of users from a public API.
- The data fetching is handled in the `getServerSideProps` function in `pages/index.js`.
- We use Axios to make HTTP requests in `lib/api.js`.

## User Interface

- The application includes a `Header` and `Footer` component for consistent layout across pages.
- The main content includes a search bar to filter users and a paginated list of users.
- The UI is styled using CSS in `styles/Home.module.css`.

## Pagination

- Pagination is implemented to improve performance and usability when displaying a large number of users.
- The number of items per page is controlled by the `ITEMS_PER_PAGE` constant in `pages/index.js`.

## Challenges

- **Data Fetching:** Ensuring the data is fetched efficiently and handled errors gracefully.
- **Pagination Logic:** Implementing pagination and making sure the total pages and current page are calculated and displayed correctly.
- **Responsive Design:** Ensuring the application looks good on different screen sizes.

## Optimization

- **Data Integrity:** Ensured the data fetched from the API is accurately and consistently displayed.
- **Performance:** Optimized the loading of images and other resources.
- **Lazy Loading:** Implemented lazy loading for images and other heavy resources if applicable.

## Running in Production

1. Build the application:

    ```bash
    npm run build
    ```

2. Start the production server:

    ```bash
    npm start
    ```

3. Open the application in your browser:

    Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
