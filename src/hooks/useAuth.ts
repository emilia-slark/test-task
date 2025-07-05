import { useAppSelector } from "../app/hooks"

export default function useAuth() {
  const { email, token, id } = useAppSelector(state => state.user)

  return {
    isAuthorized: !!email,
    email,
    token,
    id
  }
}