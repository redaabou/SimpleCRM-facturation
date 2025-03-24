# SimpleCRM - Application de Facturation



## 📖 Contexte du Projet

La société **SimpleCRM** a exprimé le besoin de développer une **application web de création de factures** afin de **simplifier et automatiser** le processus de facturation des entreprises et des indépendants.

L'objectif est de concevoir une application **moderne, dynamique, responsive et intuitive** basée sur la technologie **ReactJS**. Elle doit permettre la **gestion des clients, des articles et des factures**.

---

## 🚀 Fonctionnalités de l'Application

### 📌 **Pages principales**

- **Home** : Page d'accueil de l'application.
 ![Home Page](/public/crm_home.png)

- **Ajouter Facture** : Interface pour créer une nouvelle facture.
  ![Ajouter Facture](/public/crm_add.png)

- **Détails Facture** : Page affichant les détails d'une facture spécifique.
    ![Détails Facture](/public/crm.details.png)

### 🏗️ **Components et Fonctionnalités**

1. **App Component** : Point d'entrée principal, il inclut les pages principales.
2. **CreerFacture** : Interface pour créer une facture.
   - **AjouterDetailsFacture** : Formulaire pour entrer les détails du client et la date de facturation.
   - **ArticleList** : Liste des articles ajoutés à la facture.
3. **FactureList** : Liste des factures créées avec les informations suivantes :
   - ID facture
   - Nom du client
   - Montant HT / TVA / TTC
   - Bouton pour afficher les détails de la facture (via un **modal**).
4. **Article** : Un seul article affiché avec :
   - Nom du produit
   - Quantité
   - Prix unitaire (généré depuis la table des produits)
   - Remise (générée depuis la table des remises)
   - Montant calculé automatiquement.
5. **DetailsFacture** : Liste des articles ajoutés à une facture.
6. **AjouterClient** : Formulaire pour ajouter un client (Nom, Adresse, Téléphone, Email).

---

## 🛠️ Technologies Utilisées

- **Frontend** : React v16.5.2 (Class Components, Lifecycle Methods)
- **UI Design** : Figma
- **Configuration Manuelle** : Babel et Webpack (sans `create-react-app` ni `vite`)
- **Sauvegarde des Données** : `localStorage` pour stocker les factures et les clients
- **Gestion des États** : Context API (Bonus)
- **Langages** : HTML5, CSS3, JavaScript (ES6+)

---





---

## 💻 Installation

1. **Cloner le projet** :

   ```bash
   git clone https://github.com/your-username/simplecrm.git
   cd simplecrm
   ```

2. **Installer les dépendances** :

   ```bash
   npm install
   ```

3. **Lancer l'application** :

   ```bash
   npm start
   ```

4. Accéder à l'application : `http://localhost:3000`

---

## 🎉 Contribution

Les contributions sont les bienvenues !

- Forkez le repo
- Créez une branche (`feature/amélioration`)
- Soumettez une PR

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier **LICENSE** pour plus de détails.

---

## 📬 Contact

Pour toute question, n'hésitez pas à me contacter :

- **Email** : [aboulouafareda@gmail.com]
- **LinkedIn** : [Reda Aboulouafa](www.linkedin.com/in/reda-aboulouafa-993a11220)


