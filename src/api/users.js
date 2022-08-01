import service from './service';

const getUsers = () => service.get('/users');

export default {
  getUsers,
};
