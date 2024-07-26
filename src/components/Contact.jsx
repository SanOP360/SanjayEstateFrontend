
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:10000";

function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/user/${listing.userRef}`,
          {
            withCredentials: true,
          }
        );
        setLandlord(res.data);
      } catch (err) {
        console.error("Error fetching landlord data", err);
      }
    };

    if (listing.userRef) {
      fetchLandlord();
    }
  }, [listing.userRef]);

  return (
    <>
      {landlord ? (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>

          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          />

          <Link
            to={`mailto:${landlord.email}?subject=Regarding%20${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      ) : (
        <>Loading landlord details...</>
      )}
    </>
  );
}

export default Contact;
