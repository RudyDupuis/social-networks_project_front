CodeWatchtower est un projet de groupe sur la création d'un réseau social entre développeurs. Il a été développé en utilisant les technologies suivantes :

- **Front-end :** Next.js avec typescript.
- **Back-end :** Adonis.js avec typescript et PostgreeSQL pour la base de données.

## Design
[Lien vers le Figma](https://www.figma.com/design/RYRH0y2Cnjc57PuTtwNqE3/CodeWatchtower?node-id=0-1&t=lp2dYP46g1gOaPbN-1)

## Backend
[Installation](https://omniscient-slug-7f3.notion.site/Projet-SNP-BDD-Installation-cefb7ec7f1e34f02ad41995c64598088)
[Documentation ](https://omniscient-slug-7f3.notion.site/Projet-SNP-BDD-Installation-cefb7ec7f1e34f02ad41995c64598088)

## Caractéristiques
### Objectif

Le but de cette application est de créer un réseau social pour les développeurs. Il servira de plateforme de partage et de suivi des informations sur le développement.

### Utilisateurs

Les utilisateurs de l'application sont des développeurs.

### Fonctionnalités principales :

- Un système de compte avec authentification, comprenant une page de connexion et une page d'inscription
- Un système de flux avec des articles sur la page principale de l'application
- Un système de commentaires et de likes sur les articles de la page principale
- Les utilisateurs peuvent suivre d'autres comptes et voir leurs publications sur la page principale et sur la page de profil de l'utilisateur suivi
- Les utilisateurs peuvent créer, modifier ou supprimer un article qui leur appartient, avec un CRUD disponible sur la page principale

### Fonctionnalités secondaires :

- Les utilisateurs peuvent rechercher des articles par mots-clés, hashtags ou utilisateurs, avec une barre de recherche sur la page principale
- Les utilisateurs peuvent voir leur historique de publication et d'interaction avec d'autres utilisateurs sur la page de leur compte utilisateur
- Les utilisateurs peuvent signaler un contenu inapproprié ou un comportement inacceptable d'un autre utilisateur, avec un bouton de rapport sur les articles de la page principale
- Les utilisateurs peuvent recevoir des notifications lorsqu'un compte qu'ils suivent publie un nouvel article, et lorsqu'un compte qu'ils suivent interagit avec leur contenu
- Les utilisateurs peuvent modifier la photo de profil, l'e-mail, le mot de passe, le pseudo et choisir un mode sombre sur la page de leur compte utilisateur
- Les administrateurs peuvent voir la liste des contenus inappropriés sur la page d'administration
- Les administrateurs peuvent voir la liste des commentaires, des publications et des informations de chaque utilisateur sur une page d'administration de profil.

### Design

Le thème de l'application sera centré autour de l'univers du développement. Les couleurs, les icônes et le design seront cohérents avec ce thème.

### Contraintes

Le projet doit être hébergé gratuitement.

## Compte rendu des réunions

### 20/02/23

Nous avons tenu notre première réunion de projet. Nous avons commencé par nous présenter et discuter de nos objectifs et attentes pour ce projet. Ensuite nous avons discuté de l'organisation du projet.

Une idée proposée était de développer chaque partie du projet individuellement et de comparer les résultats pour choisir la meilleure version à intégrer au projet. Cependant, Allan a proposé une approche plus professionnelle en utilisant des tickets. Ce sujet reste à considérer.

Nous avons ensuite revu le cahier des charges et convenu de suivre dans un premier temps son contenu, tout en gardant la possibilité d'ajouter des fonctionnalités challengeantes si le projet se termine prématurément.

Concernant les technologies à utiliser, pour le front-end, nous avons décidé d'utiliser Next.js car il est simple à utiliser. Pour le style, nous hésitons encore entre Sass et Tailwind et avons décidé de mettre le choix de voter dans la section "vote".

Pour le back-end, nous avons discuté des frameworks disponibles, comme Express.js, Nest.js et Adonis.js, et nous avons convenu qu'un framework basé sur JavaScript serait plus pertinent car tout le monde est à l'aise avec JavaScript. Le choix est de voter. Nous avons finalement décidé d'utiliser TypeScript pour l'ensemble du projet.

### 24/02/23

Voici les points importants que nous avons traités.
Nous utiliserons PostgreSQL pour la base de données.
Les bonnes pratiques que nous suivrons pour ce projet sont :

- Faire de la documentation pour les routes qui composent :
◦ Le type de route (post, get, etc.)
◦ L'URL
◦ Les paramètres d'entrée
◦ Les paramètres de sortie
◦ La fonction de la route
◦ Les erreurs possibles
- Utiliser une convention de nommage.
• Commentateur sur le code.
• Utiliser l'anglais pour les variables et les commentaires.
• Éviter d'utiliser "else". Ne pas utiliser "if else".
• Effectuer des tests de couverture (secondaires).

### 02/03/23

Lors de la première réunion, plusieurs points ont été abordés. Nous avons d'abord parlé de la découpe de la maquette, qui se trouve dans un document PDF. Nous avons également constaté que les parties liées à l'API devaient encore être revues.

Nous avons ensuite pris la décision de commencer avec un répertoire par personne pour la création du site. Le développement étant assez court, nous pensons qu'il est intéressant que chaque personne réalise l'ensemble du développement. Ainsi, tous les projets seront visibles et les liens des dépôts Git seront accessibles dans la section "liens des projets".
