 const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        const box = 20;
        let score = 0;
        let time = 0;
        let interval;

        let snake = [{ x: box * 5, y: box * 5 }];
        let food = {
            x: Math.floor(Math.random() * (canvas.width / box)) * box,
            y: Math.floor(Math.random() * (canvas.height / box)) * box,
        };

        document.addEventListener("keydown", direction);
        let d;

        function direction(event) {
            if (event.keyCode == 37 && d !== "RIGHT") {
                d = "LEFT";
            } else if (event.keyCode == 38 && d !== "DOWN") {
                d = "UP";
            } else if (event.keyCode == 39 && d !== "LEFT") {
                d = "RIGHT";
            } else if (event.keyCode == 40 && d !== "UP") {
                d = "DOWN";
            }
        }

        function collision(head, array) {
            for (let i = 0; i < array.length; i++) {
                if (head.x === array[i].x && head.y === array[i].y) {
                    return true;
                }
            }
            return false;
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Desenhar a cobra
            for (let i = 0; i < snake.length; i++) {
                ctx.fillStyle = (i === 0) ? "green" : "lightgreen";
                ctx.fillRect(snake[i].x, snake[i].y, box, box);
            }

            // Desenhar a comida
            ctx.fillStyle = "brown";
            ctx.beginPath();
            ctx.moveTo(food.x + box / 2, food.y);
            ctx.lineTo(food.x, food.y + box);
            ctx.lineTo(food.x + box, food.y + box);
            ctx.closePath();
            ctx.fill();

            // Movimento da cobra
            let snakeX = snake[0].x;
            let snakeY = snake[0].y;

            if (d === "LEFT") snakeX -= box;
            if (d === "UP") snakeY -= box;
            if (d === "RIGHT") snakeX += box;
            if (d === "DOWN") snakeY += box;

            if (snakeX === food.x && snakeY === food.y) {
                score++;
                document.getElementById("score").innerText = score;
                food = {
                    x: Math.floor(Math.random() * (canvas.width / box)) * box,
                    y: Math.floor(Math.random() * (canvas.height / box)) * box,
                };
            } else {
                snake.pop();
            }

            const newHead = { x: snakeX, y: snakeY };

            if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
                clearInterval(interval);
                alert('Game Over!');
                return;
            }

            snake.unshift(newHead);
        }

        function startTimer() {
            interval = setInterval(draw, 100);
            setInterval(() => {
                time++;
                document.getElementById("time").innerText = time;
            }, 1000);
        }

        startTimer();