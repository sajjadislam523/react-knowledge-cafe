import profile from "../../assets/images/profile.png";

const Header = () => {
    return (
        <div className="flex items-center justify-between p-4 mx-auto border-b-2 max-w-7xl">
            <h1 className="text-3xl font-bold font-exo2">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
