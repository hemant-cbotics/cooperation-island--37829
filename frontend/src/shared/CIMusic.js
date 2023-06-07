import { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { AppContext } from "../App";
import { Howl } from "howler";
import anime from "animejs";
import clsx from "clsx";

const useStyles = makeStyles({
    svg: {
        height: "10vh"
    }
});

const CIMusic = (props) => {
    const cls = useStyles();

    const { BGM, howler, setBGM } = useContext(AppContext);

    useEffect(() => {
        anime({
            targets: `#${props.id} path[fill="#04826A"],#${props.id} path[fill="#1AC1A1"],#${props.id} path[fill="#46E0C2"]`,
            opacity: BGM ? 1 : 0,
            easing: "linear",
            duration: 250
        });
    }, [BGM]);

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
        if (BGM) {
            howler.welcome.fade(howler.welcome.volume(), 0, 1000);
            howler.dashboard?.fade(1, 0, 1000);
        }
        else {
            if (window.location.pathname === "/home")
                howler.welcome.fade(0, 0.2, 1000);
            else
                howler.welcome.fade(0, 1, 1000);
            howler.dashboard?.fade(0, 1, 1000);
        }
        setBGM(!BGM);
    }

    return <svg className={clsx(cls.svg, props.className, "pointer")} id={props.id} onClick={handleClick} viewBox="0 0 100 111">
        <path className="pointer" opacity="0.3" d="M99.9987 58.4267C100.196 86.8849 77.9741 110.11 50.3618 110.305C22.7441 110.498 0.198183 87.5854 0.00134455 59.1254C-0.19904 30.6672 22.0242 7.44029 49.6383 7.247C77.2506 7.05371 99.7965 29.9667 99.9987 58.4267Z" fill="black" />
        <path className="pointer" d="M99.9987 51.1792C100.196 79.6374 77.9741 102.864 50.3618 103.058C22.7441 103.253 0.198183 80.3396 0.00134455 51.8779C-0.19904 23.4214 22.0242 0.192754 49.6383 0.0012362C77.2506 -0.193829 99.7965 22.721 99.9987 51.1792Z" fill="#552800" />
        <path className="pointer" d="M9.66945 26.1045C8.12134 30.8055 22.5881 22.6926 48.6009 23.5491C74.6137 24.4021 83.7143 22.8629 85.1489 19.6922C86.5818 16.5215 72.1363 4.76084 57.8168 2.33671C43.4955 -0.083867 16.6475 4.90802 9.66945 26.1045Z" fill="#A85C09" />
        <path className="pointer" d="M10.9055 25.3721C7.36769 26.3049 5.19538 36.2939 5.25035 44.0504C6.36754 46.205 23.3151 47.0137 23.3151 47.0137C23.3151 47.0137 7.90855 46.8558 6.65127 49.5725C5.39399 52.291 7.66206 61.5034 12.0031 68.4903C13.7215 71.2567 79.7084 77.7577 84.7074 73.0974C95.1646 63.3495 95.6789 40.0676 93.7726 36.6699C91.8698 33.274 73.117 34.0489 73.117 34.0489C73.117 34.0489 89.7631 34.4089 90.7881 32.2047C92.0436 29.5004 88.0306 26.3527 83.959 25.4732C85.2766 25.7569 15.6455 24.1237 10.9055 25.3721Z" fill="#A85C09" />
        <path className="pointer" d="M12.2337 66.9546C10.0933 69.948 20.7403 88.9757 46.9889 90.5078C72.3811 91.9921 76.3781 83.028 75.8585 82.4499C75.3354 81.8717 57.2582 80.8822 57.2582 80.8822C57.2582 80.8822 76.1033 80.368 78.9335 79.2774C81.7672 78.185 87.4099 70.6857 85.0674 69.0985C82.7248 67.515 15.0497 63.0178 12.2337 66.9546Z" fill="#A85C09" />
        <path className="pointer" d="M21.3716 51.5303C21.9267 50.0212 10.831 50.289 9.55601 52.119C8.28099 53.9509 9.73157 60.4217 9.55601 60.6647C9.37868 60.9112 5.22911 52.268 7.67097 50.0549C10.1128 47.8436 25.186 48.2142 25.429 46.9942C25.6737 45.7723 12.6629 45.5294 10.0454 44.1852C14.3848 43.9423 27.2661 44.5558 28.7876 43.3145C30.701 41.7522 37.5993 39.9896 41.7754 39.6686C42.7685 38.3741 44.3769 26.7003 44.3769 26.7003C44.3769 26.7003 45.5845 40.9471 45.0206 41.5111C44.4567 42.0732 31.6675 42.3161 26.3582 49.7162C21.0489 57.1163 22.597 69.4249 34.934 74.2518C24.8314 71.1911 17.027 63.3477 21.3716 51.5303Z" fill="#B76400" />
        <path className="pointer" d="M45.4124 3.40955C26.1046 1.57772 12.2337 17.6919 9.55597 28.862C14.5709 20.4369 26.6295 6.33907 45.4124 3.40955Z" fill="#B76400" />
        <path className="pointer" d="M47.0652 14.9734C44.7368 16.0834 46.8435 42.5804 45.4709 42.6336C23.5847 43.4794 21.8699 58.2051 25.7783 65.6441C33.2776 79.9175 59.5972 76.2095 64.0057 67.7703C66.7188 62.5763 65.5502 53.1351 66.3447 52.2183C67.1817 51.2519 74.2448 58.0366 76.3533 57.1145C80.2138 55.4245 79.1764 34.4834 74.9559 27.4965C70.7319 20.5043 50.1259 13.5157 47.0652 14.9734Z" fill="#3F100B" />
        <path className="pointer" d="M51.44 20.82C49.5496 21.7226 51.972 47.9163 51.0286 48.505C50.0834 49.0991 49.0673 47.0793 40.5624 47.7868C32.2243 48.4837 26.9806 55.937 29.935 62.0762C34.8595 72.3242 57.4551 69.4018 60.5247 62.3156C62.0533 58.7885 60.4094 41.2894 61.8458 40.7538C63.2822 40.2201 72.452 50.5 73.9895 49.4413C75.5252 48.3809 74.8158 36.8047 71.3898 31.1371C67.962 25.4661 53.9191 19.6389 51.44 20.82Z" fill="#04826A" />
        <path className="pointer" d="M52.0624 22.3238C50.5515 23.2548 51.706 48.5972 51.9312 49.3669C52.1564 50.1347 56.579 53.5944 58.0527 58.4391C58.8436 55.0131 59.3844 26.8493 59.3046 25.4962C59.2266 24.1414 53.3871 21.5045 52.0624 22.3238Z" fill="#1AC1A1" />
        <path className="pointer" d="M61.1489 24.7621C60.1363 25.1575 60.5832 36.5795 61.1489 36.8064C61.7146 37.0334 68.0258 39.1738 71.7799 43.4794C72.9095 43.2542 71.1415 31.5929 69.9693 29.9082C68.799 28.2254 62.1667 24.3613 61.1489 24.7621Z" fill="#1AC1A1" />
        <path className="pointer" d="M47.3135 48.8012C43.6693 47.0527 35.3649 47.0225 31.859 51.8672C28.3549 56.7102 31.0734 62.9292 39.2661 65.0784C45.9746 66.8393 53.4616 64.2095 55.3821 61.3261C57.3061 58.4391 52.7416 51.4026 47.3135 48.8012Z" fill="#1AC1A1" />
        <path className="pointer" d="M30.8659 58.6555C29.0855 53.2806 32.8627 48.3135 39.9258 47.9092C46.9907 47.5013 49.5106 50.1241 51.0694 51.3884C45.0968 47.7124 37.3563 48.0174 33.3575 52.2077C29.3604 56.3963 34.2636 62.5976 35.3684 63.3495C32.07 60.842 31.3501 60.1167 30.8659 58.6555Z" fill="#46E0C2" />
        <path className="pointer" d="M51.7769 22.4426C50.6827 23.5331 52.1936 45.9266 52.5554 46.9587C52.9171 47.9907 52.91 25.2621 53.7222 24.2425C54.5362 23.2246 58.5669 24.5067 58.5669 24.5067C58.5669 24.5067 52.8249 21.3963 51.7769 22.4426Z" fill="#46E0C2" />
        <path className="pointer" d="M69.2441 29.1422C68.1411 28.2644 62.4257 24.0527 60.9964 24.9146C59.8615 25.5991 60.7481 34.6714 60.7481 34.6714C60.7481 34.6714 60.952 27.6136 62.2537 27.2057C63.5517 26.7996 69.2441 29.1422 69.2441 29.1422Z" fill="#46E0C2" />
        <path className="pointer" d="M57.7601 61.5744C54.6231 67.5593 40.2273 67.6905 35.9093 60.3118C30.9404 51.8388 46.5137 45.5365 48.1877 54.0945C49.523 60.9235 39.4878 60.4182 39.9826 58.3877C40.4756 56.3573 40.848 59.3825 43.9442 57.423C47.0475 55.4635 44.7102 48.7852 39.3495 51.885C35.6291 54.036 36.7764 60.3437 41.9563 62.3635C47.1361 64.3815 57.2139 62.266 55.5488 55.7472" fill="#04826A" />
        <path className="pointer" d="M54.9742 74.7413C59.9217 73.773 64.2859 69.6607 65.3711 66.6443C66.4564 63.6279 65.8943 53.3338 66.7721 52.9295C67.6499 52.5251 74.9027 58.8009 76.3515 58.0792C77.8003 57.3556 81.4197 48.6682 77.6797 33.1038C81.2991 41.7912 82.0137 58.2068 77.9209 60.615C75.8692 61.8209 70.0172 57.3024 69.143 57.9923C68.2687 58.6839 69.354 65.559 67.5452 68.2137C65.7347 70.8666 59.2 74.2713 54.9742 74.7413Z" fill="#B76400" />
    </svg>

}

export default CIMusic;