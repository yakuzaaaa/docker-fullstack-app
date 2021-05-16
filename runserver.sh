docker build . -t nilarnab/docker-node

echo 'Built image nilarnab/docker-node'
echo 'Running nilarnab/docker-node image detached inside container nilarnab-node-server'

docker run -p 7001:7001 --name nilarnab-node-server -d nilarnab/docker-node