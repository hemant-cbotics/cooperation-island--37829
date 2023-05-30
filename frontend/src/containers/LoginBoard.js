import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { showHomePage, showLandingPage, showReadingPane } from "../libs/animations";
import BoardImg from "../assets/images/Board.png";
import HeaderImg from "../assets/images/Header.png";
import SwitchImg from "../assets/images/Switch.png";
import CIButton from "../shared/CIButton";
import CIInput from "../shared/CIInput";
import CILabel from "../shared/CILabel";
import CILink from "../shared/CILink";
import { AppContext } from "../App";
import { Howl } from "howler";
import anime from "animejs";
import clsx from "clsx";

const useStyles = makeStyles({
    board: {
        position: "absolute",
        top: "3%",
        left: "110%",
        height: "94vh",
        width: "30vw",
        background: `url(${BoardImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    },
    guide: {
        position: "absolute",
        top: "33.5%",
        left: "-30%",
        height: "70vh",
        width: "24vw",
        transform: "scaleX(-1)"
    },
    guide2: {
        position: "absolute",
        top: "44%",
        left: "50%",
        height: "70vh",
        width: "24vw",
        transform: "scale(0)"
    },
    header: {
        marginTop: "18.4%",
        marginLeft: "18.4%",
        height: "10vh",
        width: "75vw",
        background: `url(${HeaderImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    },
    title: {
        "&#sign-up": {
            marginLeft: "38.5%"
        },
        position: "absolute",
        marginTop: "4%",
        marginLeft: "11.5%",
        fontSize: "3.3vh",
        textAlign: "center"
    },
    tab: {
        position: "absolute",
        top: "11.1%",
        left: "14.3%",
        height: "10vh",
        width: "10vw",
        background: `url(${SwitchImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    },
    body: {
        position: "relative",
        height: "61vh",
        marginLeft: "8%",
        marginRight: "4%",
        overflow: "hidden",
        textAlign: "center"
    },
    signInSection: {
        "& button": {
            marginTop: "2vh",
            marginLeft: "1%"
        },
        "& input": {
            marginTop: "0.7vh"
        },
        "& label": {
            "&:nth-child(5)": {
                marginTop: "5.6vh",
                marginLeft: "1%"
            },
            marginTop: "2.7vh"
        },
        position: "absolute",
        zIndex: 2,
        marginTop: "2vh",
        marginLeft: "12.5%"
    },
    signUpSection: {
        position: "absolute",
        "& button": {
            width: "9.65vw",
            marginTop: "1vh",
        },
        "& input": {
            marginBottom: "1vh"
        },
        "& label": {
            marginLeft: "3%"
        },
        zIndex: 2,
        marginTop: "5%",
        marginLeft: "105%"
    },
    resetSection: {
        position: "absolute",
        "& label": {
            "&:first-child": {
                fontSize: "4.5vh",
                fontWeight: "bold",
                letterSpacing: "0.1vw"
            },
            "&:nth-child(2)": {
                marginTop: "8vh",
                marginBottom: "0.7vh"
            },
            width: "100%"
        },
        "& button": {
            width: "45%"
        },
        "& div": {
            display: "flex",
            justifyContent: "space-between",
            width: "95.5%"
        },
        "& input": {
            marginBottom: "3vh",
            marginLeft: "2.5vw"
        },
        opacity: 0,
        rotate: "-90deg",
        height: "43.3vh",
        width: "105%",
        marginTop: "9%",
        marginLeft: "-100%"
    },
    grid: {
        display: "flex"
    },
    age: {
        marginTop: "0.6vh",
        marginLeft: "1vw",
        width: "2.7vw"
    },
    email: {
        width: "9.1vw"
    },
    footerText: {
        fontSize: "2vh",
        marginTop: "1.7vh",
        marginBottom: "-1.33vh"
    },
    link: {
        display: "inline",
        fontSize: "2vh"
    },
    pipe: {
        display: "inline",
        fontSize: "2.5vh"
    }
});

const LoginBoard = () => {
    const cls = useStyles();

    const history = useHistory();

    const [active, setActive] = useState(window.location.pathname === "/login");

    const { setHowler, setUser } = useContext(AppContext);

    useEffect(() => {
        history.push(active ? "/login" : "/signup");

        anime({
            targets: `.${cls.tab}`,
            left: active ? "6.2vw" : "14.3vw",
            easing: "linear",
            duration: 250
        });
        anime({
            targets: "#sign-in",
            color: active ? "#7C382D" : "#CEB891",
            easing: "linear",
            duration: 250
        });
        anime({
            targets: "#sign-up",
            color: active ? "#CEB891" : "#7C382D",
            easing: "linear",
            duration: 250
        });
        anime({
            targets: `.${cls.signInSection}`,
            marginLeft: active ? "12.5%" : "-105%",
            easing: "linear",
            duration: 250
        });
        anime({
            targets: `.${cls.signUpSection}`,
            marginLeft: active ? "105%" : "12.5%",
            easing: "linear",
            duration: 250
        });
    }, [active]);

    const handleSwitch = () => {
        setActive(!active);
    }

    const handleLink = () => {
        anime({
            targets: "#guide",
            scaleX: [-1, 0],
            scaleY: 0,
            left: "30%",
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: "#guide2",
            scale: [0, 1],
            top: "2%",
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: "#board",
            top: "16%",
            left: "38%",
            width: "27vw",
            height: "97vh",
            rotate: 90,
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: [`.${cls.header}`, `.${cls.signInSection}`, `.${cls.signUpSection}`],
            opacity: 0,
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: `.${cls.body}`,
            height: "80vh",
            duration: 0
        });
        anime({
            targets: [`.${cls.resetSection}`, `.${cls.signInSection}`, `.${cls.signUpSection}`],
            zIndex: (_, i) => i ? 1 : 2,
            duration: 0
        });
        anime({
            targets: `.${cls.resetSection}`,
            opacity: 1,
            marginLeft: "1%",
            easing: "easeOutQuint",
            duration: 2000
        });
    }

    const handleCancel = () => {
        anime({
            targets: "#guide",
            scaleX: -1,
            scaleY: 1,
            left: "6%",
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: "#guide2",
            scale: 0,
            top: "44%",
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: "#board",
            top: "3%",
            left: "63%",
            width: "30vw",
            height: "94vh",
            rotate: 0,
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: [`.${cls.header}`, `.${cls.signInSection}`, `.${cls.signUpSection}`],
            opacity: 1,
            easing: "easeOutQuint",
            duration: 2000
        });
        anime({
            targets: `.${cls.body}`,
            height: "61vh",
            duration: 0
        });
        anime({
            targets: [`.${cls.resetSection}`, `.${cls.signInSection}`, `.${cls.signUpSection}`],
            zIndex: (_, i) => i ? 2 : 1,
            duration: 0
        });
        anime({
            targets: `.${cls.resetSection}`,
            opacity: 0,
            marginLeft: "-100%",
            easing: "easeOutQuint",
            duration: 2000
        });
    }

    const handleSign = () => {
        if (!window) {
            anime({
                targets: "#logo",
                left: "-50%",
                easing: "easeInQuint",
                duration: 2000
            });
        }
        anime({
            targets: "#guide",
            left: "-30%",
            easing: "easeInQuint",
            duration: 2000
        });
        anime({
            targets: "#board",
            left: "110%",
            easing: "easeInQuint",
            duration: 2000
        })
            .finished.then(() => {
                setUser({ active: true, access: true });
                setHowler({
                    dashboard: new Howl({
                        src: [require("../assets/sounds/Dashboard.mp3")],
                        autoplay: true,
                        loop: true
                    }),
                    welcome: new Howl({
                        src: [require("../assets/sounds/Welcome.mp3")],
                        autoplay: true,
                        volume: 0.2,
                        loop: true
                    })
                });

                if (window) {
                    history.push("/home");
                    showHomePage();
                }
                else {
                    history.push("/access");
                    showLandingPage();
                }
            });
    }

    const handleClick = (path) => () => {
        anime
            .timeline()
            .add({
                targets: "#guide",
                left: "-30%",
                easing: "easeInQuint",
                duration: 2000
            })
            .add({
                targets: "#board",
                left: "110%",
                easing: "easeInQuint",
                duration: 2000
            }, "-=2000")
            .finished.then(() => {
                history.push(path);
                showReadingPane();
            });
    }

    return <div>
        <img className={cls.guide} id="guide" src={require("../assets/avatars/Avatar_1.png")} />
        <img className={cls.guide2} id="guide2" src={require("../assets/avatars/Avatar_2.png")} />
        <div className={cls.board} id="board">
            <div className={clsx(cls.header, "pointer")} onClick={handleSwitch}>
                <div className={clsx(cls.tab, "pointer")} />
                <CILabel className={clsx(cls.title, "pointer")} id="sign-in">
                    Sign In
                </CILabel>
                <CILabel className={clsx(cls.title, "pointer")} id="sign-up">
                    Sign Up
                </CILabel>
            </div>
            <div className={cls.body}>
                <div className={cls.signInSection}>
                    <CILabel>Username</CILabel>
                    <CIInput />
                    <CILabel>Password</CILabel>
                    <CIInput type="password" />
                    <CILink onClick={handleLink}>Forgot Password?</CILink>
                    <CIButton onClick={handleSign}>Sign In</CIButton>
                </div>
                <div className={cls.signUpSection}>
                    <CIInput placeholder="Username" />
                    <CIInput placeholder="Password" type="password" />
                    <div className={cls.grid}>
                        <CIInput className={cls.email} placeholder="Email" sm />
                        <CIInput className={cls.age} placeholder="Age" xs />
                    </div>
                    <CIButton onClick={handleSign}>Sign Up</CIButton>
                    <CILabel className={cls.footerText}>
                        By Signing Up, you are agreeing to our
                    </CILabel>
                    <CILink className={cls.link} onClick={handleClick("/terms-conditions")}>Terms & Conditions</CILink>
                    <CILabel className={cls.pipe}>|</CILabel>
                    <CILink className={cls.link} onClick={handleClick("/privacy")}>Privacy Policy</CILink>
                </div>
                <div className={cls.resetSection}>
                    <CILabel>Forgot Password?</CILabel>
                    <CILabel>Username</CILabel>
                    <CIInput />
                    <div>
                        <CIButton>Send</CIButton>
                        <CIButton onClick={handleCancel}>Cancel</CIButton>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default LoginBoard;