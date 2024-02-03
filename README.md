# **BroumBroum** _- Projet Concepteur Développeur d'Applications_

## Contexte du projet

**_Dans le cadre de notre formation, nous devons concevoir et développer un site de vente de véhicules en utilisant les diagrammes UML et les Design Pattern, il nous est présenté la situation fictive suivante :_**

Un client souhaite un site où les utilisateurs peuvent commander un véhicule afin qu'il parte en production dans les usines correspondantes.

L'utilisateur pourra donc :

-   Naviguer sur le site et choisir un véhicule.
-   Personnaliser le véhicule.
-   Commander le véhicule.
-   Suivre l'avancement de sa/ses commandes.
-   Être notifié à chaque changement d'étape de la commande.

___
## Design pattern utilisés
<a href="https://github.com/yoanbor/Brief-Site-d-achat/blob/dev/docs/uml/Class%20diagram.png">Diagramme de classe</a>

- **Fabrique (Factory)**

L'utilisation d'une fabrique pour l'interface *"Vehicule"* nous permet d'extraire le processus de création de l'objet *"Car"* héritant de cette interface et de l'utiliser dans l'implementation concrète *"CarFactory"* (héritant de l'interface *"VehiculeFactory"*) afin d'y effectuer différents traitement avant la création. <br>
Cette interface *"VehiculeFactory"* permet également de prévenir une éventuelle refactorisation lourde si le client souhaite à l'avenir vendre d'autres types de véhicule comme par exemple des motos ou engins de chantier dont les objets serait différents de ceux d'une voiture.

- **Singleton**

Puisque nous avons fait le choix d'utiliser une fabrique, un autre design pattern est alors automatiquement utilisé, le *Singleton*.
Ce singleton, que l'on retrouve dans la classe *"CarFactory"*,  nous permet de s'assurer que cette classe n'auras qu'une seule instanciation possible lors de l'exécution du code. <br>
La classe contient sa propre instance (en attribut privé) et son constructeur est également privé. Le seul moyen d'obtenir l'instance de cette classe est via une méthode *"getInstance()"* qui, si nécessaire, instancie la classe avant de la retourner.

- **État (State)**

l’État est un design pattern utilisé autour de la classe *"Reservation"*, cette classe possède un attribut *"state"* qui va contenir une implémentation concrète de l'interface *"State*". <br>
L'utilisation de l'implementation de *"State"* au sein de la classe *"Reservation"* va nous permettre de modifier le comportement de sa méthode *"notify()"*, responsable de l'envois de notification vers les clients de la modification d'état de leur commande, dont le comportement doit être différent selon que la notification concerne un avancement normal ou un retard.

## Critères de performance

Un Readme qui explique le contexte du projet et une explication du choix des Design Pattern utilisés.

### _Technologies utilisées_

-   Collaboration sur le projet:

![FIGMA](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![TRELLO](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)
![GIT](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

-   Environnement virtuel pour le déploiement:

![DOCKER](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)

-   Frameworks et bibliothèques du code :

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NODEJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![EXPRESSJS](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)

-   Système de gestion de base de données :

![POSTGRESQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## **Livrés**

Diagrammes ULM :

-   Diagramme de cas d'utilisation
-   Diagramme de classes

Merise :

-   Dictionnaire de données
-   MCD
-   MLD
-   MPD

Maquette FIGMA prototypée

---

## **Authors**

👤 **_Sarah Katz_**

<a href="https://github.com/Sarah-Katz"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></img></a>
<a href="https://www.linkedin.com/in/sarah-katz-dev/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img></a>

👤 **_Yoan Bor_**

<a href="https://github.com/yoanbor"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></img></a>
<a href="www.linkedin.com/in/yoan-bor"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img></a>
