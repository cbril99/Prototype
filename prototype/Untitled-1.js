$error_message = "";
// $succes_message = "";
$existing_recipes = ["Chicken soup", "Easy hot cacao", "Glutenfree Lasagna", "Pasta bolognaise", "Hot pot pie"];
$existing_users = ["Naomi"];

function returnNewRecipe();
    $title = "";
    $publisher = "";
    $text = "";
    $ingredients = "";
    $prepare_time = "";
    global $error_message;
    // global $succes_message;
    global $existing_recipes;
    global $existing_users;

    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        $title .= $_POST["recipe"];
        $publisher .= $_POST["publisher"];
        $text .= $_POST["text"];
        $ingredients .= $_POST["ingredients"];
        $prepare_time .= $_POST["time"];
    }