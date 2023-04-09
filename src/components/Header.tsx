import '../App.css'

interface HeaderProps {
  htdm: (pdm: (prevMode: boolean) => boolean) => void;
}

const Header = ({ htdm }: HeaderProps) => {
  return (
    <div className="d-flex justify-content-between">
      <h1>Notes</h1>
      <button
        onClick={() => htdm((prevMode: boolean) => !prevMode)}
        className="btn btn-light fw-bolder"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
