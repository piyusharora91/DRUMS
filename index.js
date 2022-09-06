const App = () => {

    const [pad_name, setPadName] = React.useState('');
    const [power, setPower] = React.useState(true);
    const [bank, setBank] = React.useState(false);


    const bankOne = [
        {
            keyCode: 81,
            keyTrigger: 'Q',
            id: 'Heater-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Heater-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Heater-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Heater-4',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Clap',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            keyCode: 90,
            keyTrigger: 'Z',
            id: "Kick-n'-Hat",
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
    ];

    const bankTwo = [
        {
            keyCode: 81,
            keyTrigger: 'Q',
            id: 'Chord-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
        },
        {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Chord-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
        },
        {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Chord-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
        },
        {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Shaker',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
        },
        {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
        },
        {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
        },
        {
            keyCode: 90,
            keyTrigger: 'Z',
            id: 'Punchy-Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
        },
        {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Side-Stick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
        },
        {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Snare',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
        }
    ];

    const setupDrumPads = (bank_received) => {
        const elements = [];
        bank_received.forEach(item => {
            elements.push(
                <div className="drum-pad" onClick={audioPlay} id={item.id} key={item.id}>
                    <audio className="clip" id={item.keyTrigger} src={item.url}></audio>
                    {item.keyTrigger}
                </div>
            );
        });
        return elements;
    }

    const audioPlay = (e) => {
        if (power) {
            let audio = e.target.children[0];
            audio.currentTime = 0;
            audio.play();
            setPadName(e.target.id);
        }
    }

    const handleSwitch = (e) => {
        let element;
        if (e.target.classList.contains('sliderButton')) {
            element = e.target;
        }
        else
            element = e.target.children[0];
        element.classList.toggle("powerShift");
    }

    const togglePower = (e) => {
        if (!power) {
            setPower(true);
            handleSwitch(e);
        } else {
            setPower(false);
            setBank(false);
            setPadName('');
            document.querySelectorAll('.sliderButton').forEach(button =>
                (button.parentElement.id === 'bank') ?
                    button.classList.remove('powerShift') :
                    button.classList.toggle('powerShift')
            );
        }
    }

    const toggleBank = (e) => {
        if (power) {
            if (bank) {
                setBank(false);
            } else {
                setBank(true);
            }
            handleSwitch(e);
            setPadName('');
        }
    }

    const toggleNav = () => {
        document.querySelector('#contact-container').classList.toggle('contact-container-active');
    }


    return (
        <div className="App">
            <nav className="contact-container" id="contact-container">
                <div onClick={toggleNav}>
                    <a title="Click To Open" target="_blank">
                        <img src="https://avatars.githubusercontent.com/u/41067454?v=4" alt="My Profile Picture"
                            id="profile-pic" />
                    </a>
                </div>
                <div>
                    <a className="nav-links" href="https://piyush-arora.netlify.app/" title="Piyush Arora - Portfolio" target="_blank">
                        <i className="fa-solid fa-link social-logo" id="portfolio-link"></i>
                    </a>
                </div>
                <div>
                    <a className="nav-links" target="_blank" href="https://www.upwork.com/freelancers/~01b6360fd49b24f50d" title="Upwork Profile">
                        <svg enableBackground="new 0 0 2500 2500" viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg"
                            className="social-logo" id="upwork-logo">
                            <path
                                d="m2315.4 0h-2130.7c-102 0-184.7 80.2-184.7 179.1v2141.7c0 99 82.7 179.2 184.7 179.2h2130.7c102 0 184.6-80.3 184.6-179.2v-2141.7c0-98.9-82.6-179.1-184.6-179.1z"
                                fill="#fff" />
                            <path
                                d="m1834.6 1453.7c-98.4 0-190.5-41.7-274.3-109.6l20.4-95.8.9-3.5c18.2-102 75.8-273.3 253-273.3 132.9 0 241 108.3 241 241.3-.4 132.6-108.5 240.9-241 240.9zm0-726.7c-226.4 0-401.9 147.3-473.2 389.5-109-163.7-191.4-360.2-239.7-525.7h-243.6v634.8c0 125.1-101.9 227.1-226.9 227.1s-226.8-102-226.8-227.1v-634.8h-243.7v634.8c-.9 260 210.5 473.4 470.1 473.4s471-213.4 471-473.4v-106.5c47.4 98.9 105.4 198.7 175.9 287.5l-149.3 702.7h249.5l108.1-509.7c94.8 60.8 203.8 98.9 328.8 98.9 267.2 0 484.7-219.2 484.7-486.7-.2-267-217.7-484.8-484.9-484.8z"
                                fill="#451d86" />
                        </svg>
                    </a>
                </div>
                <div>
                    <a target="_blank" className="nav-links" href="https://www.linkedin.com/in/piyush-arora2212/"
                        title="LinkedIn Profile">
                        <i className="fa-brands fa-linkedin social-logo"></i>
                    </a>
                </div>
                <div>
                    <a target="_blank" className="nav-links" href="https://github.com/piyusharora91" title="Github Profile">
                        <i className="fa-brands fa-github social-logo"></i>
                    </a>
                </div>
            </nav>

            <div className="container" id="drum-machine">
                <div className='pad-bank'>
                    {bank ? setupDrumPads(bankTwo) : setupDrumPads(bankOne)}
                </div>

                <div className="controls">
                    <div className="power_control" >
                        <h1 className='controls_title'>Power</h1>
                        <div className='switch' id="power" onClick={togglePower}>
                            <p className="sliderButton powerShift">{power ? 'ON' : 'OFF'}</p>
                        </div>
                    </div>

                    <div className="bank_control" >
                        <h1 className='controls_title'>Bank</h1>
                        <div className='switch' id="bank" onClick={toggleBank}>
                            <p className="sliderButton">{bank ? 'ON' : 'OFF'}</p>
                        </div>
                    </div>

                    <div className="values">
                        <h1 id='display'>{pad_name}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);