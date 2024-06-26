import Header from "../Header";
import "./cardSkeletonUser.css";
import Skeleton from "react-loading-skeleton";

function CardSkeletonUser() {
  return (
    <>
      <Header />
      <div className="loading-skeleton">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="card-skeleton">
              <div className="card-skeleton_user">
                <div className="card-skeleton_user">
                  <Skeleton borderRadius={20} width={120} height={120} />
                </div>
                <div className="card-skeleton_name">
                  <Skeleton borderRadius={8} width={140} height={30} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default CardSkeletonUser;
