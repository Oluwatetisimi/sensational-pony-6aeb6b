import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__code">404</div>
      <h1 className="not-found__title">Page Not Found</h1>
      <p className="not-found__sub">The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="btn btn--primary" style={{ marginTop: '12px' }}>Back to Home</Link>
    </div>
  )
}
