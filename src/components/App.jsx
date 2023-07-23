import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserRoutes } from '../UseRoute';
import { getCurrentUser } from 'redux/auth/authOperations';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Header />
        <UserRoutes />
      </Container>
    </>
  );
}

export default App;
