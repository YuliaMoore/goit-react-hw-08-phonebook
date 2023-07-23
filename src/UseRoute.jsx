import { Routes, Route } from 'react-router-dom';

import { LoginForm } from 'components/RegisterForm/LoginForm';
import { RegistrationForm } from 'components/RegisterForm/RegisterForm';
import { ContactsPage } from 'components/ContactsPage/ContactsPage';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook/" element={<ContactsPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<ContactsPage />} />
    </Routes>
  );
};
