import Header from "../Header";
import "./cardSkeletonUser.css";
import Skeleton from "react-loading-skeleton";

function CardSkeletonUser() {
  return (
    <>
      <Header />
      <div className="loading-skeleton">
        {Array(8)
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

/* <div key={index} className="card-skeleton_user">
<Skeleton circle={true} height={50} width={50} />
<Skeleton height={20} width={`80%`} />
</div> */
