// src/components/Header.jsx

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="text-center w-full flex items-center justify-center my-5">
      <h1 className="font-bold w-max text-transparent text-3xl md:text-4xl bg-gradient-to-bl from-pink-500 bg-clip-text via-blue-500 to-purple-600">
        {title}
      </h1>
    </div>
  );
};

export default Header;