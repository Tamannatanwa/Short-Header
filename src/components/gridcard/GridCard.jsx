import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import "./GridCard.css"
const cardItem = [
  {
    cardIcon:<SupervisorAccountIcon className='newIcons'/>,
    title: "Clients",
    price: 37,
  },
  {
    cardIcon:<EmojiEventsIcon className='newIcons'/>,
    title: "Aworde Winner",
    price: 13,
  },
  {
    cardIcon:<AccessTimeIcon className='newIcons'/>,
    title: "Hours Worked",
    price: 900,
  },
  {
    cardIcon:<AutoFixHighIcon className='newIcons'/>,
    title: "Project Completed",
    price: 40,
  },
];
const GridCard = () => {
  return (
    <>
    <div className="gridParent">
        {
            cardItem.map((item,i)=>{
                return(
                    <div key={item.title} className={i%2==0?'gridChild':"gridChild2"}>
                    <p>{item.cardIcon}</p>
                    <p className='paragraphTitle'>{item.title}</p>
                    <h2>{item.price}</h2>
                    </div>
                )
            })
        }
    </div>
    </>
  );
};
export default GridCard ;
