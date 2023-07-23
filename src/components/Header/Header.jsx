import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutUser } from 'redux/auth/authOperations';
import { Title, TitleColor, Button, Paragraf } from './Header.styled';
// import Modal from 'components/Modal/Modal';

function Header() {
  // const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const { isLoggedIn, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <Title>
        Phone<TitleColor>book</TitleColor>
      </Title>
      {isLoggedIn ? (
        <div>
          <Paragraf>{user.name}</Paragraf>
          <Button type="button" onClick={onLogOut}>
            Log Out
          </Button>
        </div>
      ) : (
        <div>
          <NavLink to={'/register'}>
            <Button type="submit">Registration</Button>
          </NavLink>
          <NavLink to={'/login'}>
            <Button type="submit">Sing in</Button>
          </NavLink>
        </div>
      )}

      {/*  
      <Button type="button" onClick={toggleModal}>
        <ButtonText>Log Out</ButtonText>
        <BsFillPersonPlusFill size={20} />
      </Button> */}

      {/* {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )} */}
    </>
  );
}

export default Header;
