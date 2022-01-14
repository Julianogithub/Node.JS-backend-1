/*
// Onde configurar o postgresSQL SITE ABAIXO

https://www.youtube.com/watch?v=hlbdT-UH66E
https://www.postgresql.r2schools.com/how-to-install-postgresql-13-on-debian-10-x-step-by-step/

┌──(legendario㉿kali)-[~/posSchools]
└─$ sudo apt-get update           
                                                                                               
┌──(legendario㉿kali)-[~/posSchools]
└─$ sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/souces.list.d/pgdg.list'
                                                                                         
┌──(legendario㉿kali)-[~/posSchools]
└─$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
                                                                                        
┌──(legendario㉿kali)-[~/posSchools]
└─$ sudo apt-get update
                                                                                               
┌──(legendario㉿kali)-[~/posSchools]
└─$ sudo apt-get -y install postgresql-13
                                                                                                
┌──(legendario㉿kali)-[~/posSchools]
└─$ systemctl status postgresql
                                                                                                
┌──(legendario㉿kali)-[~/posSchools]
└─$ systemctl start postgresql                                                              3 ⨯
                                                                                                
┌──(legendario㉿kali)-[~/posSchools]
└─$ systemctl status postgresql
● postgresql.service - PostgreSQL RDBMS
     Loaded: loaded (/lib/systemd/system/postgresql.service; disabled; vendor preset: disabled)
     Active: active (exited) since Mon 2021-09-06 16:38:03 -03; 3s ago
    Process: 3758 ExecStart=/bin/true (code=exited, status=0/SUCCESS)
   Main PID: 3758 (code=exited, status=0/SUCCESS)
        CPU: 1ms
  
        

//Para logar no postgresql * sudo su - postgres * 

┌──(legendario㉿kali)-[~/posSchools]
└─$ sudo su - postgres

// Comando No Windows para entar no postgreSQL
C:\Program Files\PostgreSQL\9.6\bin> psql -U postgres

postgres@kali:~$ psql
psql (13.2 (Debian 13.2-1), server 13.4 (Debian 13.4-3))
Type "help" for help.
        ^
postgres=# select version();

postgres@kali:~$ psql

postgres=# create database knowledge_final;
CREATE DATABASE



postgres=# \c knowledge;
psql (13.2 (Debian 13.2-1), server 13.4 (Debian 13.4-3))
You are now connected to database "knowledge" as user "postgres".

// Mostrar tabelas criadas no comandos abaixo.
knowledge=#\dt

knowledge=# \l
                                  List of databases
   Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
-----------+----------+----------+-------------+-------------+-----------------------
 knowledge | postgres | UTF8     | pt_BR.UTF-8 | pt_BR.UTF-8 | 
 postgres  | postgres | UTF8     | pt_BR.UTF-8 | pt_BR.UTF-8 | 
 template0 | postgres | UTF8     | pt_BR.UTF-8 | pt_BR.UTF-8 | =c/postgres          +
           |          |          |             |             | postgres=CTc/postgres
 template1 | postgres | UTF8     | pt_BR.UTF-8 | pt_BR.UTF-8 | =c/postgres          +
           |          |          |             |             | postgres=CTc/postgres


// Configuração do usuario e senha do banco knowledge_final  
knowledge_final=# CREATE USER juliano WITH PASSWORD '123456';
CREATE ROLE
knowledge_final=# GRANT ALL PRIVILEGES ON DATABASE "knowledge_final" TO juliano,


*/