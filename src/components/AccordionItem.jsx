import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const AccordionItem = ({
  title,
  num,
  onClick,
  isOpen,
  curOpen,
  children,
}) => {
  return (
    <div
      className={`item ${curOpen === num ? 'open' : ''}`}
      onClick={() => onClick(num)}
    >
      <p className="number">{`0${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">
        {curOpen === num ? (
          <RemoveOutlinedIcon />
        ) : (
          <AddCircleOutlinedIcon />
        )}
      </p>

      {curOpen === num && (
        <div className="content-box">{children}</div>
      )}
    </div>
  );
};

export default AccordionItem;
