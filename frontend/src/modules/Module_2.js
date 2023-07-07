import { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { showHomePage } from "../libs/animations";
import BoardImg from "../assets/images/Board-alt.png";
import CIButton from "../shared/CIButton";
import CIClose from "../shared/CIClose";
import CILabel from "../shared/CILabel";
import CIMusic from "../shared/CIMusic";
import CIShell from "../shared/CIShell";
import { AppContext } from "../App";
import anime from "animejs";
import $ from "jquery";

const useStyles = makeStyles({
    board: {
        position: "absolute",
        filter: "drop-shadow(0.33vh 0.66vh 1.2vh black)",
        textAlign: "center",
        top: "5vh",
        left: "38vw",
        height: "90vh",
        width: "55vw",
        transform: "rotateY(-90deg)",
        background: `url(${BoardImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "55vw 90vh"
    },
    logo: {
        position: "absolute",
        filter: "drop-shadow(0.1vh 0.1vh 0.4vh black)",
        top: "-40vh",
        left: "1.5vw",
        height: "22.95vh",
        width: "21vw"
    },
    palm: {
        position: "absolute",
        filter: "drop-shadow(0.33vh 0.66vh 1.2vh black)",
        transform: "scale(0)",
        top: "40vh",
        left: "14vw",
        height: "120.52vh",
        width: "68vw"
    },
    instructor: {
        position: "absolute",
        filter: "drop-shadow(0.33vh 0.66vh 1.2vh black)",
        transform: "scaleX(-1)",
        top: "33.5vh",
        left: "-30vw",
        height: "70vh",
        width: "24vw"
    },
    guide: {
        position: "absolute",
        filter: "drop-shadow(0.33vh 0.66vh 1.2vh black)",
        transform: "scaleX(-1)",
        top: "33.5vh",
        left: "-30vw",
        height: "70vh",
        width: "24vw"
    },
    guide2: {
        position: "absolute",
        filter: "drop-shadow(0.33vh 0.66vh 1.2vh black)",
        top: "33.5vh",
        left: "108vw",
        height: "70vh",
        width: "24vw"
    },
    header: {
        fontSize: "4vh",
        marginTop: "10vh"
    },
    close: {
        position: "absolute",
        filter: "drop-shadow(0.33vh 0.66vh 1.2vh black)",
        top: "-12vh",
        left: "94vw",
        width: "4vw"
    },
    music: {
        position: "absolute",
        filter: "drop-shadow(0.33vh 0.66vh 1.2vh black)",
        top: "-12vh",
        left: "87.5vw",
        width: "4vw"
    },
    shell: {
        position: "absolute",
        filter: "drop-shadow(0.33vh 0.66vh 1.2vh black)",
        top: "-12vh",
        left: "81vw",
        width: "4vw"
    },
    body: {
        "& button": {
            backgroundSize: "10vw 7vh",
            width: "10vw",
            marginTop: "4vh"
        },
        "& label": {
            color: "black",
            marginTop: "12vh"
        },
        "& img": {
            width: "5vw",
            marginTop: "10vh",
            marginBottom: "-8vh"
        },
        marginTop: "12vh",
        padding: "0vh 8vw"
    }
});

const Module_2 = () => {
    const cls = useStyles();

    const history = useHistory();

    const { BGM, howler, user } = useContext(AppContext);

    useEffect(() => {
        anime
            .timeline()
            .add({
                targets: "#background",
                opacity: 0,
                easing: "linear",
                duration: 2000,
                complete: () => {
                    $("#background").attr("src", require("../assets/modules/Module_2_BG.jpg"));
                }
            })
            .add({
                targets: "#background",
                opacity: 1,
                easing: "linear",
                duration: 2000
            })
            .add({
                targets: "#logo2",
                top: "6vh",
                easing: "easeOutQuint",
                duration: 2000
            }, "-=1000")
            .add({
                targets: "#instructor",
                left: "0vw",
                easing: "easeOutQuint",
                duration: 2000
            }, "-=2000")
            .add({
                targets: "#board",
                rotateY: ["-90deg", "0deg"],
                easing: "easeOutQuint",
                duration: 2000
            }, "-=2000");
    }, []);

    const handleClick = () => {
        anime
            .timeline()
            .add({
                targets: "#instructor",
                left: "-30vw",
                easing: "easeInQuint",
                duration: 2000
            })
            .add({
                targets: "#board",
                rotateY: ["0deg", "90deg"],
                easing: "linear",
                duration: 2000
            }, "-=2000")
            .add({
                targets: "#guide",
                left: "3vw",
                easing: "easeOutQuint",
                duration: 2000
            })
            .add({
                targets: "#background",
                width: "180vw",
                height: "180vh",
                marginTop: "-66vh",
                marginLeft: "-76vw",
                easing: "easeOutQuint",
                duration: 2000
            }, "-=2000")
            .add({
                targets: "#palm",
                scale: [0, 1],
                top: "-18vh",
                easing: "easeOutQuint",
                duration: 2000
            }, "-=2000")
            .add({
                targets: "#guide2",
                left: "74vw",
                easing: "easeOutQuint",
                duration: 2000
            }, "-=2000")
            .add({
                targets: "#close, #music, #shell",
                top: "4vh",
                easing: "easeOutQuint",
                duration: 2000
            }, "-=2000");
    }

    const handleClose = () => {
        anime
            .timeline()
            .add({
                targets: "#background",
                opacity: 0,
                width: "100vw",
                height: "100vh",
                marginTop: "0vh",
                marginLeft: "0vw",
                easing: "easeInQuint",
                duration: 2000,
                complete: () => {
                    $("#background").attr("src", require("../assets/images/Application_BG.jpg"));
                }
            })
            .add({
                targets: "#background",
                opacity: 1,
                easing: "linear",
                duration: 2000
            })
            .add({
                targets: "#logo2",
                left: "-30vw",
                easing: "easeInQuint",
                duration: 2000
            }, "-=4000")
            .add({
                targets: "#guide",
                left: "-30vw",
                easing: "easeInQuint",
                duration: 2000
            }, "-=4000")
            .add({
                targets: "#guide2",
                left: "130vw",
                easing: "easeInQuint",
                duration: 2000
            }, "-=4000")
            .add({
                targets: "#palm",
                scale: [1, 0],
                top: "40vh",
                easing: "easeInQuint",
                duration: 2000
            }, "-=4000")
            .add({
                targets: "#close, #music, #shell",
                top: "-12vh",
                easing: "easeInQuint",
                duration: 2000
            }, "-=4000")
            .finished.then(() => {
                howler.module_2.fade(howler.module_2.volume(), 0, 1000);
                if (BGM)
                    howler.welcome.fade(0, 1, 1000);

                history.push("/home");
                anime({
                    targets: "#logo",
                    top: "-12vh",
                    left: "-12vw",
                    scale: 0.45,
                    translateX: ["-30vw", "0vw"],
                    translateY: ["-30vh", "0vh"],
                    easing: "easeOutQuint",
                    duration: 2000
                });
                showHomePage();
            });
    }

    return <div>
        <img className={cls.logo} id="logo2" src={require("../assets/modules/Module_2_Text.png")} />
        <img className={cls.palm} id="palm" src={require("../assets/modules/Palm.png")} />
        <img className={cls.instructor} id="instructor" src={require("../assets/avatars/xtras/Avatar_11.png")} />
        <img className={cls.guide} id="guide" src={require(`../assets/avatars/Avatar_${user.avatar}.png`)} />
        <img className={cls.guide2} id="guide2" src={require("../assets/avatars/xtras/Avatar_12.png")} />
        <CIClose className={cls.close} id="close" onClick={handleClose} />
        <CIMusic className={cls.music} id="music" />
        <CIShell className={cls.shell} id="shell" />
        <div className={cls.board} id="board">
            <CILabel className={cls.header}>
                Welcome to the Tree Shaking activity!
            </CILabel>
            <div className={cls.body}>
                <CILabel>
                    In this activity, you’ll shake this palm tree on the island to get the shells.
                </CILabel>
                <CILabel>
                    Then, you can keep all the shells to yourself or share some with your partner.
                </CILabel>
                <img src={require("../assets/modules/Shell-alt.png")} />
                <CILabel>
                    Are you ready?
                </CILabel>
                <CIButton onClick={handleClick}>Let's GO</CIButton>
            </div>
        </div>
    </div>
}

export default Module_2;