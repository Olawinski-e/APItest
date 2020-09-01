# BasicApp

Bienvenue sur le test technique BasicApp. Cette application n'a absolument aucune utilité. Et bon courage.

## Test technique

Voici la liste des tâches à effectuer.

### Ajout de l'outil "Date & heure"

Dans la même logique que l'outil "Mon IP", crée une nouvelle route "/tools/show-datetime" pour l'outil "Date & heure", qui va chercher la date et l'heure sur l'api "jsontest.com" via le service Angular déjà existant. De plus, la date doit être formatée comme suit, avec le timezone de Tokyo : "Il est 14h59 et nous somme le 8 octobre 2017".

### Poster un article

En t'inspirant de la structure actuelle du projet, crée une nouvelle route "/post/new" permettant, via un formulaire composé de 2 champs, de poster un nouvel article sur l'API "jsonplaceholder.typicode.com". Le formulaire doit suivre le Material Design et avec les contraintes de validations suivantes :

- Titre : input text, 3 à 60 caractères
- Contenue : textarea, 30 à 600 caractères

Le formulaire doit être posté à l'API avec le "userId" numéro "3".  Après l'envoi du formulaire, un loader doit apparaître. Et enfin, afficher un message de félicitation avec le numéro de l'article ("id").

### Rendre l'application "lazy loading"

Découpe l'application 3 modules :

- Maintenir le module principal, avec juste la page "Home"
- Un module pour les pages commençant par "/tools"
- Et un autre pour la page par "/post/new"

Les 2 nouveaux modules doivent profiter du "lazy loading" d'Angular.

### Mise en place d'un test 2e2

Met en place un test 2e2 (end to end) sur la page "/tools/show-ip", qui permet de tester l'affichage de l'adresse IP (utilise une simple Regex).
