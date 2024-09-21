#!/bin/bash
sudo certbot -d *.hurracloud.io --manual --preferred-challenges dns --text --agree-tos --email admin@hurracloud.io --expand --renew-by-default certonly
sudo cp -LR /etc/letsencrypt/live/hurracloud.io/ ./
sudo chown -R $USER:$USER ./hurracloud.io
