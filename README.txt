GEAR CHECK - online version with accounts (GitHub Pages + Firebase, both free)

A) PUT THE APP ONLINE
1. github.com > New repository (e.g. gear-check), set it to Public, create it.
2. Add file > Upload files: upload ALL files from this folder, then Commit changes.
3. Settings > Pages > Source: Deploy from a branch > main, folder / (root) > Save.
   Your app is live after about a minute at https://YOUR-USERNAME.github.io/gear-check/

B) CREATE THE ONLINE DATABASE (Firebase, free Spark plan, no credit card)
1. Go to console.firebase.google.com > Add project (name it e.g. gear-check, analytics off).
2. Build > Authentication > Get started > Sign-in method > Email/Password > Enable > Save.
   (The app turns a username into a hidden address like name@gearcheck.app. There is no
   password reset, so keep your password safe.)
3. Build > Firestore Database > Create database > pick a region (e.g. eur3) > start in production mode.
4. In Firestore open the Rules tab, replace everything with the text below, then Publish:

   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }

5. Project settings (gear icon) > Your apps > Web app (</>) > register it > copy the config values.
6. Open config.js in your GitHub repo (pencil icon), paste apiKey, authDomain, projectId and appId, commit.
   These keys are not secret. The rules above make sure everybody can only read their own data.

C) USE IT
Open the site, tap the person icon next to Edit, choose a username and password and tap Create account.
Your current lists are uploaded. On another device, log in and the data syncs.
The newest change wins, so avoid editing on two devices at the exact same moment.
