cd /var/projects/epic7-short-url/
sudo git fetch
sudo git reset --hard HEAD
sudo git merge '@{u}'

sudo docker stop epic7-short-url
sudo docker rm epic7-short-url
sudo docker rmi -f epic7-short-url

sudo docker build -t epic7-short-url .

cd /var/projects/epic7-short-url/docker/
sudo docker-compose up -d
