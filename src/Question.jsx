import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info, activeId, setActiveId }) => {
  const isActiveId = id === activeId;
  const toggleId = (id) => {
    if (id === activeId) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleId(id)}>
          {isActiveId ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActiveId && <p>{info}</p>}
    </div>
  );
};

export default Question;
