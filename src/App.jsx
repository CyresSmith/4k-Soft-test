import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Spinner = lazy(() => import('components/shared/Spinner'));
const SharedLayout = lazy(() => import('pages/SharedLayout'));
const Login = lazy(() => import('pages/Login'));
const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
