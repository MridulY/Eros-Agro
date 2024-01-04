import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppChat = () => {
  const openWhatsAppChat = () => {
    window.location.href = "https://wa.me/+919914826464?text=Hey I Want To Place An Order";
  };

  return (
    <a
      href="#"
      className="whatsapp-icon"
      onClick={() => openWhatsAppChat()}
      style={{
        position: "fixed",
        bottom: "60px",
        right: "20px",
        zIndex: "9999",
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export default WhatsAppChat;
