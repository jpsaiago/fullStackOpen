export default function Notification({ message, contentCode }) {
  return message ? <div className={`${contentCode}`}>{message}</div> : null;
}
