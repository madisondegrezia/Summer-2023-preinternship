import { useEffect  } from "react";

function Modal({ isVisible, hideModal, children }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if(event.key === "Escape") {
        hideModal();
      }
    }
    console.log("adding event listener")
    window.addEventListener("keydown", handleEscape)
    return () => {
      console.log("removing event lisener")
      window.removeEventListener("keydown", handleEscape)
    }
  })


  if(!isVisible) { return null }
  return (
    <div onClick={hideModal} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-items-center items-center">
      <div onClick={(e) => e.stopPropagation() } className="max-w-xl w-144 mx-auto flex flex-col">
        <button
          onClick={hideModal}
          className="text-white bg-transparent text-xl place-self-end">
          X
        </button>
        <div className="bg-white text-gray-800 p-8">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal;