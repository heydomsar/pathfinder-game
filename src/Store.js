import { observable, action } from 'mobx';

class Store {

    @observable tileProps = {
        special: '',
        card: '',
        rotation: 0,
    };
    @observable row = [
        Object.assign({}, this.tileProps),
        Object.assign({}, this.tileProps),
        Object.assign({}, this.tileProps),
        Object.assign({}, this.tileProps),
        Object.assign({}, this.tileProps),
        Object.assign({}, this.tileProps),
        Object.assign({}, this.tileProps),
        Object.assign({}, this.tileProps),
    ];
    @observable gameArray = [
        JSON.parse(JSON.stringify(this.row)),
        JSON.parse(JSON.stringify(this.row)),
        JSON.parse(JSON.stringify(this.row)),
        JSON.parse(JSON.stringify(this.row)),
        JSON.parse(JSON.stringify(this.row)),
        JSON.parse(JSON.stringify(this.row)),
        JSON.parse(JSON.stringify(this.row)),
        JSON.parse(JSON.stringify(this.row)),
    ];

    @action initBoard = () => {
        this.gameArray[0][0].special = 'Start';
        this.gameArray[7][7].special = 'Finish';

        for(let keys = 1; keys <= 3; keys++) {
            const x = Math.floor(Math.random() * 6) + 1;
            const y = Math.floor(Math.random() * 6) + 1;
            if (this.gameArray[x][y].special !== '') {
                keys--;
                return;
            }
            this.gameArray[x][y].special = 'Key'
        }

        for(let bonus = 1; bonus <= 2; bonus++) {
            const x = Math.floor(Math.random() * 6) + 1;
            const y = Math.floor(Math.random() * 6) + 1;
            if (this.gameArray[x][y].special !== '') {
                bonus--;
                return;
            }
            this.gameArray[x][y].special = 'Bonus'
        }
    };
    
    @observable currentTile = Object.assign({}, this.tileProps);
    @observable wallet = 500;
    @observable wager = 100;
    @observable strikes = 0;

    @action deal = () => {
        if (this.strikes < 3) {
            const x = Math.floor(Math.random() * 5) + 1;
            const y = Math.floor(Math.random() * 4) + 1;
            switch(x) {
                case 1:
                default:
                    this.currentTile.card = 'straight';
                    break;
                case 2:
                    this.currentTile.card = 'corner';
                    break;
                case 3:
                    this.currentTile.card = 't';
                    break;
                case 4:
                    this.currentTile.card = '4-way';
                    break;
                case 5:
                    if (Math.floor(Math.random() * 4) + 1 > 3)  // Make strikes more rare
                    this.currentTile.card = 'strike';
                    this.strikes++
                    if (this.strikes === 3) {
                        console.log("Game Over!"); // TODO: End screen
                    }
                    break;
            }
    
            if (x < 5) {
                switch(y) {
                    case 1:
                    default:
                        this.currentTile.rotation = 0;
                        break;
                    case 2:
                        this.currentTile.rotation = 90;
                        break;
                    case 3:
                        this.currentTile.rotation = 180;
                        break;
                    case 4:
                        this.currentTile.rotation = 270;
                        break;
                }
            }    
        }
    }

    @action rotate = () => {
        this.currentTile.rotation += 90;
        if (this.currentTile.rotation > 270) {
            this.currentTile.rotation = 0;
        }
    }

    @action placeTile = (x, y) => {
        if (this.strikes < 3) {
            if (this.gameArray[x][y].special === 'Bonus' && this.strikes > 0) {
                this.strikes--;
            }
            this.gameArray[x][y] = Object.assign({}, this.currentTile);
        }
    }
}

export default new Store();