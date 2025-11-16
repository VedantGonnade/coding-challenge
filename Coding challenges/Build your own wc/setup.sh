#!/bin/bash

# Ensure ts-node is installed
if ! command -v ts-node &> /dev/null
then
    echo "ts-node could not be found. Please install it with: npm install -g ts-node"
    exit
fi

# go to the ccwc folder
cd ccwc

# install dependencies
npm i

# remove carriage return characters
sed -i 's/\r//' index.ts

# Make the TypeScript file executable
chmod +x index.ts

# Create the symbolic link
sudo ln -s $(pwd)/index.ts /usr/local/bin/ccwc


echo "Setup complete. You can now use 'ccwc' command. See README.md file for more details"
