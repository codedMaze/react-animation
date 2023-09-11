import { createPortal } from "react-dom";
import { motion } from "framer-motion";

// initial={{ opacity: 0, top: "-100%" }}
// animate={{ opacity: 1, top: 0 }}
// exit={{ opacity: 0, top: "-100%" }}

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          visible: { opacity: 1, top: 0 },
          hidden: { opacity: 0, top: "-100%" },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        // transition={{ duration: 0.3 }}
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
