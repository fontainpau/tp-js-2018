# tp-js-2018

TP SERVEUR CLIENT :
AXELLE ESCAILLAS, CAMILIA ABRIKH, PAUL FONTAINE

Pour lancer le projet :

-Ouvrir Docker (ici dans le cas d'une version terminal de docker):
  "Bash --login '/Applications/Docker/Docker Quickstart Terminal.app/Contents/Resources/Scripts/start.sh'"

- Lancer un Docker pour la base de donnée (MongoDB)
  "docker run -p 27017:27017 mongo"

- Lancer les serverless :
  "yarn run start"

- Lancer le main qui correspond à un super-héros :
  "node main.js"


Pour visionner le nombre de licornes et de poneys, on peut utiliser un outil tel que Robot3T en se connectant à la base.

On a utilisé une API externe (météo), pour indiquer la température dans chaque ville visité par le super héro.
