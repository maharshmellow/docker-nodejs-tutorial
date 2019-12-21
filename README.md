# Docker Setup (Local and DigitalOcean)

## Run locally
1) `cd` to the root directory of this repo
2) Build using `docker build -t maharshmellow/docker_nodejs_tutorial .`
3) Run using `docker run -p 49160:8080 -d maharshmellow/docker_nodejs_tutorial`
3) `docker ps` to get container name and status
4) Open `localhost:49160`
5) `docker stop <CONTAINER_NAME>` 

## Run on DigitalOcean
1) `docker push maharshmellow/docker_nodejs_tutorial`
2) Create a docker droplet from the marketplace
3) Log into the droplet
4) `docker system prune -a`
5) `docker pull maharshmellow/docker_nodejs_tutorial`
6) `docker run --name docker_nodejs_tutorial -p 80:8080 -d maharshmellow/docker_nodejs_tutorial`
7) Visit the Public URL
8) `docker stop docker_nodejs_tutorial`