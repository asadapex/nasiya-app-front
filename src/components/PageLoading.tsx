import { Logo } from "../assets/images";

const PageLoading = () => {
  return (
    <div className="containers">
      <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-white">
        <img
          src={Logo}
          alt="Logo img"
          width={80}
          height={80}
          className="page-loading-img"
        />
      </div>
    </div>
  );
};

export default PageLoading;
