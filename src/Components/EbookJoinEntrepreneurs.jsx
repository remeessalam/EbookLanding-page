import groupImg from "../assets/images/group.png";

const JoinEntrepreneurs = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={groupImg} alt="group" className="h-[1.2rem]" />
      <p className="text-[.7rem] font-light text-white/60">
        Join 250+ like-minded Entrepreneurs
      </p>
    </div>
  );
};

export default JoinEntrepreneurs;
