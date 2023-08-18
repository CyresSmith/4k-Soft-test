import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { setAuth } from 'redux/authSlice';
import { useVerifyQuery } from 'redux/authApi';
import { setAuthHeader } from 'redux/axiosBaseQuery';
import { getAuth } from 'redux/selectors';
import { Section } from 'components/shared/Section/Section.styled';
import Container from 'components/shared/Container/Container';
import Title from 'components/shared/Title/Title';

const Verify = () => {
  const { token } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, error, isError, isSuccess } = useVerifyQuery(token);

  const [Message, setMessage] = useState('Verification page');

  const auth = useSelector(getAuth);

  useEffect(() => {
    if (!token || auth.accessToken) {
      return;
    }

    if (isSuccess) {
      const { user, accessToken, refreshToken } = data;

      dispatch(setAuth({ user, accessToken, refreshToken }));
      setAuthHeader(accessToken);
      navigate('/');
    }

    if (isError) {
      setMessage(error.message);
    }
  }, [
    auth.accessToken,
    data,
    dispatch,
    error,
    isError,
    isSuccess,
    navigate,
    token,
  ]);

  return (
    <Section>
      <Container>
        <Title>{Message}</Title>
      </Container>
    </Section>
  );
};

export default Verify;
