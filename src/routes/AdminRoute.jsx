import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    
const { user, loading } = useAuth();
const [isAdmin]=useAdmin();

if (loading) {
  <progress className="progress w-56"></progress>;
}
if (user && isAdmin) {
  return children;
}
};

export default AdminRoute;