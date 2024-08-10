import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/store/rootReducer'
import type {AppDispatch} from "@/store/store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
