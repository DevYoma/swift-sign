import { Link } from "react-router-dom"
import "./LinkUI.scss";

type LinkUIProp = {
    to?: string
    children: React.ReactNode
}

const LinkUI = ({ to, children }: LinkUIProp) => {
  return (
    <Link to={to || "#"} className="linkUI">{children}</Link>
  )
}

export default LinkUI