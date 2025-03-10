import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../src/fireBase/firebase-config";
import { useDispatch } from "react-redux";
import {
  fetchFavorites,
  clearFavorites,
} from "../../src/redux/favorites/operations";

export const useAuth = () => {
  const [authUser, setAuthUser] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        dispatch(fetchFavorites(user.uid));
      } else {
        setAuthUser(null);
        dispatch(clearFavorites());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return authUser;
};
