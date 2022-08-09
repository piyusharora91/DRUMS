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
            setPower(true)
        } else {
            setPower(false);
            setBank(false);
            setPadName('');
            const element = e.target.children[0];
            element.classList.remove("powerShift");
        }
        handleSwitch(e);
    }

    const toggleBank = (e) => {
        if (bank) {
            setBank(false);
        } else {
            setBank(true);
        }
        handleSwitch(e);
        setPadName('');
    }


    return (
        <div className="App">
            <div className="container" id="drum-machine">
                <div className='pad-bank'>
                    {bank ? setupDrumPads(bankTwo) : setupDrumPads(bankOne)}
                </div>

                <div className="controls">
                    <div className="power_control" >
                        <h1 className='controls_title'>Power</h1>
                        <div className='switch' onClick={togglePower}>
                            <p className="sliderButton">{power ? 'ON' : 'OFF'}</p>
                        </div>
                    </div>

                    <div className="values">
                        <h1 id='display'>{pad_name}</h1>
                    </div>

                    <div className="bank_control" >
                        <h1 className='controls_title'>Bank</h1>
                        <div className='switch' onClick={toggleBank}>
                            <p className="sliderButton">{bank ? 'ON' : 'OFF'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);