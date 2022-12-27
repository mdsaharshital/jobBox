import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { getUser, toggleUser } from "./features/auth/authSlice";
import { toast, Toaster } from "react-hot-toast";
function App() {
  const dispatch = useDispatch();
  const { isLoading, isError, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError && !isLoading) {
      toast.error(error);
    }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.email));
      } else {
        dispatch(toggleUser());
      }
    });
  }, [dispatch, isLoading, isError, error]);
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
