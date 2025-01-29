<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les réponses du formulaire
    $q1 = $_POST["q1"];
    $q2 = $_POST["q2"];
    $q3 = $_POST["q3"];

    // Calculer le score
    $score = 0;
if ($q1 == "a") {
        $score++;
    }
    

    if ($q2 == "c") {
        $score++;
    }

    if ($q3 == "b") {
        $score++;
    }

    // Afficher les résultats
    echo "<h2>Résultats du quiz</h2>";
    echo "<p>Votre score est : $score / 3</p>";
}
?>
