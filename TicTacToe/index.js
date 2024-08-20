const board = document.getElementById('board');
        let currentPlayer = 'X';

        board.addEventListener('click', function(event) {
            if (event.target.tagName === 'TD' && event.target.textContent === '') {
                event.target.textContent = currentPlayer;
                if (checkWin()) {
                    alert(currentPlayer + ' venceu!');
                    resetBoard();
                } else if (checkDraw()) {
                    alert('Empate!');
                    resetBoard();
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });

        function checkWin() {
            const cells = board.getElementsByTagName('td');
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
                [0, 4, 8], [2, 4, 6]             // Diagonais
            ];
            return winPatterns.some(pattern => {
                return pattern.every(index => {
                    return cells[index].textContent === currentPlayer;
                });
            });
        }

        function checkDraw() {
            const cells = Array.from(board.getElementsByTagName('td'));
            return cells.every(cell => cell.textContent !== '');
        }

        function resetBoard() {
            const cells = board.getElementsByTagName('td');
            Array.from(cells).forEach(cell => cell.textContent = '');
            currentPlayer = 'X';
        }