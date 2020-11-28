const FLAG = {
	O: 0,
	X: 1
};
class TicTacToe {
	constructor(domClass){
		this.domClass = domClass;
		this.tiles = [];
		this.finish = false;
		this.flag = FLAG.X;
		this.onturn = () => {};
	}
	getCurrentValue(){
		if(this.flag == FLAG.O)
			return 'O';
		return 'X';
	}
	initBoard(){
		let tiles = document.getElementsByClassName(this.domClass);
		if(!tiles.length){
			return alert('No Valid Tile Elements!');
		}
		for(let idx = 0; idx < 9; idx++){
			let tile = tiles.item(idx);
			tile.setAttribute('key', idx);
			tile.innerHTML = '&nbsp;';
			tile.disabled = false;
			tile.onclick = this.markTile.bind(this, idx);
			this.tiles.push(tile);
		}
	}
	markTile(index){
		if(this.tiles[index].disabled || this.finish || this.isAllMark()) return;
		this.tiles[index].innerHTML = this.getCurrentValue();
		this.tiles[index].disabled = true;
		this.tiles[index].setAttribute('flag', this.flag);
		this.flag = !this.flag ? FLAG.X : FLAG.O;
		this.checkBoard();
	}
	isAllMark(){
		for(let idx in this.tiles)
			if(!this.tiles[idx].disabled) return false;
		return true;
	}
	checkBoard(){
		const message = ' wins the round! Press f5 to play again.';
		const winningPattern = [
			[0, 1, 2], 
			[3, 4, 5], 
			[6, 7, 8], 
			
			[0, 4, 8],
			[1, 4, 7],
			[2, 4, 6],
			
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
		];
		for(let idx in winningPattern){
			let winningTile = {
				[FLAG.X] : [],
				[FLAG.O] : [],
			};
			let match = {
				[FLAG.X] : 0,
				[FLAG.O] : 0,
			};
			for(let ti in winningPattern[idx]){
				const i = winningPattern[idx][ti];
				if(this.tiles[i].disabled){
					let flag = this.tiles[i].getAttribute('flag') == 1 ? FLAG.X : FLAG.O;
					match[flag]++;
					winningTile[flag].push(this.tiles[i]);
				}
			}
			if(match[FLAG.X] >= 3){
				winningTile[FLAG.X].forEach((tile) => {
					tile.style.background = '#4CAF50';
				});							
				return alert('X' + message);
			}
			if(match[FLAG.O] >= 3){
				winningTile[FLAG.O].forEach((tile) => {
					tile.style.background = '#4CAF50';
				});						
				return alert('O' + message);
			}											
		}
		this.onturn(this.flag);
		if(this.isAllMark())
			alert('Press f5 to play again. Sorry no winners!');
	}
	onCurrentTurn(func){
		typeof func == 'function' && (this.onturn = func);
	}
}

let tictac = new TicTacToe('ttt-tile');
tictac.initBoard();
tictac.onCurrentTurn((flag) => {
	if(flag == FLAG.X){
		document.getElementById('start-x').style.background = '#4CAF50';
		document.getElementById('start-o').style.background = '#FFFFFF';
	} else {
		document.getElementById('start-o').style.background = '#4CAF50';
		document.getElementById('start-x').style.background = '#FFFFFF';
	}
});