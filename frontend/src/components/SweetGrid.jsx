import SweetCard from "./SweetCard";

const SweetGrid = ({ sweets, onPurchase }) => {
  return (
    <div className="grid">
      {sweets.map((sweet) => (
        <SweetCard
          key={sweet._id}
          sweet={sweet}
          onPurchase={onPurchase}
        />
      ))}
    </div>
  );
};

export default SweetGrid;
