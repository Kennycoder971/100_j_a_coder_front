import { useRef, useEffect } from "react";
export default function ProfileModalForm({ func }) {
  const messageRef = useRef();

  useEffect(() => messageRef.current.focus());

  return (
    <form onSubmit={func} method="POST">
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          ref={messageRef}
          name="message"
          id="message"
          rows="3"
          className="blue-input"
        ></textarea>
      </div>

      <button type="submit" className={`btn`}>
        Envoyer
      </button>
    </form>
  );
}
