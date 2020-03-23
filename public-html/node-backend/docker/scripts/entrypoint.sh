#!/bin/sh
# set -e

set -o errexit
set -o nounset
set -o pipefail

apk add --no-cache curl && cd /tmp && \
curl -#L https://github.com/tj/node-prune/releases/download/v1.0.1/node-prune_1.0.1_linux_amd64.tar.gz | tar -xvzf- && \
mv -v node-prune /usr/local/bin && rm -rvf * && \
echo "yarn cache clean && node-prune" > /usr/local/bin/node-clean && chmod +x /usr/local/bin/node-clean

echo "Install nodemon"
npm install -g nodemon

### Check if a directory exist ###
if [[ -d "/app" ]]
then

  if [[ -d "/app/node_modules" ]]
  then
    echo "Project ready for starting, please wait a moment set back and relax!"
    cd /app
    ls -al
    echo "npm install"
    npm install
    echo "npm run start"
    npm run start
  else
    echo "Project not ready for starting, please check your project structure!"
    echo "Change directory to app"
    cd /app
    echo "npm install"
    npm install
    echo "npm run start"
    npm run start
    # ls -al
  fi

else 
  echo "Directory project not found."
  exit 1
fi

# Call command issued to the docker service
exec "$@"
