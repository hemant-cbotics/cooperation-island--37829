import { makeStyles } from "@material-ui/core";
import { Howl } from "howler";
import anime from "animejs";
import clsx from "clsx";

const useStyles = makeStyles({
    svg: {
        filter: "drop-shadow(0.33vh 0.66vh 0.8vh black)",
        height: "10vh",
        outline: "none"
    }
});

const CIShop = (props) => {
    const cls = useStyles();

    const handleClick = () => {
        new Howl({
            src: require("../assets/sounds/Click.mp3"),
            autoplay: true
        });
        anime({
            targets: "#" + props.id,
            scale: [0.9, 1],
            duration: 1000
        });
        props.onClick && props.onClick();
    }

    return <svg className={clsx(cls.svg, props.className, "pointer")} id={props.id} onClick={handleClick} viewBox="0 0 100 111" data-tooltip-id="tooltip"
        data-tooltip-content="Go Shopping">
        <path className="pointer" opacity="0.3" d="M99.9987 58.4278C100.194 86.8847 77.9737 110.114 50.3609 110.307C22.7445 110.5 0.198186 87.587 0.00134468 59.1265C-0.199044 30.6678 22.0228 7.43868 49.6356 7.24716C77.2502 7.05386 99.7966 29.9673 99.9987 58.4278Z" fill="black" />
        <path className="pointer" d="M99.9987 51.1801C100.194 79.637 77.9737 102.866 50.3609 103.059C22.7445 103.254 0.198186 80.3393 0.00134468 51.8806C-0.199044 23.4201 22.0228 0.192758 49.6356 0.00123622C77.2502 -0.193832 99.7966 22.7214 99.9987 51.1801Z" fill="#552800" />
        <path className="pointer" d="M9.66964 26.1032C8.11973 30.8061 22.5867 22.693 48.5982 23.5478C74.6132 24.4025 83.7123 22.8633 85.1451 19.6925C86.5798 16.5218 72.1323 4.76092 57.8125 2.33498C43.4945 -0.0838729 16.646 4.9081 9.66964 26.1032Z" fill="#A85C09" />
        <path className="pointer" d="M10.9065 25.3725C7.36864 26.3053 5.19629 36.2964 5.25304 44.053C6.37025 46.2076 20.4205 47.0163 20.4205 47.0163C20.4205 47.0163 7.91306 46.8584 6.65576 49.5752C5.39845 52.2937 7.66834 61.5063 12.0077 68.4933C13.7279 71.2597 79.7106 77.7626 84.7115 73.0987C95.1689 63.3488 95.6832 40.0665 93.7786 36.6723C91.874 33.2764 73.1227 34.0513 73.1227 34.0513C73.1227 34.0513 89.7691 34.4113 90.7941 32.2052C92.0496 29.5009 88.0347 26.355 83.9649 25.4754C79.8933 24.5976 21.0288 22.7054 10.9065 25.3725Z" fill="#A85C09" />
        <path className="pointer" d="M12.2337 66.9558C10.0933 69.9492 22.3436 89.4294 46.9861 90.5094C68.511 91.4528 75.4111 83.9941 74.8915 83.416C74.3666 82.8379 48.7931 82.1623 48.7931 82.1623C48.7931 82.1623 76.1009 80.3676 78.9329 79.2752C81.7668 78.1829 87.4096 70.6834 85.0652 69.098C82.7244 67.5162 15.0498 63.019 12.2337 66.9558Z" fill="#A85C09" />
        <path className="pointer" d="M45.412 3.40963C26.1055 1.57598 12.2344 17.6922 9.55664 28.8625C14.5699 20.4373 26.6287 6.3392 45.412 3.40963Z" fill="#B76400" />
        <path className="pointer" d="M78.3426 39.8289C77.3247 38.7525 73.8525 37.747 73.989 36.7894C74.2089 35.2253 72.6182 25.0516 65.6649 18.7792C57.786 11.6681 41.7123 10.4551 33.9486 18.5558C27.318 25.4736 27.1904 35.0657 27.4103 36.6315C27.5486 37.5909 22.8864 38.6159 22.0477 39.8289C20.2158 42.4836 24.0409 68.1865 27.3446 72.0826C30.6466 75.9821 68.6318 77.7715 73.0048 72.2191C77.3761 66.6667 79.3623 40.9018 78.3426 39.8289Z" fill="#3F100B" />
        <path className="pointer" d="M72.4083 42.6982C71.5944 41.8008 68.0069 40.9603 68.1151 40.1587C68.2906 38.85 68.8741 29.6055 62.2896 23.4449C55.9712 17.5343 43.5364 16.8232 36.67 23.7322C30.5431 29.8946 32.4034 38.7188 32.5807 40.0275C32.6906 40.829 28.2963 41.8008 27.4788 42.6999C26.6666 43.599 29.0712 64.748 31.7064 68.0056C34.3434 71.2615 64.6588 72.7564 68.1488 68.1191C71.6369 63.4747 73.2241 43.5972 72.4083 42.6982ZM57.3296 40.2509C56.3861 41.0206 43.6819 41.2298 42.6693 40.2509C41.4723 39.0947 41.6531 30.1641 49.9276 29.9549C58.202 29.7456 58.2765 39.4795 57.3296 40.2509Z" fill="#04826A" />
        <path className="pointer" d="M68.8045 43.2656C66.9478 41.5632 31.9277 42.0846 30.22 43.5795C28.6719 44.929 31.8604 62.8948 33.6993 65.0051C35.5347 67.1154 63.7416 66.837 66.1889 65.0317C68.2601 63.4978 70.2268 44.5708 68.8045 43.2656Z" fill="#1AC1A1" />
        <path className="pointer" d="M33.6969 38.3002C34.369 38.7099 38.6073 38.2932 38.7633 37.7257C38.9159 37.1582 37.7951 31.7743 44.6704 27.7524C51.7318 23.6187 62.4464 28.7685 62.1609 37.6317C62.4695 38.2807 65.7253 38.8872 66.6493 37.7257C67.5714 36.5624 67.0554 18.2082 48.593 19.102C31.3348 19.9354 32.0902 37.3267 33.6969 38.3002Z" fill="#1AC1A1" />
        <path className="pointer" d="M30.6867 44.014C29.3904 45.2713 31.8412 58.1015 32.3023 58.3976C32.7633 58.6955 31.4262 46.5588 33.2191 45.5657C38.5728 42.6024 57.3154 43.8952 57.615 43.0848C57.9147 42.2743 32.7385 42.0243 30.6867 44.014Z" fill="#46E0C2" />
        <path className="pointer" d="M34.7227 29.7917C35.0206 26.4986 39.8937 19.3573 47.7621 19.0825C55.6269 18.8094 60.2465 21.8489 61.2413 23.7056C53.5521 19.18 40.0196 19.861 34.7227 29.7917Z" fill="#46E0C2" />
        <path className="pointer" d="M32.918 30.6004C34.7215 28.373 40.9867 28.5965 41.4194 34.3297C40.4299 34.9256 40.3057 35.4044 40.3057 35.4044C39.5024 32.2389 36.2359 28.7153 32.918 31.3434" fill="#04826A" />
        <path className="pointer" d="M58.9434 32.0137C58.9469 28.9387 62.1318 25.4435 65.0259 26.7433C65.4604 27.4562 65.902 28.2702 65.902 28.2702C64.517 27.1441 60.0606 27.6832 59.4417 32.3418C59.6279 32.5209 60.3709 33.7747 60.3709 33.7747C60.261 31.1767 63.2154 28.7916 66.434 30.1198C67.0156 30.9231 66.9128 32.5209 66.9128 32.5209C65.5686 31.3257 61.4207 31.6254 60.9277 34.1329" fill="#04826A" />
        <path className="pointer" d="M58.9434 66.2394C60.6458 65.8617 60.7912 62.0951 61.2381 62.0951C61.692 62.0951 61.2416 65.8386 62.9298 66.0567C64.0417 66.2004 60.0091 67.6652 60.0091 67.6652" fill="#04826A" />
        <path className="pointer" d="M8.59755 58.4029C7.3899 54.1097 6.82242 50.6605 7.99461 49.366C9.16679 48.075 20.6989 47.1067 20.784 48.0767C21.5749 57.1261 24.1622 70.5202 26.5758 72.6926C28.9893 74.8649 45.7598 77.3991 54.9298 76.6738C42.3816 78.3638 26.331 76.0726 24.8858 74.0191C21.5749 69.3126 19.094 51.361 18.0087 50.8041C16.9234 50.2473 10.2769 50.3963 9.5587 51.5277C8.83695 52.6626 8.59755 58.4029 8.59755 58.4029Z" fill="#B76400" />
        <path className="pointer" d="M6.54492 43.8544C6.54492 43.8544 19.0169 46.9365 20.299 45.399C20.7814 44.2161 20.4196 39.8732 20.902 39.2703C21.3843 38.6673 25.3655 37.8214 26.0908 36.3744C26.8143 34.9273 26.6068 15.5925 43.9644 12.9502C36.1049 12.9644 26.6263 19.5453 24.4008 35.4044C23.6772 35.8903 19.5755 36.9773 18.9708 37.942C18.3678 38.9067 18.1267 42.5279 17.7631 43.1309C17.4049 43.7338 6.54492 43.8544 6.54492 43.8544Z" fill="#B76400" />
        <path className="pointer" d="M74.8379 36.7344C74.8379 36.7344 78.9397 39.0273 79.1808 39.6303C79.422 40.2332 78.9343 58.1547 75.6802 67.7751C80.0267 56.5232 82.1973 41.0791 81.5944 39.3891C80.9914 37.7009 74.8379 36.7344 74.8379 36.7344Z" fill="#B76400" />
    </svg>
}

export default CIShop;