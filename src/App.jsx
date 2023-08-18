import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useGetCurrentUserQuery } from 'redux/authAPI';
import { setUser } from 'redux/authSlice';

import Spinner from 'components/shared/Spinner';
import { getAuth } from 'redux/selectors';

const SharedLayout = lazy(() => import('pages/SharedLayout'));
const Login = lazy(() => import('pages/Login'));
const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Verify = lazy(() => import('pages/Verify'));
const NotFound = lazy(() => import('pages/NotFound'));

function App() {
  const dispatch = useDispatch();

  const auth = useSelector(getAuth);

  const skipCurrentUserLoading = () => {
    if (auth.user._id || !auth.accessToken) return true;

    return false;
  };

  const { data, isLoading, error, isError, isSuccess } = useGetCurrentUserQuery(
    null,
    { skip: skipCurrentUserLoading() }
  );

  useEffect(() => {
    if (!isLoading && isSuccess) {
      dispatch(setUser(data));
    }
  }, [data, dispatch, error, isError, isLoading, isSuccess]);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/verify/:token" element={<Verify />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
