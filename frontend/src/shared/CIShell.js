import { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { usePrevious } from "../libs/utils";
import { AppContext } from "../App";
import { Howl } from "howler";
import anime from "animejs";
import clsx from "clsx";
import $ from "jquery";

const useStyles = makeStyles((theme) => ({
    label: {
        fill: theme.palette.primary.main,
        fontFamily: "Summer Show",
        dominantBaseline: "middle",
        textAnchor: "middle",
        translate: "50% 46%"
    },
    size1: {
        fontSize: "300%"
    },
    size2: {
        fontSize: "237%"
    },
    size3: {
        fontSize: "175%"
    },
    size4: {
        fontSize: "131%"
    },
    size5: {
        fontSize: "112%"
    },
    svg: {
        filter: "drop-shadow(0.33vh 0.66vh 0.8vh black)",
        height: "10vh",
        outline: "none",
        zIndex: 2
    }
}));

const CIShell = (props) => {
    const cls = useStyles();

    // const { user: { shells } } = useContext(AppContext);
    const shells = 1892;

    const prevShells = usePrevious(shells);

    const animeObj = { shells };

    useEffect(() => {
        anime({
            targets: animeObj,
            shells: [prevShells, shells],
            round: 1,
            easing: "linear",
            duration: 400,
            update: () => {
                $(`#${props.id} text`).html(animeObj.shells);
            }
        });
    }, [shells]);

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
    }

    return <svg className={clsx(cls.svg, props.className, "pointer")} id={props.id} onClick={handleClick} viewBox="0 0 100 111" data-tooltip-id="tooltip"
        data-tooltip-content={shells + " Shells"}>
        <path className="pointer" opacity="0.3" d="M99.9987 58.4266C100.196 86.8848 77.9741 110.112 50.3618 110.305C22.7459 110.498 0.198183 87.5852 0.00134455 59.1252C-0.19904 30.667 22.0242 7.43836 49.6383 7.24684C77.2506 7.05178 99.7965 29.9666 99.9987 58.4266Z" fill="black" />
        <path className="pointer" d="M99.9987 51.1792C100.196 79.6374 77.9741 102.864 50.3618 103.058C22.7459 103.253 0.198183 80.3396 0.00134455 51.8796C-0.19904 23.4214 22.0242 0.192754 49.6383 0.0012362C77.2506 -0.193829 99.7965 22.721 99.9987 51.1792Z" fill="#552800" />
        <path className="pointer" d="M9.66767 26.1043C8.11779 30.8053 22.5863 22.6924 48.5973 23.5489C74.6119 24.4019 83.7125 22.8644 85.1436 19.6919C86.5782 16.5213 72.131 4.76061 57.8115 2.33649C43.4937 -0.0840905 16.6457 4.90957 9.66767 26.1043Z" fill="#A85C09" />
        <path className="pointer" d="M10.9061 25.3722C7.36836 26.305 5.19605 36.2941 5.25102 44.0506C6.36821 46.2052 17.5224 47.0138 17.5224 47.0138C17.5224 47.0138 7.911 46.856 6.65371 49.5727C5.39643 52.2912 7.6645 61.5036 12.0056 68.4904C13.7239 71.2568 81.5108 77.6159 86.641 73.0975C95.1139 65.6354 95.6796 40.0659 93.775 36.67C91.8705 33.2741 73.1194 34.0491 73.1194 34.0491C73.1194 34.0491 89.7638 34.4091 90.7905 32.2048C92.046 29.5005 88.0312 26.3529 83.9615 25.4751C79.8935 24.5973 21.0282 22.7052 10.9061 25.3722Z" fill="#A85C09" />
        <path className="pointer" d="M14.4546 71.503C13.3693 72.9678 23.0215 89.238 46.9897 90.5077C72.3907 91.8519 76.3806 83.0261 75.8593 82.448C75.3344 81.8699 57.259 80.8803 57.259 80.8803C57.259 80.8803 76.104 80.3661 78.9342 79.2755C81.768 78.1831 87.4107 70.6838 85.0663 69.0966C82.7256 67.5148 16.0417 69.3609 14.4546 71.503Z" fill="#A85C09" />
        <path className="pointer" d="M35 21.5002C36.5 26.0004 24.651 30.09 22.5 33.5019C19.0261 39.0133 19.4149 53.5839 21.3673 63.3496C19.4149 55.5381 20.2466 51.408 18.6595 51.1527C17.0724 50.8973 10.8321 50.2891 9.55882 52.1191C8.2838 53.9528 9.73437 60.4218 9.55882 60.6648C9.38148 60.9113 5.23192 52.2681 7.67378 50.0532C10.1139 47.8419 18.4289 48.2125 18.6719 46.9925C18.9166 45.7706 12.6657 45.5277 10.0483 44.1835C14.3876 43.9406 14.1329 44.0908 14.5 42.5019C14.8653 40.9147 13.5 36.5004 20.5 32.0003C22 28 23.5 13.5003 35 21.5002Z" fill="#B76400" />
        <path className="pointer" d="M45.4112 3.40955C26.1033 1.57772 12.2324 17.6919 9.55469 28.862C14.5696 20.4369 26.6282 6.33907 45.4112 3.40955Z" fill="#B76400" />
        <path className="pointer" d="M85 36C84.8067 44.8347 85 55 73 66.5C72.5 68 74.4999 75 72.5 79.5C77 73.5 74.3056 68 75 67.5C87.5 58.5 86.0392 43.3735 85 36Z" fill="#B76400" />
        <path className="pointer" fillRule="evenodd" clipRule="evenodd" d="M82.5883 45.5214C83.0731 43.6386 83.4835 41.6566 83.8085 39.5706C83.8085 39.5706 83.969 27.5038 76.6131 28.8577L76.6119 28.8579L76.6119 28.8576C76.5075 28.8715 76.4032 28.8923 76.292 28.9201C76.2911 28.9117 76.277 28.7733 76.2432 28.5367C75.9361 26.2266 73.9401 14.4668 65.3279 17.9424L65.3278 17.9425L65.3278 17.9425L65.3267 17.9429L65.3267 17.9423C65.2363 17.9771 65.1459 18.0119 65.0485 18.0536C65.0447 18.0437 64.989 17.8987 64.8812 17.6563C63.7785 15.2136 57.5532 2.79085 49.6389 15.9464C49.6041 16.0021 49.571 16.0578 49.5379 16.1135L49.5377 16.1139L49.5375 16.1143C49.5046 16.1697 49.4716 16.2252 49.437 16.2806C49.4302 16.2727 49.3469 16.1763 49.1932 16.016L49.1932 16.0172L49.1923 16.0162C47.6778 14.4389 39.3936 6.72007 34.7107 20.8597V20.8806C34.6409 21.0968 34.5712 21.3199 34.5015 21.55C34.4912 21.544 34.4091 21.4962 34.2723 21.418L34.2723 21.4188L34.271 21.418C32.8333 20.6503 24.9818 17.2166 22.1902 32.1658C22.1413 32.438 22.0925 32.7102 22.0436 32.9963C22.0436 32.9963 21.9738 33.0312 21.8482 33.101C20.7501 33.6913 15.7087 36.4524 16.0132 44.6452C16.0094 44.6306 16.0076 44.6233 16.0076 44.6233C16.0128 44.7161 16.0184 44.8086 16.0244 44.9007C16.0544 45.5008 16.1129 46.1295 16.2033 46.7879C16.237 47.0568 16.274 47.3225 16.3141 47.5852C16.3474 47.8194 16.4034 48.1731 16.4924 48.6301C16.8821 50.693 17.4635 52.5759 18.1699 54.3732C18.2837 54.6707 18.4042 54.9748 18.5317 55.2847L18.6867 55.692C18.6867 55.692 18.6837 55.6734 18.6788 55.6375C19.142 56.7338 19.6917 57.899 20.3436 59.1082C20.387 59.1932 20.4305 59.2781 20.4742 59.3631C20.7458 59.8868 21.0413 60.3746 21.3386 60.8653C21.3622 60.9043 21.3858 60.9432 21.4094 60.9822C23.6225 64.6188 26.2158 67.5731 28.677 69.8899L28.6732 69.9359L28.6718 69.9664C28.6172 70.8917 28.5694 71.8569 28.5417 72.8224L28.5406 72.8462V72.8532L28.541 72.8534C28.5062 73.8332 28.4784 74.8061 28.4782 75.717L28.4716 75.7288C28.4716 78.1657 28.6193 80.1796 29.053 80.7499C29.0613 80.761 29.0698 80.7716 29.0784 80.7817C29.1848 80.9023 29.5246 81.0097 30.0613 81.1046C35.5304 82.072 61.4471 81.7475 69.2354 80.9645C70.4575 80.8416 71.2333 80.7075 71.4139 80.5653C72.0699 80.0489 72.0699 75.9033 71.8885 71.5135L71.888 71.5187C71.8112 69.7954 71.6996 68.0373 71.5949 66.4397L71.5948 66.4382C74.9625 62.7267 78.0602 58.0725 80.3945 52.2484L80.3891 52.3068L80.3817 52.3839C81.2192 50.3041 81.973 48.0569 82.5941 45.6281V45.6142L82.5883 45.5214Z" fill="#3F100B" />
        <path className="pointer" fillRule="evenodd" clipRule="evenodd" d="M67.4995 74.2489C66.3177 75.1795 33.9812 75.6876 32.8679 74.4259C32.5026 73.9977 32.377 72.3249 32.377 70.2925C32.377 69.5446 32.3998 68.7453 32.4283 67.9403V67.9346C32.4512 67.1296 32.4911 66.3246 32.5368 65.5539L32.5425 65.4854C32.6795 62.9563 32.8679 60.8839 32.8679 60.8839L67.2597 57.8181C67.2597 57.8181 67.4538 59.959 67.6479 62.6936C67.7336 64.001 67.8249 65.4397 67.8877 66.8499C67.8934 66.9527 67.8934 67.0497 67.8991 67.1525C68.0361 70.6236 68.019 73.8379 67.4995 74.2489Z" fill="url(#paint0_linear_1620_9489)" />
        <path className="pointer" fillRule="evenodd" clipRule="evenodd" d="M77.6392 40.7133C73.934 64.4975 56.6525 71.7367 50.1383 73.6378C49.6645 73.7806 49.2534 73.889 48.9052 73.9747C48.8766 73.9804 48.8481 73.9918 48.8195 73.9975C48.7396 74.0146 48.6654 74.0318 48.5912 74.0489C48.5455 74.0603 48.4998 74.0717 48.4542 74.0831C48.3742 74.1003 48.3 74.1174 48.2315 74.1345C48.1915 74.1402 48.1573 74.146 48.123 74.1517C47.809 74.2202 47.6377 74.2487 47.6377 74.2487C47.4094 74.1745 47.1867 74.0946 46.9698 74.0146C46.9641 74.0146 46.9584 74.0089 46.9527 74.0089C24.2817 65.999 22.392 46.9991 22.392 46.9991C21.0789 38.6295 25.9659 35.9519 26.9536 35.421C27.0564 35.3639 27.1135 35.3353 27.1135 35.3353C27.1534 35.1013 27.1934 34.8786 27.2333 34.656C29.517 22.427 35.9398 25.2359 37.1158 25.8639C37.2357 25.9324 37.3042 25.9724 37.3042 25.9724C37.3613 25.784 37.4184 25.6013 37.4755 25.4243V25.4072C41.3063 13.8405 48.0831 20.1548 49.3219 21.445C49.4533 21.5821 49.5218 21.662 49.5218 21.662C49.5788 21.5706 49.6302 21.4793 49.6873 21.388C56.1615 10.6263 61.254 20.7885 62.156 22.7867C62.2474 22.9922 62.2931 23.1121 62.2931 23.1121C62.373 23.0779 62.4472 23.0493 62.5214 23.0208C69.5665 20.1776 71.1993 29.7975 71.4505 31.6872C71.479 31.887 71.4905 32.0012 71.4905 32.0012C71.5818 31.9784 71.6674 31.9612 71.7531 31.9498C77.7705 30.8423 77.6392 40.7133 77.6392 40.7133Z" fill="url(#paint1_linear_1620_9489)" />
        <path className="pointer" d="M49.6879 21.3879L48.8202 73.9975L48.8144 74.0774L48.8087 74.557C48.8087 74.6141 48.7802 74.6711 48.7345 74.7054C48.7003 74.7282 48.6717 74.7397 48.6318 74.7397C48.6089 74.7397 48.5804 74.7339 48.5575 74.7225C48.4491 74.6883 47.8724 74.4885 46.9704 74.0146C46.9647 74.0146 46.959 74.0089 46.9533 74.0089C45.2063 73.0954 42.2547 71.1886 39.1375 67.5633C34.7243 62.4308 29.0666 52.7139 26.9542 35.4209C27.057 35.3638 27.1141 35.3353 27.1141 35.3353C27.154 35.1012 27.194 34.8786 27.234 34.6559C30.7394 65.057 45.1149 72.8442 48.1236 74.1516C48.1807 74.1802 48.2264 74.1973 48.2721 74.2144C48.3406 74.243 48.3977 74.2715 48.4491 74.2886L48.4548 74.0831L48.4605 73.7748V73.7691L49.3226 21.445C49.4539 21.582 49.5224 21.6619 49.5224 21.6619C49.5795 21.5706 49.6309 21.4793 49.6879 21.3879Z" fill="url(#paint2_linear_1620_9489)" />
        <path className="pointer" d="M50.1373 73.6379C49.6805 74.0033 49.2124 74.3573 48.7385 74.7055H48.7328C48.6986 74.7284 48.67 74.7398 48.6301 74.7398C48.6072 74.7398 48.5787 74.7341 48.5558 74.7226C48.533 74.7112 48.5102 74.6941 48.493 74.6713C48.4816 74.6598 48.4759 74.6484 48.4702 74.637C48.4645 74.6313 48.4645 74.6199 48.4588 74.6142C48.4359 74.5514 48.4531 74.4715 48.5045 74.4201C48.5159 74.4086 48.573 74.3458 48.6814 74.2317C48.7214 74.186 48.7671 74.1346 48.8127 74.0775C48.847 74.049 48.8755 74.0147 48.9041 73.9748C51.2734 71.2401 63.2511 55.7056 62.155 22.7868C62.2463 22.9923 62.292 23.1122 62.292 23.1122C62.3719 23.0779 62.4461 23.0494 62.5203 23.0208C63.4852 53.439 53.2887 69.0307 49.8632 73.3924C72.734 55.6028 71.3923 31.9385 71.3752 31.693L71.4494 31.6873C71.478 31.8871 71.4894 32.0013 71.4894 32.0013C71.5807 31.9785 71.6664 31.9613 71.752 31.9499C71.8319 34.6789 71.7748 56.7789 50.1373 73.6379Z" fill="url(#paint3_linear_1620_9489)" />
        <path className="pointer" d="M48.7977 74.4773L48.4723 74.6372C48.4666 74.6315 48.4666 74.6201 48.4608 74.6144C48.398 74.4831 48.3295 74.346 48.2724 74.2147C48.2553 74.1862 48.2439 74.1633 48.2325 74.1348C37.8133 52.3488 37.1397 30.3173 37.1168 25.8642C37.2367 25.9327 37.3052 25.9726 37.3052 25.9726C37.3623 25.7842 37.4194 25.6015 37.4765 25.4246C37.4651 28.5303 37.762 51.2526 48.4608 73.7694V73.7751C48.5065 73.8665 48.5465 73.9578 48.5922 74.0492C48.6207 74.112 48.6492 74.1691 48.6835 74.2318C48.7178 74.3118 48.7577 74.3974 48.7977 74.4773Z" fill="url(#paint4_linear_1620_9489)" />
        <path className="pointer" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M76.6457 45.6576C76.6457 45.6633 76.6457 45.6633 76.6457 45.669C76.1376 47.6558 75.521 49.4941 74.8359 51.1954C74.9387 50.1335 74.9444 49.1744 74.8816 48.3009C74.4534 42.3748 70.7482 40.6792 70.7482 40.6792C71.2962 30.5227 62.3272 30.557 62.3272 30.557C57.3831 23.3977 49.5216 31.0479 49.5216 31.0479C40.3128 27.7823 37.7266 34.8616 37.7266 34.8616C30.4817 32.7378 28.2323 42.6203 28.2323 42.6203C23.3339 47.4388 24.3672 53.9016 24.3672 53.9016L23.5851 51.8463C22.7344 41.1816 27.6043 38.9779 27.6043 38.9779C29.5968 26.572 37.2984 31.0479 37.2984 31.0479C45.5938 21.7535 49.5216 27.2228 49.5216 27.2228C57.4744 16.5239 62.3672 27.4969 62.3672 27.4969C70.1373 24.0999 71.3476 36.4373 71.3476 36.4373C75.0414 35.2499 76.1775 40.9361 76.5201 44.139C76.5886 44.7612 76.6228 45.2922 76.6457 45.6576Z" fill="url(#paint5_linear_1620_9489)" />
        <g className="pointer" opacity="0.5">
            <path d="M73.4429 54.6148C73.2945 54.9174 73.146 55.2143 72.9919 55.5054L72.6037 55.4369C72.7464 54.6034 72.8035 53.8384 72.7692 53.1533C72.7236 51.8858 72.381 50.8639 71.7587 50.1103C70.5941 48.7059 68.8071 48.7116 68.7614 48.7001L68.3732 48.7059L68.396 48.3119C68.5787 45.2347 67.9793 43.1851 66.6205 42.2317C64.628 40.8273 61.5908 42.1975 61.5622 42.2089L61.2539 42.3459L61.0884 42.049C59.9637 39.9766 58.4793 38.7377 56.6866 38.3723C53.1127 37.6359 49.4075 40.5704 49.3733 40.6046L49.1791 40.7588L48.9679 40.6332C46.8041 39.4 44.8745 39.1145 43.2302 39.7939C40.3814 40.9814 39.2852 44.6981 39.2681 44.7323L39.1368 45.2119L38.7257 44.9435C37.1614 43.9273 35.7284 43.6761 34.4781 44.1957C31.538 45.4288 30.3676 50.4814 30.3562 50.5328L30.3048 50.7668L30.0764 50.8125C27.553 51.3549 26.8336 53.964 26.6624 55.9279C26.5482 57.1839 26.6681 58.3086 26.6681 58.3371C26.6681 58.3371 26.1428 57.4579 25.8973 57.0012C25.903 56.4075 25.9544 55.5511 26.0914 54.7975C26.4454 52.8735 27.376 50.7611 29.711 50.1446C29.9794 49.0827 31.2639 44.7437 34.2041 43.5163C35.5857 42.9396 37.1043 43.128 38.7314 44.0758C39.1311 42.9739 40.3814 40.1878 42.9562 39.1145C44.766 38.3609 46.8384 38.6178 49.122 39.8738C49.967 39.2401 53.3753 36.9394 56.8294 37.6416C58.759 38.0412 60.3576 39.3029 61.5794 41.4039C62.47 41.0671 65.0905 40.2506 67.0373 41.6208C68.5673 42.6942 69.2752 44.8294 69.1439 47.9865C69.8233 48.0607 71.262 48.3633 72.3068 49.625C72.8377 50.253 73.1917 51.0295 73.363 51.9429V51.9486C73.5228 52.7365 73.5514 53.6214 73.4429 54.6148Z" fill="url(#paint6_linear_1620_9489)" />
        </g>
        <path className="pointer" fillRule="evenodd" clipRule="evenodd" d="M58.422 24.8192C58.422 24.8192 56.892 31.476 58.2621 33.6056C58.2621 33.6056 60.6828 28.6101 58.422 24.8192Z" fill="white" />
        <path className="pointer" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M67.8989 67.152C66.1005 68.0598 54.0771 74.0315 49.2757 74.5568C44.0804 75.1334 32.4281 67.9399 32.4281 67.9399V67.9342L32.5366 65.5535L32.5423 65.485C32.5423 65.485 40.6036 70.9886 40.9804 70.8516C41.3458 70.7203 36.276 63.5838 35.9735 63.1557C36.3731 63.5496 44.343 71.5937 45.1766 70.9258C46.0158 70.2521 43.7607 62.9501 43.6408 62.5619C43.8292 62.9558 47.0263 69.8125 47.7571 69.6812C48.5164 69.5442 48.859 61.009 48.859 61.009C48.859 61.009 49.31 70.509 50.3205 70.7488C51.3025 70.9829 54.7451 65.4222 54.9563 65.0796C54.8193 65.3822 52.5699 70.1665 53.4034 70.0922C54.2312 70.0237 58.0107 66.5926 58.2448 66.3813L54.608 70.9543C61.4133 69.1902 66.7913 63.6181 67.6477 62.6932C67.7333 64.0006 67.8247 65.4393 67.8875 66.8495C67.8932 66.9522 67.8932 67.0493 67.8989 67.152Z" fill="url(#paint7_linear_1620_9489)" />
        <path className="pointer" fillRule="evenodd" clipRule="evenodd" d="M68.8529 31.282C68.8529 31.282 67.6083 34.0738 68.1278 36.1519C68.1278 36.1519 69.1897 33.8454 68.8529 31.282Z" fill="white" />
        <path className="pointer" fillRule="evenodd" clipRule="evenodd" d="M42.425 29.2096C42.425 29.2096 41.9226 32.7835 42.9617 35.5753C42.9617 35.5753 43.5954 33.1318 42.425 29.2096Z" fill="white" />
        <path className="pointer" fillRule="evenodd" clipRule="evenodd" d="M25.7031 43.876C25.7031 43.876 26.3654 50.7612 30.476 54.9917C30.4702 54.986 27.3531 47.2444 25.7031 43.876Z" fill="white" />
        <path className="pointer" fillRule="evenodd" clipRule="evenodd" d="M68.4592 54.3637C68.4592 54.3637 73.3177 46.1198 74.0542 36.9452L68.4592 54.3637Z" fill="white" />
        <path className="pointer" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M67.4998 74.2486C66.318 75.1792 33.9816 75.6873 32.8683 74.4256C32.4972 73.9974 32.3716 72.3246 32.3716 70.2922L32.4287 70.1894C32.4287 70.1894 32.9311 73.5007 33.9245 73.9803C34.9293 74.4655 59.0103 75.4818 64.0172 73.4208C66.7919 72.2732 67.6654 69.2817 67.888 66.8439C68.0365 70.4349 68.0365 73.8261 67.4998 74.2486Z" fill="url(#paint8_linear_1620_9489)" />
        <path className="pointer" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M39.9312 70.9032C39.2746 70.5664 31.6986 66.6157 26.5946 58.229C26.332 57.7951 26.0694 57.3669 25.8296 56.9045C23.9742 53.2963 22.4498 49.711 22.1758 44.8468C22.1758 44.8468 23.2605 49.1229 26.0808 54.8035C26.2635 55.1746 26.4519 55.5514 26.6574 55.9339C29.4949 61.3347 33.7881 67.3522 39.9312 70.9032Z" fill="url(#paint9_linear_1620_9489)" />
        <path className="pointer" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M77.6392 40.7133C77.3823 42.4545 77.0455 44.0988 76.6459 45.6574C76.6459 45.6631 76.6459 45.6631 76.6459 45.6688C76.1377 47.6555 75.5212 49.4939 74.8361 51.1952C74.3965 52.2742 73.934 53.2905 73.443 54.261C73.2946 54.5579 73.1462 54.849 72.992 55.1345C67.5741 65.2682 59.8382 69.276 59.5071 69.4416C65.4788 65.1597 69.8292 58.5999 72.7694 52.8337C72.9749 52.4341 73.169 52.0402 73.3574 51.6519V51.6462C73.9226 50.4816 74.4307 49.3569 74.8817 48.3007C75.5554 46.725 76.0978 45.3091 76.5203 44.1387C77.2796 42.0264 77.6392 40.7133 77.6392 40.7133Z" fill="url(#paint10_linear_1620_9489)" />
        <text className={clsx(cls.label, cls["size" + animeObj.shells.toString().length], "pointer")} />
        <defs>
            <linearGradient id="paint0_linear_1620_9489" x1="50.1739" y1="75.1793" x2="50.1739" y2="57.8184" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D5A7C9" />
                <stop offset="0.0716" stopColor="#D9ACC9" />
                <stop offset="0.3844" stopColor="#E6BBC8" />
                <stop offset="0.6939" stopColor="#EEC5C7" />
                <stop offset="0.9944" stopColor="#F1C8C6" />
            </linearGradient>
            <linearGradient id="paint1_linear_1620_9489" x1="49.9041" y1="74.2491" x2="49.9041" y2="16.5238" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F4D5CD" />
                <stop offset="1" stopColor="#FEFAE1" />
            </linearGradient>
            <linearGradient id="paint2_linear_1620_9489" x1="38.3205" y1="74.74" x2="38.3205" y2="21.3883" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D5A7C9" />
                <stop offset="0.0716" stopColor="#D9ACC9" />
                <stop offset="0.3844" stopColor="#E6BBC8" />
                <stop offset="0.6939" stopColor="#EEC5C7" />
                <stop offset="0.9944" stopColor="#F1C8C6" />
            </linearGradient>
            <linearGradient id="paint3_linear_1620_9489" x1="60.1041" y1="74.7401" x2="60.1041" y2="22.7871" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D5A7C9" />
                <stop offset="0.0716" stopColor="#D9ACC9" />
                <stop offset="0.3844" stopColor="#E6BBC8" />
                <stop offset="0.6939" stopColor="#EEC5C7" />
                <stop offset="0.9944" stopColor="#F1C8C6" />
            </linearGradient>
            <linearGradient id="paint4_linear_1620_9489" x1="42.9567" y1="74.6375" x2="42.9567" y2="25.4249" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D5A7C9" />
                <stop offset="0.0716" stopColor="#D9ACC9" />
                <stop offset="0.3844" stopColor="#E6BBC8" />
                <stop offset="0.6939" stopColor="#EEC5C7" />
                <stop offset="0.9944" stopColor="#F1C8C6" />
            </linearGradient>
            <linearGradient id="paint5_linear_1620_9489" x1="50.0646" y1="53.9044" x2="50.0646" y2="22.5381" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C65188" />
                <stop offset="1" stopColor="#FAEAD9" />
            </linearGradient>
            <linearGradient id="paint6_linear_1620_9489" x1="49.6993" y1="58.3384" x2="49.6993" y2="37.51" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C65188" />
                <stop offset="1" stopColor="#F6DED9" />
            </linearGradient>
            <linearGradient id="paint7_linear_1620_9489" x1="50.1629" y1="74.5901" x2="50.1629" y2="61.0094" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C65188" />
                <stop offset="0.7151" stopColor="white" />
            </linearGradient>
            <linearGradient id="paint8_linear_1620_9489" x1="50.175" y1="75.1793" x2="50.175" y2="66.8474" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C65188" />
                <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient id="paint9_linear_1620_9489" x1="31.055" y1="70.9036" x2="31.055" y2="44.8442" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C65188" />
                <stop offset="0.7151" stopColor="white" />
            </linearGradient>
            <linearGradient id="paint10_linear_1620_9489" x1="68.5726" y1="69.4419" x2="68.5726" y2="40.7136" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C65188" />
                <stop offset="0.7151" stopColor="white" />
            </linearGradient>
        </defs>
    </svg>
}

export default CIShell;