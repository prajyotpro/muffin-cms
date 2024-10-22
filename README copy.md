# Node Application
Lightweight API service development boilerplate build over express.js

### Documentation
[Documentation](Documentation.md)


### Content
  - express.js
  - TypeScript

### Installation
  - clone git repository
  - npm install
  
### Execution
- production 
-- npm start OR pm2
- development
-- npm run dev

### The Deployment
curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
node -v


ssh-keygen -t rsa -b 4096


git clone git@github.com:prajyotpro/thebodyshrine.git
cd thebodyshrine
npm i
npm i ts-node -g

npm install forever -g
forever start -v -c ts-node app/index.ts


sudo apt install nginx
sudo ufw app list
sudo ufw allow 'Nginx HTTP'

systemctl status nginx

sudo nano /etc/nginx/sites-available/thebodyshrine.com

```
server {

   server_name thebodyshrine.com www.thebodyshrine.com;

   location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

sudo ln -s /etc/nginx/sites-available/thebodyshrine.com /etc/nginx/sites-enabled/

sudo nginx -t
sudo systemctl restart nginx