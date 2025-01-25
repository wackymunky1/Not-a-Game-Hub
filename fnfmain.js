<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FNF</title>
    <style>
        body {
            margin: 0;
            background: linear-gradient(90deg, #1E3C72, #2A5298);
            color: white;
            font-family: 'Press Start 2P', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
            text-align: center;
        }

        .menu-item {
            margin: 15px 0;
            padding: 10px 20px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: transform 0.2s, background 0.3s;
        }

        .menu-item:hover {
            transform: scale(1.1);
            background: rgba(0, 0, 0, 0.8);
        }

        .hidden {
            display: none;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</head>
<body>
    <h1>FNF Main Menu</h1>
    <div class="menu-item" onclick="startGame()">Start Game</div>
    <div class="menu-item" onclick="chartEditor()">Chart Editor</div>
    <div class="menu-item" onclick="showCredits()">Credits</div>

    <div id="credits" class="hidden">
        <h2>Credits</h2>
        <p>Developed by Wackymunky1</p>
        <p>Graphics by Internet</p>
        <div class="menu-item" onclick="goBack()">Back</div>
    </div>

    <script>
        const credits = document.getElementById('credits');

        function startGame() {
            window.location.href = 'fnf_rhythm_game.html';
        }

        function chartEditor() {
            alert("Chart Editor functionality coming soon!"); // Replace this with chart editor navigation.
        }

        function showCredits() {
            credits.classList.remove('hidden');
        }

        function goBack() {
            credits.classList.add('hidden');
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === '7') {
                chartEditor();
            }
        });
    </script>
</body>
</html>
