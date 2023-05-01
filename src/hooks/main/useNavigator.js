import { useNavigate } from "react-router-dom"

export const useNavigator = () => {
  const navigate = useNavigate()
  const navigatehandle = (link) => {
    navigate(`${link}`)
  }
  return {navigatehandle}
}