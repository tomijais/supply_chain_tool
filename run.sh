#!/bin/bash

# Build the Docker image
docker build -t supply-chain-dashboard .

# Stop and remove any existing container with the same name
docker rm -f supply-chain-app || true

# Run the Docker container
docker run -d -p 3000:3000 --name supply-chain-app supply-chain-dashboard

# Display logs (optional)
docker logs -f supply-chain-app