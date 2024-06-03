import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect, useState } from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type TProps = {
  searchQuery: string;
  delay: number;
};

export const useDebounce = ({ searchQuery, delay }: TProps) => {
  const [debounceValue, setDebounceValue] = useState<string>(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(searchQuery);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, searchQuery]);

  return debounceValue;
};
