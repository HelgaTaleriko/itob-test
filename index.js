const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);

//import не работает через cdn поэтому пишу в одном файле

class Vitek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            intervalId: null,
            currentTemp: '',
            status: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.switchOn = this.switchOn.bind(this)
        this.stopProgram = this.stopProgram.bind(this)

    }

//получаем сколько воды надо налить
    handleChange(event) {
        const inputValue = event.target.value;
        const onlyDigitsAndDot = /^[\d.]*$/; // Регулярное выражение для проверки на цифры и точку

        if (onlyDigitsAndDot.test(inputValue)) {
            this.setState({value: inputValue});
        } else {
            const cleanedValue = inputValue.replace(/[^0-9.]/g, ''); // Удаление всех символов, кроме цифр и точки
            this.setState({value: cleanedValue});
        }
    }

//включаем чайник
    switchOn() {
        const {value, intervalId} = this.state;

        if (value === '' || parseFloat(value) === 0) {
            alert('Пустой чайник'); //если чайник пуст
        } else if (parseFloat(value) > 1) {
            alert('Вылилась вода'); // если объем больше 1
        } else if (parseFloat(value) > 0 && parseFloat(value) <= 1) {
            if (intervalId) { //если объем подходит, то идем вычислять температуру
                clearInterval(intervalId);
            }
            const volumeWater = value * 1000 // объем воды в мл
            const maxTemperature = 100

            const boilingTime = volumeWater / 100;// время закипания
            const temperature = maxTemperature / boilingTime //температура в момент времени

            let current = 0;

            const newIntervalId = setInterval(() => {
                // вывела html для удобства просмотра
                const currentTemp = temperature * current

                this.setState({currentTemp})
                console.log(currentTemp);
                current++;

                if (currentTemp === maxTemperature) {
                    clearInterval(newIntervalId);
                    const status = 'Вода закипела'

                    this.setState({status});
                }

            }, 1000);

            this.setState({intervalId: newIntervalId});
        }
    };

    stopProgram = () => {
        const {intervalId} = this.state;

        if (intervalId) {
            clearInterval(intervalId);
            this.setState({intervalId: null});
            const status = 'Остановка программы'
            this.setState({status});

        }
    };

    render() {
        return (
            <div className='wrapper-vitek'>
                <form>
                    <label>
                        Объем воды
                    </label>

                    <input type="text"
                           value={this.state.value}
                           onChange={this.handleChange}
                    />
                </form>
                <div className='buttons'>
                    <button onClick={this.switchOn}>Включить</button>
                    <button onClick={this.stopProgram}>Выключить</button>
                </div>
                <div className='temp'>
                    <h3> Датчик температуры °C</h3>
                    <p>
                        {this.state.currentTemp}
                    </p>
                    <p>
                        {this.state.status}
                    </p>


                </div>

            </div>);
    }
}


root.render(
    <div className='container'>
        <h1>Поставь чайник</h1>
        <div className="wrapper-main">
            <div className='wrapper-img'>
                <img src="style/img/1.webp"/>
            </div>

            <Vitek/>
        </div>
    </div>
);