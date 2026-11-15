import '@/app/showcase-iphone.css';

export default function IPhoneFrame({ children, className = '' }) {
  return (
    <div className={`od-iphone ${className}`}>
      <span className="od-iphone-controls" aria-hidden="true"><i /><i /><i /></span>
      <div className="od-iphone-screen">
        {children}
        <span className="od-iphone-island" aria-hidden="true" />
      </div>
    </div>
  );
}
