import { useNavigate } from "react-router-dom";
import { useEffect } from "react"

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/github/MiguelMachado-dev')
  }, [navigate])


  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Redirecting to github</h1>
    </div>
  );
}
