# React Router Guide

React Router is the standard routing library for React applications. It enables client-side routing, allowing your app to update the URL from a link click without making another request for another document from the server.

---

## 1. Installation

To install the latest version of React Router for web applications, run the following command in your project directory:

```bash
npm install react-router-dom
```

---

## 2. Basic Setup

To enable routing in your application, define your routes using `createBrowserRouter` and provide them to your app using `RouterProvider`.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />, // Renders when a route isn't found or throws an error
  },
  {
    path: '/about',
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

---

## 3. Navigation

Instead of standard HTML `<a>` tags (which trigger a full page reload), use React Router's `<Link>` or `<NavLink>` components.

### `<Link>`
Used for standard client-side navigation.

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

### `<NavLink>`
A special version of `<Link>` that knows whether or not it is "active". Useful for styling navigation menus.

```jsx
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink 
        to="/about"
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        About
      </NavLink>
    </nav>
  );
}
```

---

## 4. Nested Routes & Layouts

Nested routes allow you to share UI layouts (like navbars, sidebars, or footers) across multiple pages. Use the `<Outlet />` component in the parent layout to specify where child routes should render.

### Layout Component
```jsx
import { Outlet, Link } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      
      <main>
        {/* Child route components will render here */}
        <Outlet />
      </main>
    </div>
  );
}
```

### Router Configuration
```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> }, // Default child route for '/'
      { path: 'dashboard', element: <Dashboard /> },
    ],
  },
]);
```

---

## 5. Dynamic Routes

You can capture dynamic values from the URL using colon (`:`) syntax in your route path and retrieve them with the `useParams` hook.

### Route Definition
```jsx
{
  path: '/users/:userId',
  element: <UserProfile />,
}
```

### Accessing Parameters
```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();

  return <h1>Viewing profile for User ID: {userId}</h1>;
}
```

---

## 6. Essential Hooks

### `useNavigate`
Allows you to navigate programmatically (e.g., after submitting a form or logging in).

```jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic...
    navigate('/dashboard'); // Redirect user
  };

  return <button onClick={handleSubmit}>Log In</button>;
}
```

### `useSearchParams`
Used to read and modify the query string parameters in the URL (e.g., `?sort=asc&filter=active`).

```jsx
import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get('sort') || 'asc';

  return (
    <div>
      <p>Current Sort: {sortOrder}</p>
      <button onClick={() => setSearchParams({ sort: 'desc' })}>
        Sort Descending
      </button>
    </div>
  );
}
```

### `useLocation`
Returns the current `location` object, containing information about the current URL (`pathname`, `search`, `hash`, `state`).

```jsx
import { useLocation } from 'react-router-dom';

function CurrentPathDisplay() {
  const location = useLocation();
  return <p>You are currently at: {location.pathname}</p>;
}
```

---

## 7. Data Loading (Loaders)

React Router v6.4+ introduced Data APIs, allowing you to fetch data *before* a route renders using a `loader` function.

```jsx
import { useLoaderData } from 'react-router-dom';

// 1. Define the loader function
export async function userLoader({ params }) {
  const response = await fetch(`/api/users/${params.userId}`);
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
}

// 2. Attach it to the route
const router = createBrowserRouter([
  {
    path: '/users/:userId',
    element: <UserProfile />,
    loader: userLoader,
  },
]);

// 3. Access the data in your component
function UserProfile() {
  const user = useLoaderData();
  return <h1>{user.name}</h1>;
}
```