import content1 from "../assets/content1.png";
import content2 from "../assets/content2.png";
import content3 from "../assets/content3.png";
import content4 from "../assets/content4.png";
import borderImg from "../assets/border-center.svg.png";
import { Button } from "antd";

const Body = () => {
  return (
    <div className="bg-gradient-to-b from-violet-200 via-violet-100 via-50% to-violet-50 to-90% w-screen">
      <div className="flex flex-row px-20 py-14 justify-between max-[800px]:flex-col max-[620px]:px-6">
        <div className="flex flex-col gap-2 py-5 w-1/2 max-[800px]:w-full">
          <h2 className="font-syne text-[16px] font-bold uppercase leading-5">
            Marketing solutions
          </h2>
          <p className="font-syne text-[66px] font-bold leading-none max-[620px]:text-[42px]">
            Social Media Marketing
          </p>
          <p className="font-kanit text-[20px] font-light leading-5">
            Struggling to find PPC experts who really understand your business
            and can actually drive long term results? Our world-class marketers
            would love to help your business thrive!
          </p>
          <Button
            type="primary"
            shape="round"
            size="large"
            className="flex flex-row items-center gap-3 justify-center font-syne font-bold text-[12px] w-1/2 pt-2 bg-black text-white"
          >
            Get a free audit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M12.1924 5.82837H12.2041C12.2119 5.83618 12.2177 5.84399 12.2216 5.85181C12.2256 5.85962 12.2314 5.86743 12.2392 5.87524L12.1924 5.81665C12.2627 5.88696 12.3174 5.96704 12.3564 6.05688C12.3955 6.14673 12.415 6.24243 12.415 6.34399C12.415 6.35962 12.4131 6.37524 12.4091 6.39087C12.4052 6.40649 12.4033 6.42212 12.4033 6.43774L12.415 6.34399C12.415 6.44556 12.3935 6.54126 12.3506 6.6311C12.3076 6.72095 12.2549 6.80103 12.1924 6.87134L6.94235 12.1331C6.87204 12.1956 6.79196 12.2463 6.70212 12.2854C6.61227 12.3245 6.51657 12.344 6.41501 12.344C6.21188 12.344 6.0361 12.2717 5.88766 12.1272C5.73923 11.9827 5.66501 11.8088 5.66501 11.6057C5.66501 11.5042 5.68454 11.4065 5.7236 11.3127C5.76266 11.219 5.81735 11.1409 5.88766 11.0784L9.88376 7.09399H1.16501C0.954071 7.09399 0.776337 7.02173 0.631805 6.8772C0.487274 6.73267 0.415009 6.55493 0.415009 6.34399C0.415009 6.14087 0.487274 5.96704 0.631805 5.82251C0.776337 5.67798 0.954071 5.60571 1.16501 5.60571H9.88376L5.88766 1.62134C5.81735 1.55103 5.76462 1.47095 5.72946 1.3811C5.69431 1.29126 5.67673 1.19556 5.67673 1.09399C5.67673 1.00806 5.6904 0.926025 5.71774 0.8479C5.74509 0.769775 5.7861 0.699463 5.84079 0.636963L5.88766 0.56665C5.95798 0.496338 6.03806 0.44165 6.1279 0.402588C6.21774 0.363525 6.31345 0.343994 6.41501 0.343994C6.51657 0.343994 6.61227 0.363525 6.70212 0.402588C6.79196 0.44165 6.87204 0.496338 6.94235 0.56665L12.1924 5.81665V5.82837Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
        <div className="flex py-5 w-1/2 max-w-[520px] max-h-[470px] h-[330px] justify-end max-[1024px]:self-center max-[800px]:w-full max-[800px]:h-auto">
          <img src={content1} alt="img1" className="max-[800px]:w-full" />
        </div>
      </div>
      <img src={borderImg} alt="border" />
      <div className="flex flex-col px-40 py-14 justify-center text-center max-[1024px]:px-6 max-[620px]:py-4">
        <p className="font-syne text-[16px] font-bold uppercase leading-5">
          Numerique
        </p>
        <p className="font-syne text-[48px] font-bold leading-tight max-[620px]:text-[28px]">
          How our paid search marketing service can help grow your revenue
        </p>
      </div>
      <div className="flex flex-row-reverse gap-14 px-20 py-14 justify-between max-[1024px]:flex-col-reverse max-[1024px]:w-full max-[620px]:px-6">
        <div className="flex flex-col py-4 w-3/5 justify-center max-[1024px]:w-full">
          <p className="font-syne text-[40px] font-bold leading-none pb-2">
            Combining search engine marketing with conversion rate optimization
            (CRO)
          </p>
          <p className="font-kanit text-[16px] font-light leading-none pb-2">
            The secret to a successful SEM campaign is much more than just
            making your website appear on Google. Other SEM agencies in
            Singapore would just set your ads to appear on Google, and leave it
            there. These campaigns are not performing up to its optimal level.
          </p>
          <p className="font-kanit text-[16px] font-light leading-none">
            The secret to achieving optimal SEM results lies in the ability to
            get as many people as possible to call/contact you after they click
            on your ad and land on your website. For example, your current SEM
            ads are getting 2% conversion rate on your landing page. That means
            out of 100 people that visit your page, 2 people contact you.
          </p>
        </div>
        <div className="w-2/5 flex align-middle max-[1024px]:w-full max-[1024px]:h-auto">
          <img src={content2} alt="content2" className="max-[1024px]:w-full" />
        </div>
      </div>
      <div className="flex flex-row px-20 py-14 justify-between max-[1024px]:flex-col-reverse max-[620px]:py-4 max-[620px]:px-6">
        <div className="flex flex-col py-4 w-3/5 justify-center max-[1024px]:w-full">
          <p className="font-syne text-[40px] font-bold leading-none pb-2 max-[1024px]:pt-8">
            Real certified Google Ads professionals
          </p>
          <p className="font-kanit text-[16px] font-light leading-none">
            Get a team of certified Google Adwords / SEM specialists who have a
            minimum of 2 years experience managing various SEM campaigns
            locally. We help you create the perfect combination of strategy and
            implementation to ensure we achieve your goals.
          </p>
        </div>
        <div className="w-2/5 flex align-middle max-[1024px]:w-full max-[1024px]:h-auto">
          <img src={content3} alt="content3" className="max-[1024px]:w-full" />
        </div>
      </div>
      <img src={borderImg} alt="border" />
      <div className="flex flex-row px-20 py-14 justify-between max-[1024px]:flex-col max-[620px]:py-4 max-[620px]:px-0">
        <div className="flex flex-col py-11 w-3/5 px-10 justify-center max-[1024px]:w-full">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="41"
              viewBox="0 0 62 41"
              fill="none"
            >
              <path
                d="M9.99023 32.0327C9.4655 32.5171 9.05176 33.0822 8.74902 33.728C8.44629 34.3739 8.29492 35.0802 8.29492 35.8472C8.29492 36.2912 8.34538 36.7251 8.44629 37.1489C8.5472 37.5728 8.69857 37.9663 8.90039 38.3296H8.96094C9.28385 38.9351 9.70768 39.4396 10.2324 39.8433C10.7572 40.2469 11.3626 40.5295 12.0488 40.6909H11.9883C12.1901 40.7313 12.3919 40.7716 12.5938 40.812C12.7956 40.8524 12.9974 40.8726 13.1992 40.8726C13.6836 40.8726 14.1478 40.8019 14.5918 40.6606C15.0358 40.5194 15.4395 40.3478 15.8027 40.146C18.3053 38.6525 20.3942 36.8462 22.0693 34.7271C23.7445 32.6079 25.0664 30.4181 26.0352 28.1577C27.0443 25.9377 27.7809 23.6974 28.2451 21.437C28.7093 19.1766 28.9414 17.1382 28.9414 15.3218C28.9414 13.3439 28.5579 11.467 27.791 9.69092C27.0241 7.95524 25.9847 6.43148 24.6729 5.11963C23.361 3.80778 21.8372 2.76839 20.1016 2.00146C18.3255 1.23454 16.4486 0.851074 14.4707 0.851074C12.4525 0.851074 10.5755 1.23454 8.83984 2.00146C7.0638 2.76839 5.52995 3.80778 4.23828 5.11963C2.94661 6.43148 1.91732 7.95524 1.15039 9.69092C0.383464 11.467 0 13.3439 0 15.3218C0 17.1382 0.302734 18.8335 0.908203 20.4077C1.55404 22.0223 2.42188 23.4653 3.51172 24.7368C4.60156 26.0083 5.87305 27.0679 7.32617 27.9155C8.81966 28.7632 10.4342 29.3283 12.1699 29.6108V29.6714C11.8066 30.075 11.4434 30.4686 11.0801 30.8521C10.7168 31.2355 10.3535 31.6291 9.99023 32.0327ZM43.0488 32.0327C42.5241 32.5171 42.1104 33.0822 41.8076 33.728C41.5049 34.3739 41.3535 35.0802 41.3535 35.8472C41.3535 36.2912 41.404 36.7251 41.5049 37.1489C41.6058 37.5728 41.7572 37.9663 41.959 38.3296C42.2819 38.9351 42.7158 39.4396 43.2607 39.8433C43.8057 40.2469 44.4212 40.5295 45.1074 40.6909C45.2689 40.7313 45.4505 40.7716 45.6523 40.812C45.8542 40.8524 46.056 40.8726 46.2578 40.8726C46.7422 40.8726 47.2064 40.8019 47.6504 40.6606C48.0944 40.5194 48.498 40.3478 48.8613 40.146C51.3639 38.6525 53.4528 36.8462 55.1279 34.7271C56.8031 32.6079 58.125 30.4181 59.0938 28.1577C60.1029 25.9377 60.8395 23.6974 61.3037 21.437C61.7679 19.1766 62 17.1382 62 15.3218C62 13.3439 61.6165 11.467 60.8496 9.69092C60.0827 7.95524 59.0534 6.43148 57.7617 5.11963C56.4701 3.80778 54.9362 2.76839 53.1602 2.00146C51.4245 1.23454 49.5475 0.851074 47.5293 0.851074C45.5514 0.851074 43.6745 1.23454 41.8984 2.00146C40.1628 2.76839 38.639 3.80778 37.3271 5.11963C36.0153 6.43148 34.9759 7.95524 34.209 9.69092C33.4421 11.467 33.0586 13.3439 33.0586 15.3218C33.0586 17.1382 33.3613 18.8335 33.9668 20.4077C34.6126 22.0223 35.4805 23.4653 36.5703 24.7368C37.6602 26.0083 38.9316 27.0679 40.3848 27.9155C41.8783 28.7632 43.4928 29.3283 45.2285 29.6108C44.946 29.9741 44.623 30.3576 44.2598 30.7612C43.8965 31.1649 43.4928 31.5887 43.0488 32.0327Z"
                fill="#6754E9"
              />
            </svg>
          </p>
          <p className="font-kanit text-[22px] italic py-4 font-light leading-tight">
            “Numerique PPC service is light years ahead of the competition
            because of their intelligent, specialized and courteous account
            managers.”
          </p>
          <p className="font-syne text-[16px] uppercase font-bold leading-none">
            Director of Marketing
          </p>
          <p className="font-kanit text-[16px] font-light leading-none">
            Zarra Home
          </p>
        </div>
        <div className="relative">
          <img
            src={content4}
            alt="content4"
            className="relative max-[1024px]:w-full"
          />
          <div className="bg-white rounded-tl-3xl absolute bottom-[0px] w-full h-14 pt-[10px] pr-[40px] pb-[10px] pl-[40px] flex justify-between items-center">
            <div>
              <p>⭐⭐⭐⭐⭐</p>
              <p className="font-kanit text-[12px] font-light leading-none">
                5000+ Client reviews
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="34"
              viewBox="0 0 34 51"
              fill="none"
            >
              <path
                d="M12.2145 8.68312L12.4527 9.15052L32.9335 49.3463L33.1716 49.8137L32.2368 50.29L31.9987 49.8226L11.5179 9.62682L11.2797 9.15942L12.2145 8.68312ZM1.72318 0.290039L1.96133 0.757432L22.4421 40.9533L22.6803 41.4207L21.7455 41.8969L21.5073 41.4296L1.02654 1.23373L0.788391 0.766337L1.72318 0.290039Z"
                fill="#E2E2E2"
              />
            </svg>
            <p className="font-syne text-[12px] uppercase font-bold border-b-2 border-violet-500 h-fit">
              View all reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
