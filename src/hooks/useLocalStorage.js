import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLocalStorage = (key, initial) => {
  const [state, setState] = useState(initial);

  useEffect(() => {
    (async () => {
      const local = await AsyncStorage.getItem(key);

      if (local) setState(local);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem(key, state);
    })();
  }, [state, key]);

  return [state, setState];
};
