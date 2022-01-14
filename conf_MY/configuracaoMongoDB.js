/*
// Onde configurar o postgresSQL SITE ABAIXO

https://medium.com/cyber4people/setup-mongodb-in-kali-linux-3ab86731e3ec

┌──(legendario㉿kali)-[~]
└─$ sudo apt-get install gnupg   

┌──(legendario㉿kali)-[~]
└─$ https://medium.com/cyber4people/setup-mongodb-in-kali-linux-3ab86731e3ec 

┌──(legendario㉿kali)-[~]
└─$ echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.2 
    main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list  

┌──(legendario㉿kali)-[~]
└─$ sudo apt-get update

┌──(legendario㉿kali)-[~]
└─$ sudo apt-get install -y mongodb-org 

┌──(legendario㉿kali)-[~]
└─$ sudo apt-get install -y mongodb-org=4.2.3 mongodb-org-server=4.2.3 
    mongodb-org-shell=4.2.3 mongodb-org-mongos=4.2.3 mongodb-org-tools=4.2.3 

┌──(legendario㉿kali)-[~]
└─$ sudo systemctl start mongod 

┌──(legendario㉿kali)-[~]
└─$ sudo systemctl status mongod

┌──(legendario㉿kali)-[~]
└─$ sudo systemctl stop mongod

┌──(legendario㉿kali)-[~]
└─$ sudo systemctl restart mongod

┌──(legendario㉿kali)-[~]
└─$ mongo


*/