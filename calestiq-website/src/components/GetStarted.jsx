import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => ( 
  <a href="https://taskon.xyz/space/773651">
   <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-[10px] outline-none p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-blue-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-blue-gradient">Airdrop</span>
      </p>
    </div>
  </div>
  </a>
);

export default GetStarted;
