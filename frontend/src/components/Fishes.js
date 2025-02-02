import { memo, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { anime } from "../libs/utils";

const useStyles = makeStyles({
    variant1: {
        position: "absolute",
        opacity: 0,
        width: "4vw"
    },
    variant2: {
        position: "absolute",
        opacity: 0,
        width: "2vw"
    }
});

const fishArray = Array(anime.random(10, 20)).fill();

const Fishes = () => {
    const cls = useStyles();

    const getPathVar = (prop) => (node) => {
        return anime.path(`#motion-path${node.getAttribute("fishid")} #${parseInt(node.getAttribute("motionpath")) ? "line" : "circle"}`)(prop);
    }

    const showAnimation = (id) => () => {
        anime({
            targets: "#variant" + id,
            opacity: {
                value: 1,
                duration: 1
            },
            translateX: getPathVar("x"),
            translateY: getPathVar("y"),
            rotate: getPathVar("angle"),
            easing: "linear",
            duration: 10000,
            loop: true
        });
    }

    useEffect(() => {
        setTimeout(showAnimation(1), 0);
        setTimeout(showAnimation(2), 4000);
        setTimeout(showAnimation(3), 8000);
    }, []);

    return <div>
        {fishArray.map((_, i) => {
            const motionPath = i % 2;

            const motionLocation = anime.random(0, 1);

            const radius = anime.random(400, 1000);

            return <div key={i}>
                <svg id={"motion-path" + i}>
                    <path id="circle" d={`M ${radius} ${radius} m ${radius} 0 a ${radius} ${radius} 0 1 0 -${radius * 2} 0 a ${radius} ${radius} 0 1 0 ${radius * 2} 0`} fill="transparent" />
                    <path
                        id="line"
                        d={`M 0 0 L ${anime.random(1000, 2000) * ((motionPath && motionLocation) ? 1 : (anime.random(0, 1) || -1))} ${anime.random(1000, 2000) * ((motionPath && !motionLocation) ? 1 : (anime.random(0, 1) || -1))}`}
                        fill="transparent"
                    />
                </svg>
                <svg
                    className={cls.variant1}
                    id={`variant${anime.random(1, 3)}`}
                    fishid={i}
                    motionpath={motionPath}
                    style={{
                        transform: `scale(${anime.random(5, 15) / 10})`,
                        top: (motionPath && !motionLocation) ? "-10vh" : anime.random(10, 90) + "vh",
                        left: (motionPath && motionLocation) ? "-10vw" : anime.random(10, 90) + "vw"
                    }}
                    viewBox="0 0 43 15"
                >
                    <path d="M0.800049 3.96007C0.790049 3.16007 0.660068 2.30007 0.0700684 1.77007C0.660068 1.59007 1.29005 1.86007 1.83005 2.16007C2.96005 2.77007 4.03008 3.50007 5.14008 4.16007C5.88008 4.60007 6.65007 5.00006 7.45007 5.31006C8.95007 5.54006 10.7 5.11006 12.2701 4.79006C12.2601 4.78006 12.2401 4.77006 12.2301 4.76006C16.7201 2.90006 22.1401 3.45007 26.2101 0.740071C27.5901 0.660071 28.9201 1.31006 30.0601 2.12006C31.1201 2.87006 32.0801 3.77006 33.1701 4.48006C35.5301 5.29006 37.8601 6.19007 40.1401 7.24007C41.1301 7.70007 43.1201 8.45006 42.8101 8.81006C42.4001 9.29006 41.8201 9.67006 41.1801 9.98006C40.3301 10.3801 39.37 10.6501 38.55 10.8101C36.34 11.2501 34.1 11.4601 31.86 11.5301C31.32 12.4401 30.4901 13.1901 29.5301 13.6401C28.4101 14.1701 27.1301 14.3401 25.9001 14.2201C25.7901 14.2101 25.6601 14.1901 25.6001 14.0901C26.5101 14.0101 27.1801 13.5801 27.7801 13.0001C28.2801 12.5201 28.8801 11.9701 29.4801 11.5501C28.0101 11.5301 26.5501 11.4701 25.0901 11.3801C21.7101 11.1601 18.34 10.8501 15.05 10.1401C14.11 10.6201 12.9401 10.8801 11.8201 10.8201C12.3401 10.5301 12.8401 10.2601 13.6801 9.93006C13.7501 9.90006 13.8201 9.88007 13.8901 9.85007C13.3801 9.72007 12.8701 9.62007 12.3701 9.47007C10.5201 8.93007 8.38005 8.32006 6.61005 7.29006C5.92005 7.32006 5.23006 7.47007 4.53006 7.66007C3.28006 8.01007 2.02007 8.51006 0.79007 8.70006C0.45007 7.97006 0.460059 7.14007 0.560059 6.35007C0.640059 5.53007 0.820049 4.75007 0.800049 3.96007Z" fill="#196D85" />
                </svg>
                <svg
                    className={cls.variant2}
                    id={`variant${anime.random(1, 3)}`}
                    fishid={i}
                    motionpath={motionPath}
                    style={{
                        transform: `scale(${anime.random(5, 15) / 10})`,
                        top: (motionPath && !motionLocation) ? "-10vh" : anime.random(10, 90) + "vh",
                        left: (motionPath && motionLocation) ? "-10vw" : anime.random(10, 90) + "vw"
                    }}
                    viewBox="0 0 30 19"
                >
                    <path d="M27.2901 10.01C25.6501 10.91 23.8601 11.44 22.0301 11.74C21.8601 12.07 21.6601 12.4 21.4801 12.72C21.1601 13.31 20.8301 13.91 20.5001 14.5C20.2801 14.9 20.0101 15.33 19.5801 15.45C19.1701 15.56 18.7501 15.36 18.4001 15.13C18.1401 14.95 17.8901 14.75 17.6601 14.53C17.5701 14.44 17.4701 14.33 17.4801 14.2C17.4901 14.1 17.5601 14.01 17.6401 13.94C18.2701 13.28 18.9301 12.65 19.5901 12.02C18.7201 12.07 17.8401 12.07 16.9801 11.95C16.2901 11.85 15.6101 11.68 14.9401 11.48C13.9501 11.18 12.9801 10.82 12.0001 10.54C11.5201 10.4 11.0501 10.26 10.5701 10.12C10.3901 10.28 10.2001 10.43 10.0201 10.58C9.6301 10.92 9.2401 11.26 8.8401 11.59C8.5801 11.81 8.27011 12.05 7.93011 12.02C7.61011 11.99 7.3601 11.73 7.1701 11.47C7.0301 11.27 6.90011 11.06 6.80011 10.84C6.76011 10.75 6.72011 10.65 6.76011 10.56C6.79011 10.49 6.87011 10.45 6.94011 10.41C7.56011 10.12 8.1801 9.83996 8.8101 9.57996C8.5001 9.47996 8.1901 9.35996 7.8801 9.24996C7.6001 9.25996 7.32011 9.27996 7.04011 9.29996C6.28011 9.36996 5.52011 9.47996 4.78011 9.63996C4.41011 9.71996 4.0301 9.80996 3.6701 9.89996C3.5101 9.93996 3.36011 9.97996 3.22011 10.06C3.08011 10.15 2.91011 10.18 2.75011 10.23C2.35011 10.36 1.94011 10.48 1.53011 10.59C1.44011 10.62 1.34011 10.64 1.25011 10.61C1.13011 10.56 1.08011 10.43 1.04011 10.3C0.340108 7.97996 1.50011 5.26996 0.360107 3.12996C0.620107 3.13996 0.880104 3.16996 1.1301 3.20996C2.3601 3.41996 3.48011 3.98996 4.57011 4.56996C5.43011 5.02996 6.2901 5.51996 7.2001 5.87996C8.0601 5.52996 8.9701 5.23996 9.8401 4.92996C10.3901 4.72996 10.9401 4.52996 11.5001 4.33996C14.1601 2.68996 17.4001 1.54996 20.5901 0.459961C20.7101 0.539961 20.8201 0.609964 20.9401 0.689964C21.8601 1.32996 22.6301 2.05996 23.2301 2.85996C23.3801 3.04996 23.5501 3.27996 23.6701 3.50996C23.9801 3.58996 24.2901 3.67996 24.5901 3.76996C26.5501 4.37996 28.1501 5.82996 29.3601 7.44996C29.4401 7.54996 29.5201 7.66996 29.5301 7.79996C29.5501 8.00996 29.3901 8.19996 29.2401 8.34996C28.6301 8.95996 28.0501 9.58996 27.2901 10.01Z" fill="url(#gradient)" />
                    <defs>
                        <linearGradient id="gradient" x1="125.336" y1="-38.1638" x2="-295.082" y2="145.064" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0B8C94" />
                            <stop offset="0.3995" stopColor="#158688" />
                            <stop offset="1" stopColor="#29796D" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        })}
    </div>
}

export default memo(Fishes);