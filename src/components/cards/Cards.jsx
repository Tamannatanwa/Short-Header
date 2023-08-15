import EditNoteIcon from "@mui/icons-material/EditNote";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CollectionsIcon from "@mui/icons-material/Collections";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import "./Cards.css";

const arr = ["CONCEPTING", "UI/UX", "VISUAL DESIGN", "INTERACTION"];
const icons = [
  <EditNoteIcon className="icons"/>,
  <EventNoteIcon className="icons"/>,
  <CollectionsIcon className="icons"/>,
  <ThumbUpOffAltIcon className="icons"/>,
];
const Cards = () => {
  return (
    <>
      <div className="cardstext">
        <h1>I'M SPECIALIZED IN</h1>
        <h3>Lorem ipsum dolor amet, consecte tempor incididunt</h3>
      </div>
      <div className="flex">
        {arr.map((ele, i) => {
          return (
            <div key={ele} className="childCard">
              <p>{icons[i]}</p>
              <p className="title">{ele}</p>
              <p className="loremData">
                Lorem ipsum dolor amet, consecte tempor incididunt ut labore et
                dolore tumber tur adipisicing elit.
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
